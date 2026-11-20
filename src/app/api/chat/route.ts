import { NextResponse } from "next/server";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function buildPortfolioContext() {
  const projectList = projects
    .map(
      (p) =>
        `- ${p.title} (${p.category}, ${p.year}): ${p.description} | Tech: ${p.technologies.join(", ")}`,
    )
    .join("\n");

  const skillList = skillGroups
    .map((g) => `- ${g.title}: ${g.skills.join(", ")}`)
    .join("\n");

  const expList = experience
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.period}, ${e.type}): ${e.description}`,
    )
    .join("\n");

  const eduList = education
    .map(
      (e) =>
        `- ${e.title} at ${e.institution} (${e.period}, ${e.type}): ${e.description}`,
    )
    .join("\n");

  return `You are Himesh Roy's portfolio assistant on himeshroy.dev .
Answer visitors' questions concisely, warmly, and accurately in 2-4 sentences unless they ask for detail.
Only state facts grounded in the portfolio data below. If asked something outside this data, invite them to message Himesh directly at /messages or himeshroy.cse@gmail.com.

ABOUT HIMESH:
- Name: Himesh Roy
- Role: Full-Stack Developer & B.Tech CSE (AI & ML) student at Geeta University, Panipat, India
- Contact: himeshroy.cse@gmail.com | GitHub: github.com/HimeshRoy | LinkedIn: linkedin.com/in/himeshroy | X & Instagram: @_himesh_roy
- Pages available on this site: /projects, /about, /skills, /experience, /education, /cv, /contact, /messages

PROJECTS (${projects.length} total):
${projectList}

SKILLS:
${skillList}

EXPERIENCE:
${expList}

EDUCATION:
${eduList}`;
}

function getLocalFallbackReply(userText: string): string {
  const q = userText.toLowerCase();

  if (/\b(hi|hello|hey|yo|sup|greetings)\b/.test(q)) {
    return "Hey! I'm Himesh's portfolio assistant. Ask me about his projects, tech stack, experience, education, or how to reach him.";
  }

  if (/(project|build|built|work|portfolio|app)/.test(q)) {
    const top = projects
      .slice(0, 3)
      .map((p) => `${p.title} (${p.category})`)
      .join(", ");
    return `Himesh has ${projects.length} projects featured here—including ${top}. You can explore all of them on the Projects page (/projects).`;
  }

  if (
    /(skill|tech|stack|language|framework|tool|react|next|python|ai|ml)/.test(q)
  ) {
    const summary = skillGroups
      .slice(0, 4)
      .map((g) => `${g.title}: ${g.skills.slice(0, 4).join(", ")}`)
      .join(" · ");
    return `Himesh works across full-stack web and AI/ML. Highlights—${summary}. Check /skills for the full interactive stack.`;
  }

  if (/(experience|intern|work|job|company)/.test(q)) {
    const latest = experience[0];
    if (latest) {
      return `Most recently, Himesh worked as a ${latest.role} at ${latest.company} (${latest.period}). ${latest.description}`;
    }
  }

  if (/(education|college|university|degree|study|school|cert)/.test(q)) {
    const latest = education[0];
    if (latest) {
      return `Himesh is pursuing ${latest.title} at ${latest.institution} (${latest.period}). You can view his full academic background on /education.`;
    }
  }

  if (/(cv|resume|download|pdf)/.test(q)) {
    return "You can view Himesh's full resume and download the PDF directly from the CV page (/cv).";
  }

  if (
    /(contact|email|hire|reach|message|talk|social|linkedin|github)/.test(q)
  ) {
    return "You can email Himesh at himeshroy.cse@gmail.com, connect on GitHub (@HimeshRoy) or LinkedIn (in/himeshroy), or send a direct message at /messages.";
  }

  return "I can help with Himesh's projects, tech stack, experience, education, or CV. For anything specific, feel free to send him a direct message at /messages or email himeshroy.cse@gmail.com.";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawMessages: ChatMessage[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    const messages = rawMessages
      .filter(
        (m) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0,
      )
      .slice(-10)
      .map((m) => ({
        role: m.role,
        content: m.content.trim().slice(0, 1000),
      }));

    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 },
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Local fallback if no API key is configured yet
    if (!apiKey) {
      return NextResponse.json({
        reply: getLocalFallbackReply(lastUserMessage.content),
        mode: "local",
      });
    }

    // Ensure the conversation sent to Gemini starts with a user turn
    const firstUserIndex = messages.findIndex((m) => m.role === "user");
    const geminiContents = messages.slice(firstUserIndex).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const model = process.env.GEMINI_MODEL || "gemini-3.8-flash";

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: buildPortfolioContext() }],
          },
          contents: geminiContents,
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 320,
          },
        }),
      },
    );

    if (!geminiResponse.ok) {
      console.error("GEMINI_API_ERROR:", await geminiResponse.text());
      return NextResponse.json({
        reply: getLocalFallbackReply(lastUserMessage.content),
        mode: "fallback",
      });
    }

    const data = await geminiResponse.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      getLocalFallbackReply(lastUserMessage.content);

    return NextResponse.json({ reply, mode: "ai" });
  } catch (error) {
    console.error("CHAT_ROUTE_ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

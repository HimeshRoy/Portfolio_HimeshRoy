export function PersonSchema() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Himesh Roy",
    url: "https://himeshroy.vercel.app",
    jobTitle: "Full Stack Developer",
    description:
      "Himesh Roy is a Full Stack Developer and AI/ML enthusiast building modern web applications and digital experiences.",
    sameAs: [
      "https://www.linkedin.com/in/himeshroy/",
      "https://github.com/HimeshRoy",
      "https://leetcode.com/u/himeshroy/",
      "https://www.instagram.com/_himesh_roy/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person),
      }}
    />
  );
}
export function PersonSchema() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "mainEntity": {
      "@type": "Person",
      "@id": "https://himeshroy.vercel.app/#person",

      "name": "Himesh Roy",
      "url": "https://himeshroy.vercel.app/",
      "jobTitle": "Full Stack Developer",

      "description":
        "Himesh Roy is a Full Stack Developer and AI/ML enthusiast building modern web applications and digital experiences.",

      "sameAs": [
        "https://www.linkedin.com/in/himeshroy/",
        "https://github.com/HimeshRoy",
        "https://leetcode.com/u/himeshroy/",
        "https://www.instagram.com/_himesh_roy/"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profile),
      }}
    />
  );
}
import { Helmet } from "react-helmet-async";

function SEO({ title, description, path }) {
  const site = "Rastriya Illegal Party";
  const fullTitle = title ? `${title} | ${site}` : site;
  const desc = description || "A Gen-Z political movement built by young minds with bold ideas, digital vision, and a future-first mindset. Change starts with voices that refuse to stay quiet.";
  const url = `https://rastriya-illeigal-party-nepal.vercel.app${path || "/"}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="Rastriya Illegal Party, Nepal, Gen-Z, political movement, youth politics, digital Nepal" />
      <meta name="author" content="Rastriya Illegal Party" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://rastriya-illeigal-party-nepal.vercel.app/og-image.png" />
      <meta property="og:site_name" content={site} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content="https://rastriya-illeigal-party-nepal.vercel.app/og-image.png" />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;

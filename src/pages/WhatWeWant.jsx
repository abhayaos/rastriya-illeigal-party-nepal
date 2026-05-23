import React from "react";
import { Leaf, Smartphone, Monitor, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";

function WhatWeWant() {
  const demands = [
    {
      icon: <Leaf size={36} />,
      title: "Legalize Ganja",
      desc: "Marijuana should be legalized for medicinal and recreational use. End the prohibition that fuels black markets and criminalizes citizens.",
    },
    {
      icon: <Smartphone size={36} />,
      title: "Unban Telegram",
      desc: "Ncell and ISPs must stop blocking Telegram. Free communication is a fundamental right - not a bargaining chip.",
    },
    {
      icon: <Monitor size={36} />,
      title: "Reshape Education",
      desc: "Resign the education minister - or let students code on laptops instead of rotting in copy-paste homework. Real skills, real tools.",
    },
    {
      icon: <MessageCircle size={36} />,
      title: "Allow Free Speech",
      desc: "No more fear. No more arrests for opinions. True democracy demands that every voice - especially critical ones - can speak without threat.",
    },
  ];

  return (
    <main style={{ background: '#f4e8c1', color: '#2c1810', minHeight: '100vh' }}>
      <SEO title="What We Want" description="Legalize ganja, unban Telegram, reshape education, allow free speech. Our demands for a new Nepal." path="/what-we-want" />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="vintage-badge px-4 py-2 text-sm mb-6" style={{ display: 'inline-block' }}>
            Our Demands
          </span>

          <h1 className="vintage-heading text-5xl md:text-7xl mt-4 leading-tight">
            What <span className="vintage-heading-red">We Want</span>
          </h1>

          <hr className="vintage-divider" style={{ maxWidth: '20rem', margin: '2rem auto' }} />

          <p className="text-lg md:text-xl leading-8 max-w-3xl mx-auto" style={{ color: '#5c3a1e' }}>
            Nepal's generation Z didn't ask for a broken system. But we're here,
            and we're demanding what's ours - a future built with transparency,
            technology, and true representation.
          </p>
        </div>
      </section>

      {/* Demands Grid */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            The Demands
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mt-14">
            {demands.map((d, i) => (
              <div key={i} className="vintage-role-card" style={{ textAlign: 'left' }}>
                <div style={{ color: '#8b0000', marginBottom: '1rem' }}>
                  {d.icon}
                </div>
                <h3 className="vintage-heading text-xl">{d.title}</h3>
                <p className="mt-3" style={{ color: '#5c3a1e', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="vintage-heading text-4xl vintage-underline-gold">
            The Manifesto
          </h2>

          <div className="vintage-card p-8 md:p-12 mt-12">
            <p className="text-lg leading-8" style={{ color: '#5c3a1e' }}>
              We want a Nepal where a kid in a village has the same internet access
              as a kid in Kathmandu. Where your ability to code matters more than
              your family name. Where politics is transparent, leaders are
              accountable, and the future isn't something that happens to us -
              it's something we build.
            </p>
            <hr className="vintage-divider" style={{ maxWidth: '12rem', margin: '2rem auto' }} />
            <p className="vintage-heading text-2xl" style={{ color: '#8b0000' }}>
              Abolish the old. Build the new.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default WhatWeWant;

import React from "react";
import { Flag, Lightbulb, Heart, Target, Crown } from "lucide-react";
import SEO from "../components/SEO";

function About() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      desc: "Tech-driven solutions for Nepal's oldest problems.",
    },
    {
      icon: <Heart size={32} />,
      title: "Youth Power",
      desc: "Gen-Z leading the charge with fresh energy and ideas.",
    },
    {
      icon: <Target size={32} />,
      title: "Fearless Action",
      desc: "We don't wait for permission. We build.",
    },
    {
      icon: <Flag size={32} />,
      title: "Digital First",
      desc: "Politicking reimagined for the internet generation.",
    },
  ];

  return (
    <main style={{ background: '#f4e8c1', color: '#2c1810', minHeight: '100vh' }}>
      <SEO title="About" description="Learn about Rastriya Illegal Party - a Gen-Z political movement founded by Abhaya Bikram Shahi. Innovation, youth power, fearless action, and digital first." path="/about" />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="vintage-badge px-4 py-2 text-sm mb-6" style={{ display: 'inline-block' }}>
            Who We Are
          </span>

          <h1 className="vintage-heading text-5xl md:text-7xl mt-4 leading-tight">
            About <span className="vintage-heading-red">The Movement</span>
          </h1>

          <hr className="vintage-divider" style={{ maxWidth: '24rem', margin: '2rem auto' }} />

          <p className="text-lg md:text-xl leading-8 max-w-3xl mx-auto" style={{ color: '#5c3a1e' }}>
            Rastriya Illegal Party is a Gen-Z political movement born in Nepal -
            built by young minds who refuse to inherit broken systems.
            We are developers, designers, dreamers, and defiant optimists
            building a future-first Nepal.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            What We Stand For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((v, i) => (
              <div key={i} className="vintage-role-card" style={{ textAlign: 'center' }}>
                <div style={{ color: '#8b0000', marginBottom: '1rem' }}>
                  {v.icon}
                </div>
                <h3 className="vintage-heading text-xl">{v.title}</h3>
                <p className="mt-2" style={{ color: '#5c3a1e', fontSize: '0.9rem' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            Founder
          </h2>

          <div className="vintage-card p-8 md:p-12 mt-12 max-w-md mx-auto">
            <div style={{ color: '#b8860b', marginBottom: '1rem' }}>
              <Crown size={48} />
            </div>
            <h3 className="vintage-heading text-3xl">Abhaya Bikram Shahi</h3>
            <hr className="vintage-divider" style={{ maxWidth: '12rem', margin: '1.5rem auto' }} />
            <p className="text-lg leading-8" style={{ color: '#5c3a1e' }}>
              The visionary behind Rastriya Illegal Party. A builder who believes
              Nepal's future belongs to those who create it - not those who wait for it.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            Our Belief
          </h2>

          <div className="vintage-card p-8 md:p-12 mt-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-8" style={{ color: '#5c3a1e' }}>
              Nepal doesn't need more politicians. It needs builders.
              We believe the people closest to the problems are closest to the
              solutions. Lazy developers automate inefficiency. Graphic designers
              make change seen. Extroverts turn ideas into movements. And the
              fearless - they make the impossible inevitable.
            </p>
            <p className="mt-6 vintage-heading text-xl text-center" style={{ color: '#8b0000' }}>
              "Build, don't wait."
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;

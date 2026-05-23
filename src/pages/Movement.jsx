import React from "react";
import { Code, Palette, Users, Zap } from "lucide-react";
import SEO from "../components/SEO";

function Movement() {
  const rules = [
    "No ego - the movement is bigger than any individual.",
    "Build first, ask permission later.",
    "Bring skills, not titles. What you can do matters more.",
    "Speak up. Extroverts lead, introverts build - both are needed.",
    "Fail fast, learn faster. Fearless doesn't mean reckless.",
    "Digital by default. Every meeting, every plan, every vote.",
    "Respect the code. Ethical tech, transparent systems.",
    "Lazy is a superpower - automate everything boring.",
  ];

  const roles = [
    {
      icon: <Code size={36} />,
      title: "Lazy Developers",
      desc: "You write code that does the work so people don't have to. Automation, tools, platforms - you build the backbone.",
      color: "#2c1810",
    },
    {
      icon: <Palette size={36} />,
      title: "Graphic Designers",
      desc: "You make the invisible visible. Branding, UI, motion - if it looks good, it lands harder.",
      color: "#8b4513",
    },
    {
      icon: <Users size={36} />,
      title: "Extroverts",
      desc: "You talk to strangers, build bridges, recruit talent, and sell the vision. The movement grows because of you.",
      color: "#b8860b",
    },
    {
      icon: <Zap size={36} />,
      title: "Fearless",
      desc: "You walk into rooms no one else will. You challenge power, speak truth, and never back down.",
      color: "#8b0000",
    },
  ];

  return (
    <main style={{ background: '#f4e8c1', color: '#2c1810', minHeight: '100vh' }}>
      <SEO title="Join the Movement" description="Join Rastriya Illegal Party. We need lazy developers, graphic designers, extroverts, and the fearless. Read the code, pick your role, and build a new Nepal." path="/movement" />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="vintage-badge px-4 py-2 text-sm mb-6" style={{ display: 'inline-block' }}>
            Join the Revolution
          </span>

          <h1 className="vintage-heading text-5xl md:text-7xl mt-4 leading-tight">
            The <span className="vintage-heading-red">Movement</span>
          </h1>

          <hr className="vintage-divider" style={{ maxWidth: '20rem', margin: '2rem auto' }} />

          <p className="text-lg md:text-xl leading-8 max-w-3xl mx-auto" style={{ color: '#5c3a1e' }}>
            We're not waiting for change. We're building it.
            Lazy developers, graphic designers, extroverts, and the fearless -
            this is your call.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            The Code
          </h2>

          <div className="mt-12 space-y-4">
            {rules.map((rule, i) => (
              <div key={i} className="vintage-rule">
                <span style={{ color: '#5c3a1e', lineHeight: 1.6 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Needed */}
      <section className="py-20 px-6" style={{ borderTop: '3px double #8b4513' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="vintage-heading text-4xl text-center vintage-underline-gold">
            We Need You
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {roles.map((role, i) => (
              <div key={i} className="vintage-role-card">
                <div style={{ color: role.color, marginBottom: '1rem' }}>
                  {role.icon}
                </div>
                <h3 className="vintage-heading text-xl">{role.title}</h3>
                <p className="mt-3" style={{ color: '#5c3a1e', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Movement;

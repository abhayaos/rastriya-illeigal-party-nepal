import React from "react";
import { Flag, Users, Vote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Home() {
    const supporterCount = 6;
    const electionVision = 2026;
    const districtPlans = 4;
    const coreMembers = "Gen-Z";
  return (
    <main style={{ background: '#f4e8c1', color: '#2c1810', minHeight: '100vh' }}>
      <SEO description="Rastriya Illegal Party is a Gen-Z political movement in Nepal. Join youth leading digital transformation, tech-driven governance, and real change." />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <span className="vintage-badge px-4 py-2 text-sm">
              Gen-Z Political Movement • 2026
            </span>

            <h1 className="vintage-heading text-5xl md:text-7xl mt-6 leading-tight">
              Rastriya <span className="vintage-heading-red">Illegal</span> Party
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: '#5c3a1e' }}>
              A movement built by young minds with bold ideas, digital vision,
              and a future-first mindset. Change starts with voices that refuse
              to stay quiet.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/movement"
                className="vintage-btn px-7 py-3 flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                Join Movement
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="vintage-btn-outline px-7 py-3"
                style={{ textDecoration: 'none' }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="vintage-card p-8">
              <div className="grid grid-cols-2 gap-5">

                <div className="vintage-stat p-5">
                  <Users style={{ color: '#8b0000', marginBottom: '0.75rem' }} size={28}/>
                  <h2 className="vintage-heading text-3xl">{supporterCount}</h2>
                  <p style={{ color: '#5c3a1e' }}>Supporters</p>
                </div>

                <div className="vintage-stat p-5">
                  <Vote style={{ color: '#8b0000', marginBottom: '0.75rem' }} size={28}/>
                  <h2 className="vintage-heading text-3xl">{electionVision}</h2>
                  <p style={{ color: '#5c3a1e' }}>Election Vision</p>
                </div>

                <div className="vintage-stat p-5">
                  <Flag style={{ color: '#8b0000', marginBottom: '0.75rem' }} size={28}/>
                  <h2 className="vintage-heading text-3xl">{districtPlans}+</h2>
                  <p style={{ color: '#5c3a1e' }}>District Plans</p>
                </div>

                <div className="vintage-stat p-5">
                  <Users style={{ color: '#8b0000', marginBottom: '0.75rem' }} size={28}/>
                  <h2 className="vintage-heading text-3xl">{coreMembers}</h2>
                  <p style={{ color: '#5c3a1e' }}>Core Members</p>
                </div>

              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                zIndex: -10,
                width: '16rem',
                height: '16rem',
                background: '#8b0000',
                filter: 'blur(120px)',
                opacity: 0.15,
                borderRadius: '50%',
                top: '2.5rem',
                right: '2.5rem',
              }}
            ></div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6"
        style={{ borderTop: '3px double #8b4513' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="vintage-heading text-4xl vintage-underline-gold">
            About The Movement
          </h2>

          <p className="mt-8 max-w-3xl mx-auto leading-8" style={{ color: '#5c3a1e', fontSize: '1.125rem' }}>
            We focus on youth leadership, innovation, technology,
            entrepreneurship, and digital transformation. The next generation
            should help shape the future.
          </p>

          <Link
            to="/about"
            className="vintage-btn-outline mt-8 px-6 py-2"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;

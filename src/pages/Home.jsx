import React from "react";
import { Flag, Users, Vote, ArrowRight } from "lucide-react";

function Home() {
    const supporterCount = 6;
    const electionVision = 2026;
    const districtPlans = 4;
    const coreMembers = "Gen-Z";
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <span className="bg-red-600/20 text-red-500 px-4 py-2 rounded-full text-sm border border-red-600">
              🇳🇵 Gen-Z Political Movement • 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
              Rastriya <span className="text-red-600">Illegal</span> Party
            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-8">
              A movement built by young minds with bold ideas, digital vision,
              and a future-first mindset. Change starts with voices that refuse
              to stay quiet.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-full font-semibold flex items-center gap-2">
                Join Movement
                <ArrowRight size={18} />
              </button>

              <button className="border border-red-600 text-red-500 px-7 py-3 rounded-full hover:bg-red-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-zinc-900 border border-red-600 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-5">

                <div className="bg-black p-5 rounded-2xl border border-zinc-800">
                  <Users className="text-red-500 mb-3" size={28}/>
                  <h2 className="text-3xl font-bold">{supporterCount}</h2>
                  <p className="text-gray-400">Supporters</p>
                </div>

                <div className="bg-black p-5 rounded-2xl border border-zinc-800">
                  <Vote className="text-red-500 mb-3" size={28}/>
                  <h2 className="text-3xl font-bold">{electionVision}</h2>
                  <p className="text-gray-400">Election Vision</p>
                </div>

                <div className="bg-black p-5 rounded-2xl border border-zinc-800">
                  <Flag className="text-red-500 mb-3" size={28}/>
                  <h2 className="text-3xl font-bold">{districtPlans}+</h2>
                  <p className="text-gray-400">District Plans</p>
                </div>

                <div className="bg-black p-5 rounded-2xl border border-zinc-800">
                  <Users className="text-red-500 mb-3" size={28}/>
                  <h2 className="text-3xl font-bold">{coreMembers}</h2>
                  <p className="text-gray-400">Core Members</p>
                </div>

              </div>
            </div>

            <div className="absolute -z-10 w-64 h-64 bg-red-600 blur-[120px] opacity-30 rounded-full top-10 right-10"></div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6 border-t border-zinc-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            About The Movement
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We focus on youth leadership, innovation, technology,
            entrepreneurship, and digital transformation. The next generation
            should help shape the future.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Home;
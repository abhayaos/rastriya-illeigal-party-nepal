export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-red-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-3xl text-center z-10">
        <h1 className="text-8xl md:text-[180px] font-black text-red-600 leading-none">
          404
        </h1>

        <div className="bg-zinc-900 border border-red-600 rounded-3xl p-8 mt-6 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            KP Oli ra Prachanda jastai... 🤨
          </h2>

          <p className="text-zinc-300 text-lg leading-8">
            Hami bhageko chainam 😭<br/>
            Yo page ajhai banaudai chha, alliance milna baki chha, 
            committee basna baki chha, ani report aauna baki chha.
          </p>

          <div className="mt-8 text-zinc-400 italic">
            "Tapai le khojnu bhayeko page rajnitik sthirata jastai
            vetina sakena..."
          </div>

          <a
            href="/"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition"
          >
            Farkinu Parxa 🏃
          </a>
        </div>
      </div>
    </div>
  )
}

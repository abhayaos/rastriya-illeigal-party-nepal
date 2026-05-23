import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
    <SEO title="404 - Page Not Found" description="Oops! This page doesn't exist. Rastriya Illegal Party - Gen-Z political movement in Nepal." path="/*" />
    <div
      style={{
        minHeight: '100vh',
        background: '#f4e8c1',
        color: '#2c1810',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '24rem',
          height: '24rem',
          background: '#8b0000',
          filter: 'blur(120px)',
          opacity: 0.1,
          borderRadius: '50%',
        }}
      ></div>

      <div className="max-w-3xl text-center" style={{ position: 'relative', zIndex: 10 }}>
        <h1
          className="vintage-heading-red"
          style={{ fontSize: '8rem', lineHeight: 1, fontStyle: 'italic' }}
        >
          404
        </h1>

        <div className="vintage-card p-8 mt-6">
          <h2 className="vintage-heading text-3xl md:text-5xl mb-5">
            KP Oli ra Prachanda jastai...
          </h2>

          <p style={{ color: '#5c3a1e', fontSize: '1.125rem', lineHeight: 2 }}>
            Hami bhageko chainam<br/>
            Yo page ajhai banaudai chha, alliance milna baki chha,
            committee basna baki chha, ani report aauna baki chha.
          </p>

          <div
            className="mt-8"
            style={{ color: '#8b4513', fontStyle: 'italic' }}
          >
            "Tapai le khojnu bhayeko page rajnitik sthirata jastai
            vetina sakena..."
          </div>

          <a
            href="/"
            className="vintage-btn inline-block mt-8 px-8 py-4"
            style={{ textDecoration: 'none' }}
          >
            Farkinu Parxa
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

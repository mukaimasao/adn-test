export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,var(--verde-wash)_0%,var(--creme)_58%)]" id="accueil">
      <span className="pointer-events-none absolute inset-0 before:absolute before:-right-[120px] before:-top-[150px] before:h-[420px] before:w-[420px] before:rounded-full before:bg-[radial-gradient(circle_at_40%_40%,var(--dourado-wash),transparent_68%)] before:opacity-70 before:blur-[8px]" />
      <div className="container">
        <div className="reveal relative mx-auto max-w-[760px] py-[clamp(40px,6vw,80px)] text-center">
          <div style={{ marginTop: 22 }}>
          </div>
          <h1 className="mt-[18px] break-words text-[clamp(30px,5.5vw,50px)] font-bold tracking-[-.022em]">
            Présentez votre <span className="hl">candidature</span>
          </h1>
          <div className="mt-2.5 font-[var(--font-script)] text-[clamp(26px,4vw,38px)] text-[var(--verde-medio)]">La confiance à domicile</div>
          <p className="mt-[18px] text-[clamp(16px,2vw,19px)] text-[var(--texto-suave)]">
            Complétez vos coordonnées afin que nous puissions mieux connaître votre expérience,
            vos disponibilités et les tâches que vous réalisez.
          </p>
        </div>
      </div>
    </section>
  );
}

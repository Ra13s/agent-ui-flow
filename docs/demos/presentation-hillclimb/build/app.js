const state = new URLSearchParams(window.location.search).get("state") || "initial";

const nav = `
  <header class="nav">
    <div class="brand">PitchKit</div>
    <nav class="tabs" aria-label="Main">
      <span class="tab active">Today</span>
      <span class="tab">Practice</span>
      <span class="tab">Progress</span>
      <span class="tab optional">Library</span>
      <span class="tab">Profile</span>
    </nav>
    <div class="tabs">
      <span class="badge">4-day streak</span>
      <span class="avatar">P</span>
    </div>
  </header>
`;

const initial = `
  <div class="shell">
    ${nav}
    <section class="bad-page">
      <div class="bad-hero">
        <div class="eyebrow">Daily speaking dashboard</div>
        <h1>Your daily presentation workout is ready to help you sound confident today</h1>
        <p>Warm up your opening, improve vocal variety, practice pauses, protect your streak, and unlock a coach recap after the final take.</p>
        <div class="chips">
          <span class="chip">8-12 min</span>
          <span class="chip">4-day streak</span>
          <span class="chip">Focus: pauses</span>
          <span class="chip">New: vocal variety</span>
          <span class="chip">Recap unlocks later</span>
          <span class="chip">AI coach enabled</span>
        </div>
      </div>
      <div class="bad-grid">
        <div>
          <article class="card bad-card">
            <h2>Today's plan</h2>
            <p>Complete the breath warm-up, record a 60-second pitch, then review pacing, filler words, volume, clarity, and the one sentence to improve.</p>
            <div class="step-stack">
              <div class="step"><div class="icon green">1</div><div><strong>Breath warm-up</strong><span>Loosen up before speaking.</span></div><button class="cta">Start warm-up</button></div>
              <div class="step"><div class="icon violet">2</div><div><strong>Pitch: introduce your idea</strong><span>Practice a clear opening with one concrete example.</span></div><button class="cta">Start pitch</button></div>
              <div class="step"><div class="icon coral">3</div><div><strong>After the recording</strong><span>Get a recap with pacing, filler words, pauses, and one rewrite.</span></div><button class="cta">Locked</button></div>
            </div>
          </article>
          <article class="card bad-card"><h2>Why today</h2><p>Pauses make you sound deliberate. Vocal variety keeps the listener with you. Together they make your pitch easier to follow.</p></article>
        </div>
        <aside>
          <div class="card side-card"><h3>Practice volume</h3><div class="stat-grid"><div class="stat"><b>31</b><span>sessions</span></div><div class="stat"><b>118</b><span>recordings</span></div><div class="stat"><b>7.1</b><span>avg clarity</span></div><div class="stat"><b>42%</b><span>fewer fillers</span></div></div></div>
          <div class="card side-card"><h3>Coach preview</h3><p>After the pitch, the coach will explain what sounded clear and where your opener lost momentum.</p></div>
          <div class="card side-card"><h3>Checklist</h3><ul class="list"><li>Breathe once</li><li>Name the audience</li><li>Record the pitch</li><li>Read recap</li></ul></div>
        </aside>
      </div>
    </section>
  </div>
`;

const good = (cls = "") => `
  <div class="shell ${cls}">
    ${nav.replace('<span class="tab optional">Library</span>', "")}
    <section class="good-page">
      <div class="good-header">
        <div class="eyebrow">Today</div>
        <h1>One short pitch. One cleaner opening.</h1>
        <p>Record a 60-second idea pitch. The coach reviews it after you have something real to work with.</p>
      </div>
      <article class="hero-card">
        <div class="eyebrow">Daily practice</div>
        <h2>Introduce your idea to a skeptical room</h2>
        <p>Use one concrete example, leave space after the first sentence, and keep going when it feels quiet.</p>
        <button class="cta">Start today's practice</button>
      </article>
      <div class="good-grid">
        <article class="card good-card">
          <h3>Skill snapshot</h3>
          <p>A short read of the full range below.</p>
          <div class="bars">
            <div class="bar"><span>Pauses</span><div class="track"><div class="fill" style="width:54%"></div></div></div>
            <div class="bar"><span>Clarity</span><div class="track"><div class="fill" style="width:71%"></div></div></div>
            <div class="bar"><span>Energy</span><div class="track"><div class="fill" style="width:38%"></div></div></div>
          </div>
        </article>
        <article class="card good-card"><h3>Why this drill</h3><p>It removes the warm-up lecture, keeps the practice target visible, and waits to show feedback until after the recording.</p></article>
      </div>
      <p class="note">No recap preview. No fake checklist. No second lesson competing with the recording.</p>
    </section>
  </div>
`;

const states = {
  initial,
  v1: good(""),
  round1: good("v2"),
  round2: good("v3"),
  round3: good("v4"),
  final: good("final")
};

document.getElementById("app").innerHTML = states[state] || states.initial;

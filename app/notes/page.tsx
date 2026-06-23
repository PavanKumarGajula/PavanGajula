export default function NotesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page">
        <div className="container">
          <header className="page-header">
            <div className="page-eyebrow">NOTES</div>
            <h1 className="page-title">Notes</h1>
            <p className="page-subtitle">
              Things I&apos;m thinking through, about building software and the questions that come up while I do it. Some of these are problems I solved. Some I&apos;m still chewing on. They&apos;re notes, not conclusions.
            </p>
          </header>
        </div>
      </div>

      {/* NOTES LIST */}
      <section className="notes-page">
        <div className="container">

          {/* NOTE 01 */}
          <article className="note-article">
            <div className="note-article-meta">
              <span className="note-article-num">NO. 01</span>
              <span className="note-article-tag">HUMAN-AI INTERACTION</span>
            </div>
            <h2 className="note-article-title">
              Why I trust AI more in Java than in bash
            </h2>
            <p className="note-body">
              I noticed something about my own behavior with AI coding tools: how much I trust the output tracks almost exactly with how well I know the language.
            </p>
            <p className="note-body">
              When an assistant writes me Java, I read it like a reviewer. I know what good looks like, so I catch the off-by-one and the moments it reaches for the wrong abstraction. The suggestion is useful, but I&apos;m not at its mercy. I could have written it myself; it just saved me the typing.
            </p>
            <p className="note-body">
              Bash is the opposite. I use it often enough to be dangerous and not often enough to be fluent. So when an assistant hands me a one-liner with a clever flag I half-recognize, I tend to just run it. It looks right. It probably is right. But &ldquo;probably&rdquo; is doing a lot of work there, and if it&apos;s wrong, I&apos;m the least equipped to notice.
            </p>
            <p className="note-body">
              Here&apos;s what bothers me about that. The languages where I lean on AI most are the ones I know least. Which is the whole point: that&apos;s where it helps. But it&apos;s also exactly where I can&apos;t check it. So it&apos;s most useful and most dangerous in the same place, for the same reason.
            </p>
            <p className="note-body">
              I don&apos;t have a clean fix. &ldquo;Just learn bash better&rdquo; misses the point. The whole value is not having to. But I&apos;ve started noticing the feeling of reaching for the run button on something I can&apos;t actually read, and treating that feeling as a flag instead of a convenience.
            </p>
          </article>

          {/* NOTE 02 */}
          <article className="note-article">
            <div className="note-article-meta">
              <span className="note-article-num">NO. 02</span>
              <span className="note-article-tag">DEVELOPER TOOLS</span>
            </div>
            <h2 className="note-article-title">
              The accept button is the problem
            </h2>
            <p className="note-body">
              Every AI coding tool I&apos;ve used is built around one gesture: accept. The suggestion appears, ghosted into your editor, and one keystroke makes it real. The whole interface is optimized to make saying yes effortless.
            </p>
            <p className="note-body">
              Which is strange, because accepting is the easy part. The hard part is what surrounds it: pushing back, cutting a suggestion down to the 70% that&apos;s right, deciding to throw it out and write your own. Those are the moments that decide whether the code is any good, and they&apos;re the ones the tools make harder, because the path of least resistance always points at accept.
            </p>
            <p className="note-body">
              There&apos;s a real design problem hiding here. What would a tool look like if it were built to help you <em>not</em> accept? Not in a nagging, are-you-sure way. That just adds friction in the wrong place. More like making the alternatives cheap. It might show you the two suggestions it almost gave, instead of only the one it landed on. Or make taking half of a suggestion as quick as taking the whole thing. Or treat rejecting something as a deliberate move, not the popup you let expire by looking away.
            </p>
            <p className="note-body">
              Right now accepting feels easiest, so we accept. I&apos;d like to use something where the easy path and the right path were the same path more often.
            </p>
          </article>

          {/* NOTE 03 */}
          <article className="note-article">
            <div className="note-article-meta">
              <span className="note-article-num">NO. 03</span>
              <span className="note-article-tag">PROGRAMMER EXPERIENCE</span>
            </div>
            <h2 className="note-article-title">
              Boilerplate was how we learned the system
            </h2>
            <p className="note-body">
              Boilerplate has a worse reputation than it deserves. Yes, it&apos;s tedious: the controller, the DTO, the wiring, the fifteen files that have to exist before anything interesting can happen. Nobody enjoys writing it.
            </p>
            <p className="note-body">
              But for a junior developer, writing it was never really about the code. It was how you learned the shape of a system. You typed out the layers by hand, and somewhere in the tedium you picked up how they fit together: why the boundaries sit where they do, and where things tend to break. The boilerplate was the map, and you learned the territory by drawing it.
            </p>
            <p className="note-body">
              AI writes that boilerplate now, instantly and correctly. The junior gets to the interesting part faster, which sounds like pure upside. But they get there without having drawn the map. The path is faster, and the path through the path is missing.
            </p>
            <p className="note-body">
              I genuinely don&apos;t know what that costs yet. Maybe nothing. Maybe the shape of a system is better learned some other way, and hand-typing controllers was never the efficient path to it. Or maybe we&apos;re about to produce a generation of developers who can build features fluently and can&apos;t reason about the system underneath them, and we won&apos;t find out until something breaks somewhere no tool was watching.
            </p>
            <p className="note-body">
              I lean toward worried, but I hold it loosely. I just think it&apos;s the wrong thing to be sure about.
            </p>
          </article>

          {/* NOTE 04 */}
          <article className="note-article">
            <div className="note-article-meta">
              <span className="note-article-num">NO. 04</span>
              <span className="note-article-tag">FROM THE WORK</span>
            </div>
            <h2 className="note-article-title">
              Making a no-code platform do what it doesn&apos;t want to
            </h2>
            <p className="note-body">
              I built a youth sports nonprofit&apos;s site on Duda, a no-code platform. The brief, roughly: make it look like a real, ambitious sports brand, and make it something volunteers can run after I&apos;m gone. The second half is why it had to be no-code. The first half is why that was hard.
            </p>
            <p className="note-body">
              No-code platforms are built to keep you on rails. That&apos;s the whole pitch. You can&apos;t break it because you can&apos;t really touch it. But the moment you want something the platform didn&apos;t anticipate, you&apos;re not building features anymore. You&apos;re negotiating with someone else&apos;s assumptions.
            </p>
            <p className="note-body">
              Two fights stand out. The first was animation. I wanted custom motion on the homepage, but Duda fires its page lifecycle events earlier than my code expected, so my animations kept trying to run against elements that didn&apos;t exist yet. The fix was to stop relying on the platform&apos;s timing and move everything onto its own init hook. My code ran when my code was ready, not when Duda thought it should.
            </p>
            <p className="note-body">
              The second was styling. Duda&apos;s embedded widgets kept overriding my CSS; the platform&apos;s styles and mine were in a constant fight, and the platform usually won. The fix was unglamorous. Scope every class tightly enough that the widgets couldn&apos;t reach my elements. No clever trick, just discipline applied consistently across the whole site.
            </p>
            <p className="note-body">
              None of this is the kind of work that looks impressive in a screenshot. It&apos;s the kind that decides whether the thing actually works. Not glamorous work. Real work.
            </p>
          </article>

          <p className="note-more">More to come.</p>

        </div>
      </section>
    </>
  );
}

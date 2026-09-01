import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "ShopWave E-Commerce",
      description:
        "A responsive e-commerce platform built with React, JavaScript and Tailwind CSS with product browsing, cart, wishlist, authentication and checkout functionality.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      live: "https://shop-wave-orcin.vercel.app/",
      github: "https://github.com/Ramalingam-Balaji/ShopWave",
    },
   {
  title: "Eat-Protein",
  description:
     "A responsive protein-focused food platform featuring healthy products, diet plans, fitness content and recipes, built using React and Tailwind CSS.",
  image:
    "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
  technologies: ["React", "JavaScript", "Tailwind CSS"],
  live: "https://eat-protein.vercel.app/",
  github: "https://github.com/Ramalingam-Balaji/Eat-Protein",
},
    {
      title: "Responsive Portfolio",
      description:
        "A clean and responsive personal portfolio website designed to showcase skills, projects and contact information.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
      technologies: ["React", "Tailwind CSS"],
      live: "https://my-portfolio-roan-one-tdwyn44w9t.vercel.app/",
      github: "https://github.com/Ramalingam-Balaji/Portfolio",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "React Router",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Vercel",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            Balaji<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a
                href="#home"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
            <ul className="flex flex-col gap-5">

              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>

            <p className="mb-3 text-lg text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
              Ramalingam
              <br />
              <span className="text-cyan-400">
                Balaji
              </span>
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-slate-300 md:text-3xl">
              Frontend Developer
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, responsive and user-friendly web
              applications using React, JavaScript and Tailwind CSS.
              I enjoy turning ideas into clean and interactive
              digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Get In Touch
              </a>

            </div>
          </div>


          {/* Hero Card */}
          <div className="flex justify-center">

  {/* Coin Container */}
  <div className="group relative h-72 w-72 md:h-96 md:w-96">

    {/* Outer Circle */}
    <div className="absolute inset-0 rounded-full border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-500/10"></div>

    {/* Coin */}
    <div
      className="relative h-full w-full cursor-pointer rounded-full [perspective:1000px]"
    >

      {/* Rotating Inner Circle */}
      <div
        className="
          relative h-full w-full
          rounded-full
          transition-transform
          duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >

        {/* ================= FRONT - PHOTO ================= */}
        <div
          className="
            absolute inset-5
            overflow-hidden
            rounded-full
            border-4 border-cyan-400
            bg-slate-800
            [backface-visibility:hidden]
          "
        >
          <img
            src="/Balaji.png"
            alt="Ramalingam Balaji"
            className="h-full w-full object-cover"
          />
        </div>


        {/* ================= BACK - CONTENT ================= */}
        <div
          className="
            absolute inset-5
            flex
            rotate-y-180
            items-center
            justify-center
            rounded-full
            border-4 border-cyan-400
            bg-slate-900
            text-center
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >

          <div className="px-6">

            <p className="mb-3 text-5xl font-bold text-cyan-400">
              &lt;/&gt;
            </p>

            <h3 className="text-xl font-bold text-white md:text-2xl">
              React Developer
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
              Creating modern, responsive and interactive
              digital experiences.
            </p>

          </div>

        </div>

      </div>
    </div>

  </div>

</div>
</div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-slate-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-4 text-center text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mx-auto mb-14 h-1 w-16 rounded bg-cyan-400"></div>

          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-6 text-lg leading-8 text-slate-400">
              I am a passionate frontend developer interested in
              creating clean, responsive and interactive web
              applications. I enjoy learning modern technologies
              and applying them to real-world projects.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              My primary focus is React.js and JavaScript, along
              with Tailwind CSS for creating modern interfaces.
              I also have experience working with Node.js and MongoDB.
            </p>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="bg-slate-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="mx-auto mb-14 mt-4 h-1 w-16 rounded bg-cyan-400"></div>

          <div className="flex flex-wrap justify-center gap-4">

            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-slate-700 bg-slate-950 px-6 py-3 font-medium text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="mx-auto mb-14 mt-4 h-1 w-16 rounded bg-cyan-400"></div>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
              >

                <div className="h-52 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />

                </div>


                <div className="p-6">

                  <h3 className="mb-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-7 text-slate-400">
                    {project.description}
                  </p>


                  <div className="mb-6 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>


                  <div className="flex gap-5">

                    <a
                      href={project.live}
                      className="font-semibold text-cyan-400 hover:underline"
                    >
                      Live Demo →
                    </a>

                    <a
                      href={project.github}
                      className="font-semibold text-slate-300 hover:text-white"
                    >
                      GitHub →
                    </a>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-slate-900 px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div className="mx-auto mb-8 mt-4 h-1 w-16 rounded bg-cyan-400"></div>

          <p className="mb-8 text-lg leading-8 text-slate-400">
            Have a project in mind or want to discuss an
            opportunity? Feel free to get in touch with me.
          </p>

          <a
            href="mailto:ramalingambalaji54@gmail.com"
            className="inline-block rounded-full bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Say Hello
          </a>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center">

        <p className="text-slate-400">
          © 2026 Ramalingam Balaji. All Rights Reserved.
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Built with React & Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;
function Home() {
    return (
            <section
      id="home"
      className="overflow-hidden min-h-screen items-center justify-center mx-auto mb-32 gap-12 px-12 flex flex-col "
    >

        <span className="text-[3rem] font-extrabold">Soy Adrian Gomez</span>
        <h1 className="text-[5rem] font-extrabold inline-block mt-2 bg-clip-text text-purple-500">
          &lt;Full-Stack Developer&gt;
        </h1>
        <p className="mt-4 text-[20px]">
          Desarrollador web apasionado por transformar ideas en aplicaciones útiles y eficientes.
          Enfocado en generar impacto real y en un crecimiento continuo.
        </p>
        <a
          href="https://www.linkedin.com/in/adriangomezf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 mt-6 inline-block "
        >
          <img
            src="lin.png"
            alt="LinkedIn"
            className="w-24 h-24 hover:scale-110 transition-transform duration-300"
          />
        </a>
    </section>
    );
}

export default Home;
import { useTranslation } from "react-i18next";

function Home() {

  const { t } = useTranslation();
  
  return (
    <section
      id="home"
      className="overflow-hidden min-h-screen items-center justify-center mx-auto mb-32 gap-2 px-12 flex flex-col"
    >
      <span className="mt-24 md:text-[3rem] text-[2rem] font-extrabold">{t("home.title")}</span>
      <h1 className="md:text-[5rem] text-[3rem] font-extrabold  mt-2 bg-clip-text text-purple-500">
        &lt;Full-Stack Developer&gt;
      </h1>
      <p className="mt-4 text-[20px]">
        {t("home.p1")}
      </p>
      <a
        href="https://www.linkedin.com/in/adriangomezf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 mt-6 "
      >
        <img
          src="lin.png"
          alt="LinkedIn"
          className="w-24 h-24 hover:scale-110 transition-transform duration-300 mt-12"
        />
      </a>
    </section>
  );
}

export default Home;
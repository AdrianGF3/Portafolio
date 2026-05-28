import { useTranslation } from 'react-i18next';

const frontend = [
  { name:"React", src:"/React-icon.svg.png" },
  { name:"JavaScript", src:"/JavaScript-logo.png" },
  { name:"HTML5", src:"/HTML5_logo_and_wordmark.svg.png" },
  { name:"CSS3", src:"/CSS3_logo_and_wordmark.svg.png" },
  { name:"Tailwind", src:"/Tailwind_CSS_Logo.svg.png" },
  { name:"Figma", src:"/5968705.png" },
];

const backend = [
  { name:"Laravel", src:"/Laravel.svg.png" },
  { name:"PHP", src:"/php-1-logo-png-transparent.png" },
  { name:"Java", src:"/226777.png" },
  { name:"MySQL", src:"/MySQL.png" },
];

function Skills() {

const { t } = useTranslation();

    return (
        <section id="skills" className="max-w-6xl mt-32 mb-32 mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 overflow-hidden">
            <div>
        <h2 className="text-[2rem] font-extrabold leading-[1] mt-2 text-purple-500 mb-6">
          Frontend
        </h2>
        <p className="mb-4">
          {t("skilles.p1")}
        </p>
        <div className="flex flex-wrap gap-3">
          {frontend.map((f,i)=><img key={i} src={f.src} alt={f.name} className="w-12 h-12"/> )}
        </div>
      </div>
      <div>
        <h2 className="text-[2rem] font-extrabold leading-[1] mt-2 text-purple-500 mb-6">
          Backend
        </h2>
        <p className="mb-4">
          {t("skilles.p2")}
        </p>
        <div className="flex flex-wrap gap-3">
          {backend.map((b,i)=><img key={i} src={b.src} alt={b.name} className="w-12 h-12"/> )}
        </div>
      </div>
        </section>
    );
}

export default Skills;
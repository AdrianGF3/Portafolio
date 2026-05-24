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
    return (
        <section id="skills" className="max-w-6xl mt-32 mb-32 mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 overflow-hidden">
            <div>
        <h2 className="text-[2rem] font-extrabold leading-[1] mt-2 text-purple-500 mb-6">
          Frontend
        </h2>
        <p className="mb-4">
          Soy un experto en desarrollo frontend con React, donde me dedico a crear interfaces que son dinámicas, 
          responsivas y muy fáciles de usar. Tengo experiencia en integrar React con herramientas como Tailwind CSS 
          para diseñar interfaces modernas y adaptativas. Me encargo de transformar maquetas de diseño, como las de Figma, 
          en componentes reutilizables y optimizados, asegurando que la experiencia del usuario sea fluida en diferentes 
          dispositivos. Además, tengo habilidades en el consumo de APIs y en la gestión del estado, 
          lo que me permite construir aplicaciones que son escalables y fáciles de mantener.
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
          En el backend, me especializo en el desarrollo con Laravel. A lo largo del tiempo, he ido profundizando en la estructura y funcionamiento del framework, 
          abarcando desde la creación de APIs y rutas internas, hasta la implementación de middleware personalizado para optimizar la seguridad y el rendimiento de las aplicaciones. 
          Considero que he logrado un progreso significativo en este aprendizaje, reflejado en la creación y gestión completa de dos proyectos desde cero, 
          abarcando desde el diseño y gestión de la base de datos hasta su despliegue en ambientes de producción.
        </p>
        <div className="flex flex-wrap gap-3">
          {backend.map((b,i)=><img key={i} src={b.src} alt={b.name} className="w-12 h-12"/> )}
        </div>
      </div>
        </section>
    );
}

export default Skills;
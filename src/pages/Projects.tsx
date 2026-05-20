import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    const projects = [

        {
            image: "sequentia.png",
            title: t("title.01"),
            tecno1: t("tecno1.01"),
            tecno2: t("tecno2.01"),
            tecno3: t("tecno3.01"),
            tecno4: t("tecno4.01"),
            tecno5: t("tecno5.01"),
            description: t("description.01"),
            details: t("details.01"),
            details1: t("details1.01"),
            details2: t("details2.01"),
            details3: t("details3.01"),
            details4: t("details4.01"),
            details5: t("details5.01"),
            resume: t("resume.01")
        },
        {
            image: "nexus.png",
            title: t("title.02"),
            tecno1: t("tecno1.02"),
            tecno2: t("tecno2.02"),
            tecno3: t("tecno3.02"),
            tecno4: t("tecno4.02"),
            tecno5: t("tecno5.02"),
            description: t("description.02"),
            details: t("details.02"),
            details1: t("details1.02"),
            details2: t("details2.02"),
            details3: t("details3.02"),
            details4: t("details4.02"),
            details5: t("details5.02"),
            resume: t("resume.02"),
        },
        {
            image: "/doom.jpg",
            title: t("title.03"),
            tecno1: t("tecno1.03"),
            tecno2: t("tecno2.03"),
            tecno3: t("tecno3.03"),
            tecno4: t("tecno4.03"),
            tecno5: t("tecno5.03"),
            description: t("description.03"),
            details: t("details.03"),
            details1: t("details1.03"),
            details2: t("details2.03"),
            details3: t("details3.03"),
            details4: t("details4.03"),
            resume: t("resume.03")
        },

    ];

    const [current, setCurrent] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [dragOffset, setDragOffset] = useState(0);

    const dragStartX = useRef(null);

    const prevSlide = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);

    const openModal = (project) => {
        setModalContent(project);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);


    //arrastrar para cambiar de proyecto
    const handleDragStart = (e) => {
        const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
        dragStartX.current = x;
    };

    // Mientras se arrastra muestra el movimiento
    const handleDragMove = (e) => {
        if (dragStartX.current === null) return;
        const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
        const diff = x - dragStartX.current;
        setDragOffset(diff);
    };

    // Al soltar, decide si cambiar de proyecto o no
    const handleDragEnd = (e) => {
        if (dragStartX.current === null) return;
        const x = e.type.includes("touch") ? e.changedTouches[0].clientX : e.clientX;
        const diff = x - dragStartX.current;

        if (diff > 50) prevSlide();
        else if (diff < -50) nextSlide();

        dragStartX.current = null;
        setDragOffset(0);
    };

    const getVisibleIndexes = () => {
        const prev = (current - 1 + projects.length) % projects.length;
        const next = (current + 1) % projects.length;
        return [prev, current, next];
    };
    const visibleIndexes = getVisibleIndexes();

    return (
        <section id="projects" className="bg-black mt-24 xl:px-48 lg:px-32 md:px-24 sm:px-12 py-12">
            <h2 className="text-[3rem] text-white font-extrabold mt-2 bg-clip-text mb-24 text-center">
                Trabajos destacados
            </h2>

            <div
                className="relative flex justify-center items-center h-80 select-none cursor-grab"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {projects.map((proj, i) => {
                    if (!visibleIndexes.includes(i)) return null;

                    let offset;
                    if (i === current) offset = 0;
                    else if (i === (current - 1 + projects.length) % projects.length) offset = -1;
                    else offset = 1;

                    const scale = offset === 0 ? 1 : 0.75;
                    const opacity = offset === 0 ? 1 : 0.5;

                    const translateX = offset * 250 + (offset === 0 ? dragOffset : 0);

                    return (
                        <div
                            //posiciona los proyectos uno al lado del otro y el actual en el centro, con una transición suave al cambiar
                            key={i}
                            className="absolute transition-transform duration-300 hover:scale-105"
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity: opacity,
                                zIndex: offset === 0 ? 10 : 0,
                            }}
                            onClick={() => openModal(proj)}
                        >
                            <div className="relative">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    draggable={false}
                                    className="object-cover brightness-60 rounded-lg shadow-lg xl:w-[800px] md:w-[600px] h-64 sm:h-72 md:h-80 transition-all duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold border-4 rounded-full px-3 py-1">
                                        {proj.title}
                                    </span>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            {modalOpen && modalContent && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-black p-6 rounded-lg max-w-3xl w-full relative 
               max-h-[80vh] overflow-y-auto scrollbar-custom" //barra personalizada en index.css
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            className="absolute top-2 right-4 text-white text-xl font-bold"
                            onClick={closeModal}
                        >
                            ×
                        </button>

                        {/* Título y tecnologías */}
                        <div className="mt-4 flex items-center">
                            <h2 className="text-2xl font-bold mb-2 mr-auto text-white">{modalContent.title}</h2>
                            <div className="flex space-x-2 gap-1 text-white text-sm flex-wrap">
                                {modalContent.tecno1 && <p className="bg-purple-500 px-3 rounded-full py-1">{modalContent.tecno1}</p>}
                                {modalContent.tecno2 && <p className="bg-purple-500 px-3 rounded-full py-1">{modalContent.tecno2}</p>}
                                {modalContent.tecno3 && <p className="bg-purple-500 px-3 rounded-full py-1">{modalContent.tecno3}</p>}
                                {modalContent.tecno4 && <p className="bg-purple-500 px-3 rounded-full py-1">{modalContent.tecno4}</p>}
                                {modalContent.tecno5 && <p className="bg-purple-500 px-3 rounded-full py-1">{modalContent.tecno5}</p>}
                            </div>
                        </div>

                        {/* Contenido principal */}
                        <p className="text-white mt-2">{modalContent.description}</p>

                        <img
                            src={modalContent.image}
                            alt={modalContent.title}
                            className="mt-4 rounded w-full object-cover"
                        />

                        <p className="mt-4 text-white font-bold">{modalContent.details}</p>

                        <ul className="mt-4 list-disc list-inside text-white">
                            {modalContent.details1 && <li>{modalContent.details1}</li>}
                            {modalContent.details2 && <li>{modalContent.details2}</li>}
                            {modalContent.details3 && <li>{modalContent.details3}</li>}
                            {modalContent.details4 && <li>{modalContent.details4}</li>}
                            {modalContent.details5 && <li>{modalContent.details5}</li>}
                        </ul>

                        <p className="mt-4 text-white">{modalContent.resume}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
import { useTranslation } from 'react-i18next';
import { useState } from "react";

function About() {

    const { t } = useTranslation();

    const timeline = [
        {
            title: t("about.title01"),
            period: t("about.period01"),
            desc: t("about.desc01"),
        },
        {
            title: t("about.title02"),
            period: t("about.period02"),
            desc: t("about.desc02"),
        },
        {
            title: t("about.title03"),
            period: t("about.period03"),
            desc: t("about.desc03"),
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextItem = () =>
        setCurrent((prev) => (prev + 1) % timeline.length);

    const prevItem = () =>
        setCurrent((prev) => (prev - 1 + timeline.length) % timeline.length);

    return (
        <section id="about" className="max-w-6xl mx-auto px-6">

            <h2 className="text-[3rem] font-extrabold mt-24 mb-6 text-center">{t("about.title")}</h2>

            <p className="mb-6 text-center">{t("about.description")}</p>

            <div className="mb-48 relative my-12 md:mx-24 border-l-4 border-purple-500 py-12 pl-6">

                <div>
                    <h3 className="font-semibold text-black/50 text-xl">
                        {timeline[current].title}
                    </h3>

                    <span className="text-black/50 mt-2 block">
                        {timeline[current].period}
                    </span>

                    <p className="mt-2 text-black/50">
                        {timeline[current].desc}
                    </p>
                </div>

                <button
                    onClick={prevItem}
                    className="text-xl hover:text-purple-500 absolute top-0 left-1/2"
                >
                    ▲
                </button>

                <button
                    onClick={nextItem}
                    className="text-xl hover:text-purple-500 absolute bottom-0 left-1/2"
                >
                    ▼
                </button>

            </div>
        </section>
    );
}

export default About;
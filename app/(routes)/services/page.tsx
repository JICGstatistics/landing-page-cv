import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Enfoque y <span className="font-bold text-secondary"> Experiencia.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">He trabajado en proyectos de inteligencia artificial, machine learning y MLOps orientados a generar valor con datos. Con experiencia en ML y LLMs, desarrollo soluciones predictivas que fortalecen la toma de decisiones. Además, aplico buenas prácticas de despliegue en la nube (AWS, Azure), asegurando modelos confiables y escalables en retail, banca y telecomunicaciones.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
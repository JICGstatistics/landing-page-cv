import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar"  className="mt-8 md:mt-12"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes imaginarlo con IA, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes modelarlo',
                                1000,
                                'puedes entrenarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
        
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Soy estadístico de la UNMSM (primer puesto, quinto superior) con más de 4 años de experiencia en modelos predictivos, enfocados en riesgo crediticio, segmentación, recomendación y series de tiempo.

También tengo experiencia en IA, MLOps y LLM, aplicados para crear soluciones productivas que generan valor en la toma de decisiones.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                       <a 
    href="mailto:julian.centeno.g@uni.pe" 
    className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
    Escribeme un correo
        </a>
                        <a href="https://wa.me/51961573259?text=Hola%20quisiera%20saber%20más%20sobre%20tus%20proyectos"
                             target="_blank"
                             rel="noopener noreferrer"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                             Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
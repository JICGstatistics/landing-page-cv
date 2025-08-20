import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        images: Array<{
            image: string,
            name: string
        }>
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, images } = data

    return (
        <div
            key={id}
            className="p-4 sm:p-10 md:p-5 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            
            {/* Contenedor flex para mostrar imágenes al costado */}
            <div className="flex justify-center items-center gap-4">
                {images.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.image}
                            alt="Image"
                            width={100} 
                            height={150} 
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                        />
                        <h6 className="text-sm sm:text-base text-center">{item.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioBox
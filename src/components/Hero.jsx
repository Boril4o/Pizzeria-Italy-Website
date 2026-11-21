import HeroImage from "../assets/hero.jpg";
import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${HeroImage})`,
            }}
            className="h-[85vh] w-auto bg-cover bg-center bg-no-repeat text-white font-heading flex flex-col justify-center items-center gap-2"
        >
            <h1 className="font-semibold text-8xl text-shadow-lg">ПИЦАРИЯ ИТАЛИ</h1>
            <h3 className="font-medium text-2xl">Поръчки и резервации на 0895939396</h3>
            <Link
                to="/"
                className="inline-block bg-red hover:bg-light-red rounded-sm px-4 py-2 text-xl font-medium mt-2"
            >
                Виж менюто
            </Link>
        </section>
    )
}
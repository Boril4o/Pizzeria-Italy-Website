import {Link} from "react-router-dom";
import logo from "../assets/pizzeria_logo.png";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-(--black) p-4 px-16 sticky top-0 z-50">
            <Link to="/">
                <img src={logo} alt="LOGO" className="h-16 w-auto object-contain" />
            </Link>
            <section className="flex gap-8">
                <Link className="nav-link" to="/">Начало</Link>
                <Link className="nav-link" to="/">Меню</Link>
                <Link className="nav-link" to="/">Галерия</Link>
                <Link className="nav-link" to="/">Мнение</Link>
                <Link className="nav-link" to="/">Контакти</Link>
            </section>
        </nav>
    )
}
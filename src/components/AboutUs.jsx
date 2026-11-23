import BGImage from "../assets/pizzeria_bg.jpg";
import AboutUsImage from "../assets/about_us.jpg";

export default function AboutUs() {
    return (
        <section
            style={{
                backgroundImage: `url(${BGImage})`,
            }}
            className="h-[90vh] w-auto bg-cover bg-center bg-no-repeat flex items-center justify-center px-16"
        >
            <div className="flex items-start gap-20">
                <section className="flex flex-col gap-8">
                    <h1 className="text-7xl font-heading font-semibold text-white">За нас</h1>
                    <p className="text-xl text-light-yellow max-w-3xl">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
                <section>
                    <img className="w-xl h-auto object-cover highlight-border" src={AboutUsImage} alt="about us image" />
                </section>
            </div>
        </section>
    )
}
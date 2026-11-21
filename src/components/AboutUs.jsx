import BGImage from "../assets/pizzeria_bg.jpg";

export default function AboutUs() {
    return (
        <section
            style={{
                backgroundImage: `url(${BGImage})`,
            }}
            className="h-screen w-auto bg-cover bg-center bg-no-repeat"
        >

        </section>
    )
}
import BGImage from "../assets/pizzeria_bg.jpg";

export default function Location() {
    return (
        <section
            style={{
                backgroundImage: `url(${BGImage})`,
            }}
            className="h-[90vh] w-auto bg-cover bg-center bg-no-repeat flex items-center justify-center px-16"
        >

        </section>
    )
}
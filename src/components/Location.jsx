import BGImage from "../assets/pizzeria_bg.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {AdvancedMarker, Map as GoogleMap} from "@vis.gl/react-google-maps";
import {useState} from "react";

const PLACE = {
    name: 'Pizzeria ITALI',
    address: 'бул. „Димитър Благоев“ 29, гр. Димитровград',
    position: { lat: 42.05537888529172, lng: 25.602963855411897 },
    url: 'https://www.google.com/maps/place/Pizzeria+ITALI/@42.0558631,25.6029837,18.7z/data=!4m6!3m5!1s0x40a801f0be55a0a1:0xca879575dd7402a7!8m2!3d42.0553328!4d25.6029863!16s%2Fg%2F11f37vmfvw?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D',
};

export default function Location() {

    return (
        <section
            style={{
                backgroundImage: `url(${BGImage})`,
            }}
            className="h-[90vh] w-auto bg-cover bg-center bg-no-repeat flex items-center justify-center px-16"
        >
            <div className="flex gap-10 w-full max-w-7xl">
                <section className="flex flex-1 flex-col gap-5 text-style">
                    <h1 className="font-heading text-white font-semibold text-5xl">Къде да ни намерите</h1>
                    <div className="flex items-center gap-5">
                        <span className="text-4xl">📍</span>
                        <h1 className="font-heading text-white font-semibold text-4xl">
                            бул. „Димитър Благоев“ 29, гр. Димитровград
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h4 className="font-heading text-green font-semibold text-3xl">Работно време</h4>
                        <p className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} />
                            Вторник - Неделя: 11:00 - 22:00
                        </p>
                        <p className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} />
                            Понеделник: Почивен ден
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col justify-center gap-1">
                            <p>Телефон за поръчки и резервации</p>
                            <h1 className="font-heading text-green font-semibold text-4xl">0895 939 396</h1>
                        </div>
                    </div>
                </section>
                <div className="h-96 w-full highlight-border overflow-hidden shrink-0 lg:w-130">
                    <GoogleMap
                        defaultCenter={PLACE.position}
                        defaultZoom={18}
                        disableDefaultUI={true}
                        gestureHandling="none"        // no drag, no scroll zoom, no pinch zoom
                        keyboardShortcuts={false}     // no arrow keys / +/- shortcuts
                        disableDoubleClickZoom={true} // no double-click zoom
                        clickableIcons={false}
                        mapId="DEMO_MAP_ID"
                        onClick={() => window.open(PLACE.url, '_blank', 'noopener,noreferrer')}>
                        <AdvancedMarker position={PLACE.position} title={PLACE.name}/>
                    </GoogleMap>

                </div>

            </div>
        </section>
    )
}
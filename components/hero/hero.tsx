import { Button } from "@/utils/button";
import { Arrow } from "./arrow";
import { Masthead } from "./masthead";
import { Video } from "./video";

export const Hero: React.FC = () => (
    <section className="min-h-screen flex flex-col items-center justify-center">
        {/* Video background */}
        <Video />

        <div className="flex flex-col gap-9 text-white font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] w-[50vw]">
            {/* Masthead */}
            <Masthead />

            {/* CTA Buttons */}
            <div className="flex gap-x-8 mt-5 text-xl tracking-wide">
                <Button link="#" text="Get a Quote" />
                <Button
                    link="#"
                    text="About me"
                    classNames="hover:border-amber-600 hover:bg-amber-600 border px-12"
                />
            </div>
        </div>

        {/* Scroll down arrow */}
        <Arrow />
    </section>
);

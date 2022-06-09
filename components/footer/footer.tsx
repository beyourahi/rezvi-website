import { Copyright } from "./copyright";
import { Socials } from "./socials";
import { Quicklinks } from "./quicklinks";
import { Info } from "./info";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-900 text-white min-h-[60vh]">
            <div className="container mx-auto px-60 pt-28 h-[60vh] divide-y divide-white/20">
                <div className="flex justify-between h-[80%]">
                    <div className="flex flex-col gap-y-16">
                        <Info />
                    </div>

                    <div className="flex flex-col gap-y-9">
                        <Quicklinks />
                    </div>

                    <div className="flex flex-col gap-y-9">
                        <Socials />
                    </div>
                </div>

                <Copyright />
            </div>
        </footer>
    );
};

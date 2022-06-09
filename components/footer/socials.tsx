import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialData = [
    {
        icon: <FaFacebook />,
        url: "https://www.facebook.com/raihana.rezvi",
        alt: "Facebook",
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/raihana.rezvi",
        alt: "Instagram",
    },
    {
        icon: <FaTwitter />,
        url: "https://twitter.com/raihana_rezvi",
        alt: "Twitter",
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/raihana-rezvi-b9a8b917b/",
        alt: "Linkedin",
    },
];

export const Socials: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold">
            <span className="decoration-4 decoration-amber-600 underline underline-offset-8">
                Follow
            </span>{" "}
            Me
        </h3>

        <ul className="flex gap-x-6 text-4xl">
            {socialData.map((social, index) => (
                <li
                    key={index}
                    className="hover:text-amber-600 hover:scale-90 transition-all duration-150 ease-linear"
                >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                    </a>
                </li>
            ))}
        </ul>
    </>
);

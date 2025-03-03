import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";


const socialLinks = [
  { href: "https://x.com/playsync_ai", icon: <FaXTwitter /> },
  { href: "https://github.com/PlaySyncAI/Enhancing-NPC-Behavior-Utilizing-AI", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©PlaySync AI. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://t.me/MufasaKingdom"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Developed by MUFASA
        </a>
      </div>
    </footer>
  );
};

export default Footer;

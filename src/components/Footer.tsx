import { Instagram, Facebook, Youtube, LinkedinIcon } from 'lucide-react';
import SVGLogo from './SVGLogo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-startgap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">

  {/* Logo and Description */}
  <div className="flex flex-col p-5 items-center lg:items-start text-center lg:text-left">
    <SVGLogo size="md" className="mb-4 sm:mb-6" />
    <p className="text-sm sm:text-base text-gray-400 max-w-xs">
      Strategic campaigns that transform brands into social powerhouses. We turn engagement into revenue.
    </p>
  </div>

  {/* Contact */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
    <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
      Get In Touch
    </h3>

    <div className="space-y-2 sm:space-y-3">
      <a
        href={`https://wa.me/918460732085?text=${encodeURIComponent(
          'Hello, I would like to understand more about Social Media Services provided by Say It Social.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-gold transition-colors break-words"
      >
        <span>WhatsApp: +91 84607 32085</span>
      </a>

      <div className="flex gap-4 mt-6 justify-center lg:justify-start">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,176,64,0.5)]"
        >
          <Instagram className="w-5 h-5 text-gray-400 hover:text-gold transition-colors" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,176,64,0.5)]"
        >
          <Facebook className="w-5 h-5 text-gray-400 hover:text-gold transition-colors" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,176,64,0.5)]"
        >
          <Youtube className="w-5 h-5 text-gray-400 hover:text-gold transition-colors" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,176,64,0.5)]"
        >
          <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-gold transition-colors" />
        </a>

      </div>
    </div>
  </div>

</div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Say It Social. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


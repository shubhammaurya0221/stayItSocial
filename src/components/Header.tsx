import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SVGLogo from './SVGLogo';

interface HeaderProps {
  currentPage?: 'smm' | 'websites';
  onPageChange?: (page: 'smm' | 'websites') => void;
}

export default function Header({ currentPage = 'smm', onPageChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMobileMenuOpen(false);
        }}>
          <SVGLogo size="sm" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Page Switcher */}
          <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-lg border border-white/10">
            <button
              onClick={() => {
                onPageChange?.('smm');
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors duration-300 ${
                currentPage === 'smm'
                  ? 'text-teal bg-white/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => {
                onPageChange?.('websites');
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors duration-300 ${
                currentPage === 'websites'
                  ? 'text-teal bg-white/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Web Design
            </button>
          </div>

          {currentPage === 'smm' && (
            <>
              <a
                href="#all-clients"
                className="text-gray-300 hover:text-gold transition-colors text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('all-clients');
                }}
              >
                Our Work
              </a>
              <a
                href="#case-studies"
                className="text-gray-300 hover:text-gold transition-colors text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('case-studies');
                }}
              >
                Case Studies
              </a>
            </>
          )}
          {currentPage === 'websites' && (
            <>
              <a
                href="#website-portfolio"
                className="text-gray-300 hover:text-gold transition-colors text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('website-portfolio');
                }}
              >
                Portfolio
              </a>
              <a
                href="#website-case-studies"
                className="text-gray-300 hover:text-gold transition-colors text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('website-case-studies');
                }}
              >
                Case Studies
              </a>
            </>
          )}
          <a
            href={`https://wa.me/918460732085?text=${encodeURIComponent(currentPage === 'smm' ? 'Hello, I would like to understand more about Social Media Services provided by Say It Social.' : 'Hello, I would like to understand more about Website Design & Development services provided by Say It Social.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 lg:px-6 py-2 bg-gradient-to-r from-teal to-gold text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(4,170,165,0.6)] hover:shadow-teal/60 text-sm lg:text-base"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {/* Page Switcher */}
            <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-lg border border-white/10 mb-2">
              <button
                onClick={() => {
                  onPageChange?.('smm');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors duration-300 ${
                  currentPage === 'smm'
                    ? 'text-teal bg-white/10'
                    : 'text-gray-400'
                }`}
              >
                Social Media
              </button>
              <button
                onClick={() => {
                  onPageChange?.('websites');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors duration-300 ${
                  currentPage === 'websites'
                    ? 'text-teal bg-white/10'
                    : 'text-gray-400'
                }`}
              >
                Web Design
              </button>
            </div>

            {currentPage === 'smm' && (
              <>
                <a
                  href="#all-clients"
                  className="text-gray-300 hover:text-gold transition-colors py-2 text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('all-clients');
                  }}
                >
                  Our Work
                </a>
                <a
                  href="#case-studies"
                  className="text-gray-300 hover:text-gold transition-colors py-2 text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('case-studies');
                  }}
                >
                  Case Studies
                </a>
              </>
            )}
            {currentPage === 'websites' && (
              <>
                <a
                  href="#website-portfolio"
                  className="text-gray-300 hover:text-gold transition-colors py-2 text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('website-portfolio');
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="#website-case-studies"
                  className="text-gray-300 hover:text-gold transition-colors py-2 text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('website-case-studies');
                  }}
                >
                  Case Studies
                </a>
              </>
            )}
            <a
              href={`https://wa.me/918460732085?text=${encodeURIComponent(currentPage === 'smm' ? 'Hello, I would like to understand more about Social Media Services provided by Say It Social.' : 'Hello, I would like to understand more about Website Design & Development services provided by Say It Social.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-teal to-gold text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(4,170,165,0.6)] hover:shadow-teal/60 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


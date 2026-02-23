interface WebsiteHeroProps {
  scrollY: number;
}

export default function WebsiteHero({ scrollY }: WebsiteHeroProps) {
  const parallaxOffset = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal/20 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8 inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-teal font-bold tracking-widest text-[10px] sm:text-xs uppercase">Custom Web Design & Development</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2">
          Digital Experiences That
          <br />
          <span className="bg-gradient-to-r from-gold via-gold to-teal bg-clip-text text-transparent">
            Convert & Captivate
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Stunning, high-performance websites that combine beautiful design with seamless functionality. Built to drive business results.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 px-4">
          <button 
            onClick={() => {
              const portfolioSection = document.getElementById('website-portfolio');
              portfolioSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold to-teal text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            View Our Sites
          </button>
          <a 
            href={`https://wa.me/918460732085?text=${encodeURIComponent('Hello, I would like to understand more about Website Design & Development services provided by Say It Social.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-teal hover:bg-white/5 transition-all duration-300 text-center text-sm sm:text-base"
          >
            Start a Project
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 px-4">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">9+</div>
            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Sites Built</div>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Avg. PageSpeed</div>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">300%</div>
            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Avg. Traffic Lift</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teal rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}


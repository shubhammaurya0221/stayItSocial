import { ArrowRight } from 'lucide-react';

export default function WebsiteCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Digital Masterpiece?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10">
            Join 9+ businesses with websites that convert, perform, and stand out from the competition.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <a
            href={`https://wa.me/918460732085?text=${encodeURIComponent('Hello, I would like to understand more about Website Design & Development services provided by Say It Social.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold to-teal text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Start Your Site
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-teal hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
            View Pricing
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 text-center border-t border-white/10 pt-8 sm:pt-12">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">9+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">Sites Built</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal">98%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">Avg. PageSpeed</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">300%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">Avg. Traffic Lift</div>
          </div>
        </div>
      </div>
    </section>
  );
}


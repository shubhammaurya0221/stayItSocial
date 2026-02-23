import { Play, Sparkles } from 'lucide-react';

export default function Showreel() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-teal/5 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-gold/20 to-teal/30 animate-gradient" />

          <div className="relative aspect-video bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-gradient-to-br from-teal/20 to-gold/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-gold animate-pulse" />
                <span className="text-gold font-bold tracking-widest text-xs sm:text-sm uppercase">Social Showreel 2024</span>
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-teal animate-pulse" />
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-2">
                Creativity. <span className="text-teal">Consistency.</span> <span className="text-gold">Growth.</span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Watch how we've transformed social feeds into revenue-generating engines
              </p>

              <button className="group/btn relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(4,170,165,0.8)] hover:shadow-teal/80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-teal opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black fill-black relative z-10 ml-0.5 sm:ml-1" />
              </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-xs sm:text-sm text-gray-300">15+ Campaigns</span>
              </div>
              <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-xs sm:text-sm text-gray-300">2M+ Reach</span>
              </div>
              <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-xs sm:text-sm text-gray-300">3 Min Watch</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}

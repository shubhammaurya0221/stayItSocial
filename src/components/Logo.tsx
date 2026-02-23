import { Heart, Play } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { container: 120, fontSize: 12, icon: 10, heart: 8 },
    md: { container: 180, fontSize: 16, icon: 14, heart: 12 },
    lg: { container: 240, fontSize: 20, icon: 18, heart: 14 }
  };

  const currentSize = sizes[size];
  const tealColor = '#04AAA5';

  return (
    <div className={`relative ${className}`} style={{ width: currentSize.container, height: currentSize.container }}>
      <svg
        width={currentSize.container}
        height={currentSize.container}
        viewBox="0 0 240 240"
        className="w-full h-full"
      >
        {/* Outer teal circle */}
        <circle
          cx="120"
          cy="120"
          r="115"
          fill="none"
          stroke={tealColor}
          strokeWidth="4"
        />
        {/* Inner white circle */}
        <circle
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Text and Icons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* SAY IT */}
        <div className="relative mb-3">
          <span 
            className="text-white font-bold uppercase tracking-wider"
            style={{ 
              fontSize: `${currentSize.fontSize * 1.2}px`,
              letterSpacing: '0.1em'
            }}
          >
            SAY IT
          </span>
          {/* Heart icon above Y */}
          <Heart
            className="absolute text-gold fill-gold"
            size={currentSize.heart}
            style={{ 
              top: `-${currentSize.heart + 2}px`,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </div>

        {/* SOCIAL */}
        <div className="relative flex items-center justify-center">
          {/* Hashtag to the left */}
          <span 
            className="text-teal font-bold"
            style={{ 
              fontSize: `${currentSize.fontSize * 1.4}px`,
              marginRight: '2px'
            }}
          >
            #
          </span>
          
          {/* SO */}
          <span 
            className="text-white font-bold uppercase"
            style={{ fontSize: `${currentSize.fontSize * 1.2}px` }}
          >
            SO
          </span>
          
          {/* Play button in O - positioned over the O */}
          <div className="relative inline-flex items-center justify-center" style={{ width: `${currentSize.fontSize * 1.2}px` }}>
            <span 
              className="text-white font-bold uppercase"
              style={{ fontSize: `${currentSize.fontSize * 1.2}px` }}
            >
              O
            </span>
            <Play
              className="absolute text-gold fill-gold"
              size={currentSize.icon}
              style={{ 
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          
          {/* CIAL in script/teal with decorative flourish */}
          <span
            className="text-teal italic relative"
            style={{
              fontSize: `${currentSize.fontSize * 1.5}px`,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              marginLeft: '-2px'
            }}
          >
            CIAL
            {/* Decorative flourish extending from L */}
            <span 
              className="absolute"
              style={{
                right: '-8px',
                bottom: '-2px',
                width: '12px',
                height: '2px',
                background: tealColor,
                transform: 'rotate(-45deg)'
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}


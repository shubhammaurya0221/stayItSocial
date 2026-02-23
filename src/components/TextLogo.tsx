import { Heart, Play } from 'lucide-react';

interface TextLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function TextLogo({ size = 'md', className = '' }: TextLogoProps) {
  const sizes = {
    sm: { fontSize: 14, icon: 10, heart: 8 },
    md: { fontSize: 18, icon: 14, heart: 12 },
    lg: { fontSize: 24, icon: 18, heart: 14 }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* SAY IT */}
      <div className="relative flex items-center">
        <span 
          className="text-white font-bold uppercase tracking-wider"
          style={{ 
            fontSize: `${currentSize.fontSize}px`,
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

      {/* Vertical separator */}
      <div className="w-px h-6 bg-white/20 mx-3" />

      {/* SOCIAL */}
      <div className="relative flex items-center">
        {/* Hashtag to the left */}
        <span 
          className="text-teal font-bold"
          style={{ 
            fontSize: `${currentSize.fontSize * 1.2}px`,
            marginRight: '2px'
          }}
        >
          #
        </span>
        
        {/* SO */}
        <span 
          className="text-white font-bold uppercase"
          style={{ fontSize: `${currentSize.fontSize}px` }}
        >
          SO
        </span>
        
        {/* Play button in O */}
        <div className="relative inline-flex items-center justify-center" style={{ width: `${currentSize.fontSize}px` }}>
          <span 
            className="text-white font-bold uppercase"
            style={{ fontSize: `${currentSize.fontSize}px` }}
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
        
        {/* CIAL in script/teal */}
        <span
          className="text-teal italic relative"
          style={{
            fontSize: `${currentSize.fontSize * 1.3}px`,
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            marginLeft: '-2px'
          }}
        >
          CIAL
        </span>
      </div>
    </div>
  );
}


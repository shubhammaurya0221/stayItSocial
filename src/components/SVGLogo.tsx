import logoSVG from '../Logo_test.svg?url';

interface SVGLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SVGLogo({ size = 'md', className = '' }: SVGLogoProps) {
  const sizes = {
    sm: { width: 140, height: 35 },
    md: { width: 180, height: 45 },
    lg: { width: 240, height: 60 }
  };

  const currentSize = sizes[size];

  return (
    <img 
      src={logoSVG}
      alt="Say It Social"
      width={currentSize.width}
      height={currentSize.height}
      className={className}
    />
  );
}


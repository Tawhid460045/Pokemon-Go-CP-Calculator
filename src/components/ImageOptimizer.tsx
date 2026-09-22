
import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * A component that optimizes image loading with proper sizing attributes and lazy loading
 */
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <img 
      src={src} 
      alt={alt}
      width={width}
      height={height}
      loading="lazy" 
      decoding="async"
      className={className}
    />
  );
};

export default React.memo(ImageOptimizer);

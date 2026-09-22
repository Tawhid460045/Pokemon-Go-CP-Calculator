import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AffiliateAdProps {
  variant?: 'sidebar' | 'inline';
  className?: string;
}

const AffiliateAd: React.FC<AffiliateAdProps> = ({ variant = 'inline', className = '' }) => {
  const affiliateLink = "https://amzn.to/3ZA1G7q";

  return (
    <div 
      className={`
        bg-white dark:bg-card border border-border rounded-xl p-4 shadow-sm
        ${variant === 'sidebar' ? 'max-w-[280px]' : 'max-w-md mx-auto'}
        ${className}
      `}
    >
      {/* Sponsored Label */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide bg-secondary px-2 py-0.5 rounded">
          Recommended
        </span>
      </div>

      {/* Product Content */}
      <a
        href={affiliateLink}
        rel="nofollow sponsored noopener"
        target="_blank"
        className="block group"
      >
        {/* Product Image */}
        <div className="relative mb-3 overflow-hidden rounded-lg bg-secondary/30">
          <img
            src="/images/pokemon-go-accessory.jpg"
            alt="Pokémon GO Accessory"
            className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width="280"
            height="128"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
            Pokémon GO Plus+ Gaming Accessory
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">
            Enhance your Pokémon GO experience with this official accessory. Catch Pokémon and spin PokéStops without looking at your phone!
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium py-2 px-4 rounded-lg group-hover:bg-primary/90 transition-colors">
          <span>Check price on Amazon</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </a>

      {/* Disclosure */}
      <p className="mt-3 text-[9px] text-muted-foreground text-center leading-tight">
        As an Amazon Associate, I earn from qualifying purchases.
      </p>
    </div>
  );
};

export default AffiliateAd;

'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  excerpt: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'primary';
  children?: React.ReactNode;
}

export function ShareButton({
  title,
  excerpt,
  className = '',
  size = 'sm',
  variant = 'outline',
  children,
}: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);

    const shareData = {
      title,
      text: excerpt,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Final fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Button variant={variant} size={size} className={className} onClick={handleShare} disabled={isSharing}>
      <Share2 className='w-4 h-4 mr-2' />
      {children || (isSharing ? 'Sharing...' : 'Share')}
    </Button>
  );
}

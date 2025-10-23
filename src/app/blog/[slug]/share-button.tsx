'use client';

import { Check, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleShare = async () => {
    setIsSharing(true);

    const shareData = {
      title,
      text: excerpt,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Final fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Button variant={variant} size={size} className={className} onClick={handleShare} disabled={isSharing}>
      {copied ? (
        <>
          <Check className='w-4 h-4 mr-2' />
          Copied!
        </>
      ) : (
        <>
          <Share2 className='w-4 h-4 mr-2' />
          {children || (isSharing ? 'Sharing...' : 'Share')}
        </>
      )}
    </Button>
  );
}

import React from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function HeroSection() {
  return (
    <section id="hero">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://video.wixstatic.com/video/cef78c_892b71b778024695832d2cb19a52e6c8/1080p/mp4/file.mp4"
        bgImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop"
      >
        {/* Content that appears after video expands */}
      </ScrollExpandMedia>
    </section>
  );
}

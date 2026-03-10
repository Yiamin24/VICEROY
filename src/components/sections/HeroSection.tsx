import React from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function HeroSection() {
  return (
    <section id="hero">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://video.wixstatic.com/video/cef78c_892b71b778024695832d2cb19a52e6c8/1080p/mp4/file.mp4"
        bgImageSrc="https://static.wixstatic.com/media/cef78c_3872c095e81b408fb19446a87c77f6a6~mv2.jpg"
        title="Welcome to"
        subtitle="The Viceroy Estate"
      >
        {/* Content that appears after video expands */}
      </ScrollExpandMedia>
    </section>
  );
}

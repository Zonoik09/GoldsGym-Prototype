/**
 * Hero1.tsx - Alternative Hero Component with Dual Video Sections
 * 
 * This component displays two full-screen hero sections, each with:
 * - Left side: Logo, title, subtitle with gold accent, and description
 * - Right side: Autoplay video preview with play button overlay
 * 
 * Features:
 * - Click on video to open fullscreen modal player
 * - Gold divider line between sections
 * - Fully responsive layout
 * - Smooth animations and transitions
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import videoSource from "@/assets/Legacy Video with Locations.mp4";

const Hero1 = () => {
  // State Management
  // Controls whether the fullscreen video player modal is visible
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  
  // Tracks which video section was clicked ('history' or 'our-history')
  const [currentVideo, setCurrentVideo] = useState<'history' | 'our-history'>('history');

  /**
   * Opens the fullscreen video player modal
   * @param type - Which section's video to play
   */
  const openVideo = (type: 'history' | 'our-history') => {
    setCurrentVideo(type);
    setShowVideoPlayer(true);
  };

  return (
    <>
      {/* Main Container - pt-20 adds top padding to account for fixed header */}
      <div className="pt-20">
        
        {/* ============================================
            FIRST SECTION - "History of Gold's Gym"
            ============================================ */}
        <section className="relative min-h-screen w-full overflow-hidden bg-primary">
          {/* Background Video - positioned absolutely to cover entire section */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          
          {/* Container with responsive padding - adjust px-4 and py-8 to change spacing */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            {/* Grid Layout: 2 columns on large screens, 1 column on mobile */}
            {/* gap-12 controls spacing between left and right sides - increase for more space */}
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
              
              {/* LEFT SIDE - Text Content and Logo
                  To center logo: add "flex flex-col items-center" to parent div
                  To remove logo: delete or comment out the <img> tag below */}
              <div className="space-y-6 animate-fade-in">
                
                {/* Main Heading - Change text size with text-5xl/text-6xl */}
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  History of Gold's Gym
                </h2>
                
                {/* Subtitle with Gold Accent Line
                    Gold line: h-px (height), w-16 (width), bg-gold (color) */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    60 years of excellence
                  </p>
                </div>
                
                {/* Description Text - adjust text-lg for size, leading-relaxed for line height */}
                <p className="text-ivory text-lg leading-relaxed">
                  Discover the legendary story of Gold's Gym and how it became the most iconic fitness brand in the world.
                </p>
              </div>

              {/* RIGHT SIDE - Video Preview with Play Button Overlay
                  Video size: increased with scale-110 and larger container
                  To make even bigger: change scale-110 to scale-125 */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform scale-110">
                {/* Autoplay Background Video - muted, loops continuously */}
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                
                {/* Play Button Overlay - darkens on hover, clickable */}
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('history')}
                >
                  {/* Gold Play Button Circle - scales up on hover */}
                  <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            GOLD DIVIDER LINE BETWEEN SECTIONS
            ============================================
            Customization options:
            - Color: bg-[#FFD700] (current gold)
            - Height: h-px (1px) or h-0.5, h-1, h-2 for thicker
            - Width: w-full (100%) or w-3/4, w-1/2 for narrower with mx-auto to center
            - Spacing: my-0 (no vertical margin), increase to my-4, my-8 for more space
        */}
        <div className="w-full bg-primary">
          <div className="container mx-auto">
            <div className="h-px bg-[#FFD700] w-full my-0" />
          </div>
        </div>

        {/* ============================================
            SECOND SECTION - "Our History"
            ============================================
            Same structure as first section, different content */}
        <section className="relative min-h-screen w-full overflow-hidden bg-primary">
          {/* Background Video - positioned absolutely to cover entire section */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          
          {/* Reduced py-16 to py-8 to bring sections closer together */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
              
              {/* LEFT SIDE - Text Content */}
              <div className="space-y-6 animate-fade-in">
                
                {/* Main Heading */}
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  Our History
                </h2>
                
                {/* Subtitle with Gold Accent */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    Calgary's fitness legacy
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-ivory text-lg leading-relaxed">
                  Experience the journey of Gold's Gym Calgary and how we've been transforming lives for six decades.
                </p>
              </div>

              {/* RIGHT SIDE - Video Preview (larger with scale-110) */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform scale-110">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                
                {/* Play Button Overlay */}
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('our-history')}
                >
                  <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================
          FULLSCREEN VIDEO PLAYER MODAL
          ============================================
          Appears when user clicks on video preview
          Features:
          - Full screen overlay with semi-transparent black background
          - Close button (X) in top right
          - Video player with full controls (play, pause, volume, fullscreen)
          - Dynamic title based on which section was clicked
      */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          {/* Close Button - Top Right Corner
              Change position with top-4, right-4 values
              Change colors with text-white and hover:text-gold */}
          <button
            onClick={() => setShowVideoPlayer(false)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-smooth"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          
          {/* Video Container - max-w-6xl controls maximum width */}
          <div className="w-full max-w-6xl">
            {/* Dynamic Title - changes based on which section was clicked */}
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-white">
                {currentVideo === 'history' ? 'History of Gold\'s Gym' : 'Our History'}
              </h3>
            </div>
            
            {/* Video Player with Controls - autoPlay starts immediately */}
            <video controls autoPlay className="w-full h-auto">
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero1;

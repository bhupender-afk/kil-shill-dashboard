import React from 'react'


export function LeftBox() {
  const items = [
    { text: "Kol", angle: 0 },
    { text: "crypto", angle: 60 },
    { text: "stock", angle: 120 },
    { text: "fox", angle: 180 },
    { text: "Top Signals", angle: 240 },
    { text: "risk analysis", angle: 300 }
  ];

  return (
    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center mx-auto">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00fc8b]/10 via-transparent to-[#00dea0]/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"></div>

      {/* Outer dashed circle with animation */}
      <div className="absolute inset-0 rounded-full border border-dashed sm:border-2 border-[#00fc8b]/30 animate-[spin_30s_linear_infinite]"
           style={{ strokeDasharray: '10 20' }}></div>

      {/* Middle dashed circle with reverse animation */}
      <div className="absolute inset-[15px] sm:inset-[20px] md:inset-[25px] rounded-full border border-dashed sm:border-2 border-[#06ed94]/40 animate-[spin_20s_linear_infinite_reverse]"></div>

      {/* Inner dashed circle - responsive positioning */}
      <div className="absolute inset-[30px] sm:inset-[40px] md:inset-[50px] lg:inset-[60px] rounded-full border border-dashed sm:border-2 border-[#00dea0]/50 animate-pulse"></div>

      {/* Center gradient circle with text and glow */}
      <div className="relative z-10 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full bg-gradient-to-br from-[#00fc8b] via-[#06ed94] to-[#00dea0] flex items-center justify-center shadow-[0_0_40px_rgba(0,252,139,0.3)] sm:shadow-[0_0_60px_rgba(0,252,139,0.4)] lg:shadow-[0_0_80px_rgba(0,252,139,0.5)] animate-pulse">
        {/* Inner glow ring */}
        <div className="absolute inset-1 sm:inset-2 rounded-full bg-black/20 backdrop-blur-sm"></div>

        {/* Text content */}
        <div className="relative z-10 text-center px-2">
          <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide sm:tracking-wider uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            khill shill
          </div>
        </div>
      </div>
      
      {/* Text labels positioned around circles with modern styling */}
      {/* {items.map((item, index) => {
        // Responsive radius based on screen size
        const baseRadius = 175; // Base radius for mobile
        const smRadius = 200;   // Small screens
        const mdRadius = 225;   // Medium screens
        const lgRadius = 250;   // Large screens

        const angleRad = (item.angle * Math.PI) / 180;

        // Use CSS custom properties for responsive positioning
        const x = Math.round(Math.cos(angleRad) * baseRadius);
        const y = Math.round(Math.sin(angleRad) * baseRadius);

        return (
          <div
            key={index}
            className="absolute text-transparent bg-gradient-to-r from-[#00fc8b] via-[#06ed94] to-[#00dea0] bg-clip-text whitespace-nowrap px-2 py-1 sm:px-3 sm:py-2 lg:px-4 rounded-full backdrop-blur-sm border border-[#00fc8b]/20 hover:border-[#00fc8b]/50 transition-all duration-300 hover:scale-110 cursor-pointer text-xs sm:text-sm lg:text-base font-medium"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              textShadow: '0 0 20px rgba(0,252,139,0.5)',
              willChange: 'transform'
            }}
          >
            {item.text}
          </div>
        );
      })} */}
      
      {/* Decorative dots at intersection points - responsive radius */}
      {items.map((item, index) => {
        // Use smaller radius values for responsive design
        const radiusMobile = 70;
        const radiusTablet = 110;
        const radiusDesktop = 140;

        const angleRad = (item.angle * Math.PI) / 180;

        // Calculate positions for different screen sizes
        const xMobile = Math.round(Math.cos(angleRad) * radiusMobile);
        const yMobile = Math.round(Math.sin(angleRad) * radiusMobile);

        const xTablet = Math.round(Math.cos(angleRad) * radiusTablet);
        const yTablet = Math.round(Math.sin(angleRad) * radiusTablet);

        const xDesktop = Math.round(Math.cos(angleRad) * radiusDesktop);
        const yDesktop = Math.round(Math.sin(angleRad) * radiusDesktop);

        return (
          <div
            key={`dot-${index}`}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00fc8b] shadow-[0_0_6px_rgba(0,252,139,0.6)] sm:shadow-[0_0_10px_rgba(0,252,139,0.8)] animate-pulse
                       translate-x-[--x-mobile] translate-y-[--y-mobile]
                       sm:translate-x-[--x-tablet] sm:translate-y-[--y-tablet]
                       lg:translate-x-[--x-desktop] lg:translate-y-[--y-desktop]"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${xMobile}px), calc(-50% + ${yMobile}px))`,
              '--x-mobile': `${xMobile}px`,
              '--y-mobile': `${yMobile}px`,
              '--x-tablet': `${xTablet}px`,
              '--y-tablet': `${yTablet}px`,
              '--x-desktop': `${xDesktop}px`,
              '--y-desktop': `${yDesktop}px`,
              willChange: 'transform'
            } as React.CSSProperties}
          ></div>
        );
      })}
    </div>
  );
}

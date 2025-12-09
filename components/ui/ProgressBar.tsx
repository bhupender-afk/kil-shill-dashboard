import { useState, useEffect } from 'react';

interface ProgressBarProps {
  value?: number;
  showPercentage?: boolean;
  height?: string;
  animated?: boolean;
}

export function ProgressBar({ 
  value = 76, 
  showPercentage = true,
  height = "h-[0.4rem]",
  animated = true 
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animated]);

  return (
    <div className="flex items-center gap-2">
      {/* Progress bar container */}
      <div className="relative w-15 bg-gray-800 rounded-full overflow-hidden">
        {/* Progress fill with gradient */}
        <div
          className={`${height} bg-gradient-to-r from-[#D4A843] via-[#8BC34A] to-[#4CAF50] rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
      
      {/* Percentage text */}
      {showPercentage && (
        <span className="text-white text-sm font-semibold">{progress}%</span>
      )}
    </div>
  );
}

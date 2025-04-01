import { Sparkles } from "lucide-react";

const GradientIcon = () => {
  return (
    <svg width="24" height="24" className="cursor-pointer">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
          <stop offset="100%" stopColor="#f43f5e" /> {/* Rose */}
        </linearGradient>
      </defs>
      <Sparkles
        size={20}
        stroke="url(#gradient)" // This applies the gradient stroke
        fill="url(#gradient)" // Optional if you want a filled icon
      />
    </svg>
  );
};

export default GradientIcon;

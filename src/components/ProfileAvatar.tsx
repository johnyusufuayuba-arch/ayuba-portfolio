interface ProfileAvatarProps {
  className?: string;
}

/**
 * Small circular avatar. Shows /portrait.png when present; until then falls
 * back to an "AY" monogram on a soft space-gradient. Drop a square image at
 * public/portrait.png to set the photo.
 */
export default function ProfileAvatar({ className = '' }: ProfileAvatarProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border-2 border-[#D7E2EA]/30 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 ${className}`}
      style={{ boxShadow: '0 0 30px rgba(118,33,176,0.25)' }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center text-[#D7E2EA] font-bold tracking-widest text-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(118,33,176,0.40), rgba(20,60,150,0.40))' }}
      >
        AY
      </span>
      <img
        src="/portrait.png"
        alt="Ayuba Yusufu"
        className="relative w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

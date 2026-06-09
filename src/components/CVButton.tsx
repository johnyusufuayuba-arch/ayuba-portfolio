import { Download } from 'lucide-react';

export default function CVButton() {
  return (
    <a
      href="/Ayuba-Yusufu-CV.pdf"
      download
      className="inline-flex items-center gap-2 shrink-0 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      <Download size={18} strokeWidth={2} />
      Download CV
    </a>
  );
}

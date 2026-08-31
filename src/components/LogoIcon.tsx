export default function LogoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Fırça sapı */}
      <path
        d="M12 2C11.4 2 11 2.4 11 3V8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Metal bağlantı */}
      <rect x="9" y="8.5" width="6" height="2.5" rx="0.5" fill="currentColor" />
      {/* Fırça kılları */}
      <path
        d="M7.5 11H16.5V15.5C16.5 17.5 14.5 19.5 12 19.5C9.5 19.5 7.5 17.5 7.5 15.5V11Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Kıl detayları */}
      <path d="M9 13.5H15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M9 15H15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M9 16.5H15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {/* Boya damlası */}
      <path
        d="M10.5 19.5C10.5 20.5 11.2 21.5 12 21.5C12.8 21.5 13.5 20.5 13.5 19.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

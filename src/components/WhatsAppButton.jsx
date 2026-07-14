import { useState } from 'react'

const WA_NUMBER = '923449233424' // +92 344 923 3424
const WA_MESSAGE = encodeURIComponent("Hi Minderfly! I'd like to get in touch.")
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes wa-bounce-in {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        .wa-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37,211,102,0.45);
          animation: wa-bounce-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both,
                     wa-pulse 2.5s 1s ease-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
          text-decoration: none;
        }
        .wa-btn:hover {
          transform: scale(1.12);
          background: #20c55b;
          box-shadow: 0 10px 32px rgba(37,211,102,0.55);
          animation: none;
        }
        .wa-tooltip {
          position: fixed;
          bottom: 98px;
          right: 28px;
          z-index: 998;
          background: #fff;
          color: #202124;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          white-space: nowrap;
          pointer-events: none;
          border: 1px solid #e8eaed;
          animation: wa-bounce-in 0.25s ease both;
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          bottom: -6px;
          right: 22px;
          width: 12px;
          height: 12px;
          background: #fff;
          border-right: 1px solid #e8eaed;
          border-bottom: 1px solid #e8eaed;
          transform: rotate(45deg);
        }
        @media (max-width: 480px) {
          .wa-btn { bottom: 20px; right: 20px; width: 52px; height: 52px; }
          .wa-tooltip { bottom: 84px; right: 20px; }
        }
      `}</style>

      {/* Tooltip */}
      {tooltip && (
        <div className="wa-tooltip">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat with Minderfly on WhatsApp"
        onMouseEnter={() => { setHovered(true); setTooltip(true) }}
        onMouseLeave={() => { setHovered(false); setTooltip(false) }}
      >
        {/* Headset icon */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      </a>
    </>
  )
}

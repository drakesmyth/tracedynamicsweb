<template>
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="trace-mark-main" x1="8" y1="12" x2="48" y2="44">
        <stop stop-color="#005AA9" />
        <stop offset="0.5" stop-color="#11B7C8" />
        <stop offset="1" stop-color="#67B638" />
      </linearGradient>
      <linearGradient id="trace-mark-sweep" x1="8" y1="39" x2="51" y2="28">
        <stop stop-color="#005AA9" />
        <stop offset="0.5" stop-color="#0AA7D9" />
        <stop offset="1" stop-color="#9BD13D" />
      </linearGradient>
    </defs>
    <path
      d="M19 13H46C47.7 13 49 14.3 49 16V23.5C49 28.2 45.2 32 40.5 32H33V45H25V28.5C25 26 27 24 29.5 24H40.5C40.8 24 41 23.8 41 23.5V21H19V13Z"
      fill="url(#trace-mark-main)"
    />
    <path
      d="M18 18H11M22 28H10M26 36H15"
      stroke="#005AA9"
      stroke-width="4"
      stroke-linecap="round"
    />
    <circle cx="11" cy="18" r="3.5" fill="#005AA9" />
    <circle cx="10" cy="28" r="3.5" fill="#005AA9" />
    <circle cx="15" cy="36" r="3.5" fill="#005AA9" />
    <path
      d="M8 39C15.8 49 38.2 49.2 50 29"
      stroke="url(#trace-mark-sweep)"
      stroke-width="5"
      stroke-linecap="round"
    />
    <path
      d="M12 41C22.5 47.5 37 44.2 47 33"
      stroke="#FBFCF8"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.85"
    />
  </svg>
</template>

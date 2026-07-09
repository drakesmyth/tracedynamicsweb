<template>
  <div class="w-full max-w-[380px]">
    <svg
      viewBox="0 0 360 160"
      class="h-auto w-full"
      role="img"
      aria-label="Front-loaded contributor credit: a multiplier decaying from up to 64x toward a 1x baseline as the network matures"
    >
      <defs>
        <linearGradient id="earnLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#005aa9" />
          <stop offset="0.5" stop-color="#11b7c8" />
          <stop offset="1" stop-color="#43a642" />
        </linearGradient>
        <linearGradient id="earnFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#11b7c8" stop-opacity="0.22" />
          <stop offset="1" stop-color="#11b7c8" stop-opacity="0" />
        </linearGradient>
      </defs>

      <line x1="34" y1="136" x2="348" y2="136" stroke="#dfe8e1" stroke-width="1" />
      <line x1="34" y1="136" x2="34" y2="10" stroke="#dfe8e1" stroke-width="1" />

      <path
        d="M34,10 L55,33 L86,60 L116,78 L139,90 L191,108 L243,119 L348,130 L348,136 L34,136 Z"
        fill="url(#earnFill)"
      />
      <path
        d="M34,10 L55,33 L86,60 L116,78 L139,90 L191,108 L243,119 L348,130"
        fill="none"
        stroke="url(#earnLine)"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <circle cx="34" cy="10" r="3.4" fill="#005aa9" />
      <text x="41" y="15" font-size="10" font-weight="700" fill="#071b3d">up to 64×</text>
      <circle cx="116" cy="78" r="3" fill="#11b7c8" />
      <text x="122" y="74" font-size="9" font-weight="600" fill="#53637b">30×+ for early public</text>

      <text x="345" y="132" font-size="9" fill="#53637b" text-anchor="end">1× baseline</text>
      <text x="34" y="152" font-size="9" fill="#53637b">earlier contributions</text>
      <text x="348" y="152" font-size="9" fill="#53637b" text-anchor="end">later</text>
    </svg>
  </div>
</template>

#!/bin/bash
# Generate all SVG icon files

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-skleroterapi.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 4 C14 4 7 10 7 16 a7 7 0 0014 0 C21 10 14 4 14 4Z" fill="rgba(14,116,144,.15)" stroke="#0e7490" stroke-width="1.5"/>
  <path d="M14 20 v-8" stroke="#0e7490" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M10 16 l4-4 4 4" fill="none" stroke="#0e7490" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-periferik.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 14 C4 14 8 8 14 8 C20 8 24 14 24 14 C24 14 20 20 14 20 C8 20 4 14 4 14Z" fill="rgba(14,116,144,.12)" stroke="#0e7490" stroke-width="1.5"/>
  <circle cx="14" cy="14" r="3.5" fill="#0e7490" opacity=".65"/>
  <circle cx="14" cy="14" r="1.5" fill="white" opacity=".8"/>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-bypass.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 14 Q5 8 14 8 Q23 8 23 14" fill="none" stroke="#0e7490" stroke-width="2" stroke-linecap="round"/>
  <path d="M5 14 Q5 20 14 20 Q23 20 23 14" fill="rgba(14,116,144,.1)" stroke="#0e7490" stroke-width="2" stroke-linecap="round"/>
  <line x1="14" y1="8" x2="14" y2="20" stroke="#0e7490" stroke-width="1.5" stroke-dasharray="2 2"/>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-varis.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 5 C14 5 6 10 6 17 a8 8 0 0016 0 C22 10 14 5 14 5Z" fill="rgba(14,116,144,.1)" stroke="#0e7490" stroke-width="1.5"/>
  <path d="M10 18 l3 3 5-6" fill="none" stroke="#0e7490" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-aort.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 3 L14 25" stroke="#0e7490" stroke-width="2" stroke-linecap="round"/>
  <path d="M8 10 C8 10 4 14 8 19" fill="none" stroke="#0e7490" stroke-width="2" stroke-linecap="round"/>
  <path d="M20 10 C20 10 24 14 20 19" fill="none" stroke="#0e7490" stroke-width="2" stroke-linecap="round"/>
  <circle cx="14" cy="3"  r="2.5" fill="#0e7490" opacity=".5"/>
  <circle cx="14" cy="25" r="2.5" fill="#0e7490" opacity=".5"/>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/icon-dvt.svg << 'EOF'
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="5" width="20" height="18" rx="4" fill="rgba(14,116,144,.1)" stroke="#0e7490" stroke-width="1.5"/>
  <path d="M8 14 h3 l2-4 2 8 2-4 h3" fill="none" stroke="#0e7490" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

# Blog SVGs
cat > /home/claude/dr-erol-bahtiyar/assets/svg/blog-aort.svg << 'EOF'
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg1" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0e7490" stop-opacity=".25"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  <rect width="400" height="180" fill="#0b1d3a"/>
  <ellipse cx="200" cy="90" rx="90" ry="60" fill="url(#bg1)"/>
  <ellipse cx="200" cy="90" rx="90" ry="60" fill="none" stroke="rgba(14,116,144,.3)" stroke-width="1.5"/>
  <path d="M100 90 Q130 50 160 90 Q190 130 220 70 Q250 10 280 90 Q310 170 340 90"
    fill="none" stroke="#4dd0e1" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="220" cy="70" r="9" fill="rgba(220,38,38,.65)" stroke="white" stroke-width="1.5"/>
  <text x="200" y="164" text-anchor="middle" fill="rgba(255,255,255,.4)"
    font-size="10" font-family="Arial,sans-serif" letter-spacing="2">AORT DAMAR HASTALIKLARI</text>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/blog-koroner.svg << 'EOF'
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="180" fill="#1a0b3a"/>
  <path d="M200 50 C200 50 155 68 155 100 a45 45 0 0090 0 C245 68 200 50 200 50Z"
    fill="rgba(220,38,38,.28)" stroke="#ef4444" stroke-width="2"/>
  <path d="M175 98 l14 14 22-22"
    fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="200" y="164" text-anchor="middle" fill="rgba(255,255,255,.4)"
    font-size="10" font-family="Arial,sans-serif" letter-spacing="2">KORONER ARTER HASTALIGI</text>
</svg>
EOF

cat > /home/claude/dr-erol-bahtiyar/assets/svg/blog-kapak.svg << 'EOF'
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="180" fill="#0b3a1a"/>
  <circle cx="200" cy="88" r="52" fill="none" stroke="rgba(34,197,94,.3)" stroke-width="2"/>
  <path d="M156 88 L176 66 L183 78 L194 52 L206 88 L212 88"
    fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="200" y="164" text-anchor="middle" fill="rgba(255,255,255,.4)"
    font-size="10" font-family="Arial,sans-serif" letter-spacing="2">KALP KAPAK HASTALIKLARI</text>
</svg>
EOF

# FAQ illustration
cat > /home/claude/dr-erol-bahtiyar/assets/svg/faq-illustration.svg << 'EOF'
<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="220" height="160" rx="16"
    fill="rgba(14,116,144,.06)" stroke="rgba(14,116,144,.2)" stroke-width="1.5"/>
  <circle cx="130" cy="80" r="32" fill="rgba(14,116,144,.1)" stroke="#0e7490" stroke-width="2"/>
  <text x="130" y="90" text-anchor="middle"
    font-family="Georgia,serif" font-size="30" fill="#0e7490" font-weight="700">?</text>
  <rect x="55"  y="128" width="150" height="10" rx="5" fill="rgba(14,116,144,.15)"/>
  <rect x="75"  y="146" width="110" height="8"  rx="4" fill="rgba(14,116,144,.10)"/>
  <circle cx="50"  cy="50"  r="8" fill="rgba(184,150,62,.30)"/>
  <circle cx="210" cy="162" r="6" fill="rgba(14,116,144,.30)"/>
  <circle cx="40"  cy="170" r="4" fill="rgba(14,116,144,.20)"/>
  <circle cx="228" cy="38"  r="5" fill="rgba(184,150,62,.20)"/>
</svg>
EOF

echo "All SVG files generated successfully!"

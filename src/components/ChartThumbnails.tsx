// ChartThumbnails.tsx
// Six distinct inline SVG chart types for case study card previews.
// All use viewBox="0 0 480 270" (16:9). Navy/blue/gold palette.
// These are analytical placeholders — replace with real deliverable screenshots when available.

export function ScatterChart() {
  // Competitive Positioning: Market Size ($B) vs. Growth Rate (%)
  const points = [
    { label: "Target Co.", cx: 275, cy: 90,  r: 9,  fill: "#d4a547", bold: true },
    { label: "Comp. F",    cx: 386, cy: 80,  r: 6,  fill: "#0f172a" },
    { label: "Comp. A",   cx: 357, cy: 162, r: 5,  fill: "#1e293b" },
    { label: "Comp. B",   cx: 192, cy: 121, r: 5,  fill: "#334155" },
    { label: "Comp. C",   cx: 316, cy: 183, r: 5,  fill: "#3b82f6" },
    { label: "Comp. D",   cx: 130, cy: 141, r: 4,  fill: "#1e293b" },
    { label: "Comp. E",   cx: 254, cy: 203, r: 4,  fill: "#60a5fa" },
  ];
  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Scatter plot: competitive positioning">
      <rect width="480" height="270" fill="#f8fafc" />
      {/* Title */}
      <text x="264" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        Competitive Positioning — Market Size vs. Growth Rate
      </text>
      {/* Gridlines */}
      {[151, 254, 357].map(x => <line key={x} x1={x} y1="28" x2={x} y2="234" stroke="#e2e8f0" strokeWidth="0.7" />)}
      {[183, 131, 79].map(y => <line key={y} x1="48" y1={y} x2="464" y2={y} stroke="#e2e8f0" strokeWidth="0.7" />)}
      {/* Quadrant lines */}
      <line x1="254" y1="28" x2="254" y2="234" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,3" />
      <line x1="48" y1="131" x2="464" y2="131" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,3" />
      {/* Axes */}
      <line x1="48" y1="234" x2="464" y2="234" stroke="#334155" strokeWidth="1.5" />
      <line x1="48" y1="28"  x2="48"  y2="234" stroke="#334155" strokeWidth="1.5" />
      {/* X labels */}
      {[{x:48,l:"$0B"},{x:151,l:"$25B"},{x:254,l:"$50B"},{x:357,l:"$75B"},{x:464,l:"$100B"}].map(({x,l})=>(
        <text key={x} x={x} y="247" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{l}</text>
      ))}
      <text x="256" y="260" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif">Total Addressable Market</text>
      {/* Y labels */}
      {[{y:234,l:"0%"},{y:183,l:"5%"},{y:131,l:"10%"},{y:79,l:"15%"},{y:28,l:"20%"}].map(({y,l})=>(
        <text key={y} x="44" y={y+3} textAnchor="end" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{l}</text>
      ))}
      <text x="14" y="131" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif" transform="rotate(-90 14 131)">Growth Rate</text>
      {/* Quadrant labels */}
      <text x="260" y="42" fill="#94a3b8" fontSize="6.5" fontFamily="Inter,sans-serif">HIGH GROWTH · LARGE MARKET</text>
      <text x="55"  y="42" fill="#94a3b8" fontSize="6.5" fontFamily="Inter,sans-serif">HIGH GROWTH · SMALL MARKET</text>
      <text x="260" y="228" fill="#94a3b8" fontSize="6.5" fontFamily="Inter,sans-serif">LOW GROWTH · LARGE MARKET</text>
      {/* Data points */}
      {points.map(p => (
        <g key={p.label}>
          <circle cx={p.cx} cy={p.cy} r={p.r} fill={p.fill} fillOpacity="0.88" />
          {p.bold && <circle cx={p.cx} cy={p.cy} r={p.r+3} fill="none" stroke={p.fill} strokeWidth="1.5" />}
          <text x={p.cx + p.r + 4} y={p.cy + 3} fill={p.bold ? "#92400e" : "#334155"} fontSize="7" fontWeight={p.bold ? "700" : "400"} fontFamily="Inter,sans-serif">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function WaterfallChart() {
  // Revenue Bridge FY21→FY22 ($M)
  // Bar positions: x=52,111,170,229,288,347,406 width=38
  // Y scale: 0-65M over 206px (y=234 is 0, y=28 is 65)
  const bars = [
    { x: 52,  y: 100, h: 134, color: "#0f172a", label: "42.5",  name: "FY21",       type: "total" },
    { x: 111, y: 89,  h: 11,  color: "#3b82f6", label: "+3.2",  name: "Price/Mix",  type: "up" },
    { x: 170, y: 64,  h: 25,  color: "#3b82f6", label: "+7.8",  name: "Volume",     type: "up" },
    { x: 229, y: 48,  h: 16,  color: "#3b82f6", label: "+5.1",  name: "New Accts",  type: "up" },
    { x: 288, y: 48,  h: 8,   color: "#d4a547", label: "−2.4",  name: "Attrition",  type: "down" },
    { x: 347, y: 56,  h: 3,   color: "#d4a547", label: "−0.8",  name: "FX",         type: "down" },
    { x: 406, y: 58,  h: 176, color: "#1e293b", label: "55.4",  name: "FY22",       type: "total" },
  ];
  // Connector lines: (x1, x2, y)
  const connectors = [
    { x1: 90, x2: 111, y: 100 },
    { x1: 149, x2: 170, y: 89 },
    { x1: 208, x2: 229, y: 64 },
    { x1: 267, x2: 288, y: 48 },
    { x1: 326, x2: 347, y: 56 },
    { x1: 385, x2: 406, y: 59 },
  ];
  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Waterfall chart: revenue bridge">
      <rect width="480" height="270" fill="#f8fafc" />
      <text x="240" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        Revenue Bridge FY21 → FY22 ($M)
      </text>
      {/* Y gridlines */}
      {[183, 131, 79].map(y => <line key={y} x1="48" y1={y} x2="464" y2={y} stroke="#e2e8f0" strokeWidth="0.7" />)}
      {/* Axes */}
      <line x1="48" y1="234" x2="464" y2="234" stroke="#334155" strokeWidth="1.5" />
      <line x1="48" y1="28"  x2="48"  y2="234" stroke="#334155" strokeWidth="1.5" />
      {/* Y labels */}
      {[{y:234,l:"$0"},{y:183,l:"$20M"},{y:131,l:"$40M"},{y:79,l:"$60M"}].map(({y,l})=>(
        <text key={y} x="44" y={y+3} textAnchor="end" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{l}</text>
      ))}
      {/* Connector lines */}
      {connectors.map((c,i) => (
        <line key={i} x1={c.x1} y1={c.y} x2={c.x2} y2={c.y} stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3,2" />
      ))}
      {/* Bars */}
      {bars.map(b => (
        <g key={b.name}>
          <rect x={b.x} y={b.y} width="38" height={b.h} fill={b.color} fillOpacity={b.type === "total" ? "0.92" : "0.80"} rx="1" />
          <text x={b.x + 19} y={b.y - 4} textAnchor="middle" fill={b.type === "down" ? "#92400e" : "#0f172a"} fontSize="7" fontWeight="600" fontFamily="Inter,sans-serif">{b.label}</text>
          <text x={b.x + 19} y="249" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="Inter,sans-serif">{b.name}</text>
        </g>
      ))}
      {/* Legend */}
      <rect x="52" y="258" width="8" height="6" fill="#3b82f6" rx="1" />
      <text x="63" y="264" fill="#475569" fontSize="6.5" fontFamily="Inter,sans-serif">Positive</text>
      <rect x="102" y="258" width="8" height="6" fill="#d4a547" rx="1" />
      <text x="113" y="264" fill="#475569" fontSize="6.5" fontFamily="Inter,sans-serif">Negative</text>
      <rect x="155" y="258" width="8" height="6" fill="#1e293b" rx="1" />
      <text x="166" y="264" fill="#475569" fontSize="6.5" fontFamily="Inter,sans-serif">Total</text>
    </svg>
  );
}

export function HeatMapChart() {
  // Competitive Landscape Matrix
  const cols = ["Product", "Tech Depth", "Price Pwr", "Sales Reach", "Cust. Ret.", "Innovation"];
  const rows = [
    { name: "Co. A",   vals: [3, 4, 4, 5, 3, 3] },
    { name: "Co. B",   vals: [4, 2, 3, 4, 4, 2] },
    { name: "Target",  vals: [5, 5, 4, 3, 5, 5], highlight: true },
    { name: "Co. C",   vals: [2, 4, 5, 3, 3, 3] },
    { name: "Co. D",   vals: [3, 2, 5, 5, 2, 2] },
  ];
  const cellColors = ["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#0f172a"];
  const cellTextColors = ["#1e293b","#1e293b","#ffffff","#ffffff","#ffffff"];
  const cw = 62, ch = 36;
  const gridX = 58, gridY = 48;

  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Heat map: competitive landscape">
      <rect width="480" height="270" fill="#f8fafc" />
      <text x="240" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        Competitive Landscape — Capability Assessment
      </text>
      {/* Column headers */}
      {cols.map((c, i) => (
        <text key={c} x={gridX + i * cw + cw/2} y="40" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="600" fontFamily="Inter,sans-serif">{c}</text>
      ))}
      {/* Cells */}
      {rows.map((row, ri) => (
        <g key={row.name}>
          {/* Row label */}
          <text x={gridX - 4} y={gridY + ri * ch + ch/2 + 3} textAnchor="end" fill={row.highlight ? "#d4a547" : "#334155"} fontSize="7.5" fontWeight={row.highlight ? "700" : "400"} fontFamily="Inter,sans-serif">{row.name}</text>
          {/* Cells */}
          {row.vals.map((v, ci) => {
            const x = gridX + ci * cw;
            const y = gridY + ri * ch;
            const bg = cellColors[v - 1];
            const tc = cellTextColors[v - 1];
            return (
              <g key={ci}>
                <rect x={x+1} y={y+1} width={cw-2} height={ch-2} fill={bg} rx="2" />
                {row.highlight && <rect x={x+1} y={y+1} width={cw-2} height={ch-2} fill="none" stroke="#d4a547" strokeWidth="1.5" rx="2" />}
                <text x={x+cw/2} y={y+ch/2+3} textAnchor="middle" fill={tc} fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">{v}</text>
              </g>
            );
          })}
        </g>
      ))}
      {/* Scale legend */}
      {["1","2","3","4","5"].map((v,i) => (
        <g key={v}>
          <rect x={58 + i*22} y="232" width="18" height="10" fill={cellColors[i]} rx="1" />
          <text x={58 + i*22 + 9} y="241" textAnchor="middle" fill={cellTextColors[i]} fontSize="6" fontFamily="Inter,sans-serif">{v}</text>
        </g>
      ))}
      <text x="178" y="241" fill="#64748b" fontSize="6.5" fontFamily="Inter,sans-serif">← Weak   Strong →</text>
      <text x="58" y="260" fill="#94a3b8" fontSize="6.5" fontFamily="Inter,sans-serif">Based on primary interviews with customers, competitors, and channel partners.</text>
    </svg>
  );
}

export function TimeSeriesChart() {
  // Revenue Trend by Cohort ($M) — 2018–2023
  const xs = [52, 118, 183, 249, 314, 380];
  const years = ["2018","2019","2020","2021","2022","2023"];
  // Y scale: 0-60M → py = 234 - val/60 * 206
  const py = (v: number) => 234 - (v / 60) * 206;

  const series = [
    { name: "Co. 1", vals: [28,32,29,38,45,52], color: "#0f172a", dashes: "" },
    { name: "Co. 2", vals: [22,25,24,31,39,48], color: "#3b82f6", dashes: "" },
    { name: "Co. 3", vals: [8, 10,12,18,28,42], color: "#d4a547", dashes: "" },
    { name: "Co. 4", vals: [15,18,22,28,31,35], color: "#60a5fa", dashes: "4,3" },
  ];

  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Time series: revenue trends by cohort">
      <rect width="480" height="270" fill="#f8fafc" />
      <text x="216" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        Revenue Trend by Cohort ($M) — 2018–2023
      </text>
      {/* Y gridlines */}
      {[0,10,20,30,40,50,60].map(v => (
        <line key={v} x1="48" y1={py(v)} x2="392" y2={py(v)} stroke="#e2e8f0" strokeWidth="0.6" />
      ))}
      {/* X gridlines */}
      {xs.map(x => <line key={x} x1={x} y1="28" x2={x} y2="234" stroke="#f1f5f9" strokeWidth="0.6" />)}
      {/* Axes */}
      <line x1="48" y1="234" x2="392" y2="234" stroke="#334155" strokeWidth="1.5" />
      <line x1="48" y1="28"  x2="48"  y2="234" stroke="#334155" strokeWidth="1.5" />
      {/* Y labels */}
      {[0,10,20,30,40,50,60].map(v => (
        <text key={v} x="44" y={py(v)+3} textAnchor="end" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">${v}M</text>
      ))}
      {/* X labels */}
      {years.map((y,i) => (
        <text key={y} x={xs[i]} y="248" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="Inter,sans-serif">{y}</text>
      ))}
      {/* Lines */}
      {series.map(s => {
        const pts = s.vals.map((v,i) => `${xs[i]},${py(v)}`).join(" ");
        return (
          <g key={s.name}>
            <polyline points={pts} fill="none" stroke={s.color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" strokeDasharray={s.dashes} />
            {s.vals.map((v,i) => <circle key={i} cx={xs[i]} cy={py(v)} r="3.5" fill={s.color} />)}
          </g>
        );
      })}
      {/* Legend */}
      {series.map((s,i) => (
        <g key={s.name}>
          <line x1={400 + 0} y1={60 + i*20} x2={414} y2={60 + i*20} stroke={s.color} strokeWidth="2" strokeDasharray={s.dashes} />
          <circle cx={407} cy={60 + i*20} r="3" fill={s.color} />
          <text x={418} y={60 + i*20 + 3} fill="#334155" fontSize="7.5" fontFamily="Inter,sans-serif">{s.name}</text>
        </g>
      ))}
      <text x="14" y="131" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif" transform="rotate(-90 14 131)">Revenue ($M)</text>
    </svg>
  );
}

export function StackedAreaChart() {
  // Market Share Evolution (%) — 2017–2024
  const xs = [52, 99, 146, 193, 240, 287, 334, 381];
  const years = ["'17","'18","'19","'20","'21","'22","'23","'24"];

  // Cumulative top Y positions for each area (pre-calculated)
  // py = 234 - val/100 * 206
  const layers = [
    { name: "Leader",   pts_top: "52,124 99,130 146,133 193,140 240,147 287,154 334,157 381,164", pts_bot: "52,28 99,28 146,28 193,28 240,28 287,28 334,28 381,28",  color: "#0f172a" },
    { name: "Co. 2",    pts_top: "52,121 99,117 146,115 193,110 240,106 287,102 334,100 381,96",   pts_bot: "52,124 99,130 146,133 193,140 240,147 287,154 334,157 381,164", color: "#3b82f6" },
    { name: "Co. 3",    pts_top: "52,162 99,162 146,160 193,158 240,156 287,154 334,154 381,152",  pts_bot: "52,121 99,117 146,115 193,110 240,106 287,102 334,100 381,96",  color: "#60a5fa" },
    { name: "Co. 4",    pts_top: "52,193 99,191 146,189 193,187 240,187 287,185 334,185 381,185",  pts_bot: "52,162 99,162 146,160 193,158 240,156 287,154 334,154 381,152", color: "#d4a547" },
    { name: "Others",   pts_top: "52,210 99,210 146,210 193,210 240,212 287,212 334,214 381,216",  pts_bot: "52,193 99,191 146,189 193,187 240,187 287,185 334,185 381,185", color: "#e2e8f0" },
  ];

  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Stacked area: market share evolution">
      <rect width="480" height="270" fill="#f8fafc" />
      <text x="216" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        Market Share Evolution (%) — 2017–2024
      </text>
      {/* Y gridlines */}
      {[25,50,75].map(v => {
        const y = 234 - v/100*206;
        return <line key={v} x1="48" y1={y} x2="392" y2={y} stroke="#e2e8f0" strokeWidth="0.7" />;
      })}
      {/* Areas (bottom-up order so leader draws on top) */}
      {[...layers].reverse().map(layer => {
        const topPts = layer.pts_top.split(" ").reverse().join(" ");
        const polygon = `${layer.pts_bot} ${topPts}`;
        return (
          <polygon key={layer.name} points={polygon} fill={layer.color} fillOpacity="0.82" />
        );
      })}
      {/* Axes */}
      <line x1="48" y1="234" x2="392" y2="234" stroke="#334155" strokeWidth="1.5" />
      <line x1="48" y1="28"  x2="48"  y2="234" stroke="#334155" strokeWidth="1.5" />
      {/* X labels */}
      {years.map((y,i) => (
        <text key={y} x={xs[i]} y="248" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="Inter,sans-serif">{y}</text>
      ))}
      {/* Y labels */}
      {[0,25,50,75,100].map(v => {
        const y = 234 - v/100*206;
        return <text key={v} x="44" y={y+3} textAnchor="end" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{v}%</text>;
      })}
      {/* Legend */}
      {layers.map((l,i) => (
        <g key={l.name}>
          <rect x={400} y={40 + i*18} width="10" height="10" fill={l.color} rx="1" />
          <text x={414} y={40 + i*18 + 8} fill="#334155" fontSize="7.5" fontFamily="Inter,sans-serif">{l.name}</text>
        </g>
      ))}
      <text x="14" y="131" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif" transform="rotate(-90 14 131)">Market Share</text>
    </svg>
  );
}

export function BubbleChart() {
  // MSA Opportunity: Population (M) vs. Penetration Rate (%), Bubble = Market Size ($M)
  // X scale: 0-12M → px = 52 + pop/12 * 328
  // Y scale: 0-25% → py = 234 - pen/25 * 206
  const cities = [
    { name: "Chicago",     pop: 9.5,  pen: 12, mkt: 85,  color: "#0f172a" },
    { name: "Houston",     pop: 7.1,  pen: 9,  mkt: 55,  color: "#1e293b" },
    { name: "Atlanta",     pop: 6.0,  pen: 14, mkt: 62,  color: "#3b82f6" },
    { name: "Phoenix",     pop: 4.9,  pen: 8,  mkt: 35,  color: "#334155" },
    { name: "Denver",      pop: 2.9,  pen: 18, mkt: 42,  color: "#3b82f6" },
    { name: "Nashville",   pop: 2.0,  pen: 22, mkt: 38,  color: "#d4a547" },
    { name: "Charlotte",   pop: 2.6,  pen: 16, mkt: 35,  color: "#60a5fa" },
    { name: "Minneapolis", pop: 3.6,  pen: 11, mkt: 28,  color: "#475569" },
  ];
  const px = (p: number) => 52 + (p / 12) * 328;
  const py = (p: number) => 234 - (p / 25) * 206;
  const r  = (m: number) => Math.sqrt(m) * 1.15;

  return (
    <svg viewBox="0 0 480 270" className="w-full h-full" aria-label="Bubble chart: MSA opportunity sizing">
      <rect width="480" height="270" fill="#f8fafc" />
      <text x="216" y="16" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">
        MSA Market Opportunity — Population vs. Penetration vs. Market Size
      </text>
      {/* Gridlines */}
      {[3,6,9,12].map(v => <line key={v} x1={px(v)} y1="28" x2={px(v)} y2="234" stroke="#e2e8f0" strokeWidth="0.7" />)}
      {[5,10,15,20,25].map(v => <line key={v} x1="48" y1={py(v)} x2="392" y2={py(v)} stroke="#e2e8f0" strokeWidth="0.7" />)}
      {/* Axes */}
      <line x1="48" y1="234" x2="392" y2="234" stroke="#334155" strokeWidth="1.5" />
      <line x1="48" y1="28"  x2="48"  y2="234" stroke="#334155" strokeWidth="1.5" />
      {/* Bubbles */}
      {cities.map(c => (
        <g key={c.name}>
          <circle cx={px(c.pop)} cy={py(c.pen)} r={r(c.mkt)} fill={c.color} fillOpacity="0.72" stroke={c.color} strokeWidth="1" />
          <text x={px(c.pop)} y={py(c.pen) - r(c.mkt) - 3} textAnchor="middle" fill="#334155" fontSize="6.5" fontFamily="Inter,sans-serif">{c.name}</text>
          <text x={px(c.pop)} y={py(c.pen) + 3} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700" fontFamily="Inter,sans-serif">${c.mkt}M</text>
        </g>
      ))}
      {/* X labels */}
      {[0,3,6,9,12].map(v => (
        <text key={v} x={px(v)} y="248" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{v}M</text>
      ))}
      <text x="216" y="260" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif">Population</text>
      {/* Y labels */}
      {[0,5,10,15,20,25].map(v => (
        <text key={v} x="44" y={py(v)+3} textAnchor="end" fill="#64748b" fontSize="7" fontFamily="Inter,sans-serif">{v}%</text>
      ))}
      <text x="14" y="131" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="Inter,sans-serif" transform="rotate(-90 14 131)">Penetration Rate</text>
      {/* Bubble size key */}
      <text x="400" y="42" fill="#64748b" fontSize="6.5" fontFamily="Inter,sans-serif">Bubble = Mkt Size</text>
      {[{r:5,l:"$20M"},{r:8,l:"$50M"},{r:11,l:"$90M"}].map((s,i) => (
        <g key={s.l}>
          <circle cx={408} cy={58 + i*26} r={s.r} fill="none" stroke="#94a3b8" strokeWidth="1" />
          <text x={422} y={58 + i*26 + 3} fill="#64748b" fontSize="6.5" fontFamily="Inter,sans-serif">{s.l}</text>
        </g>
      ))}
    </svg>
  );
}

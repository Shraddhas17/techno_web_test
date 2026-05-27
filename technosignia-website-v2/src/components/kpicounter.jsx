import { useThemeTokens } from "../hooks/usetheme";
import { useKpiCounters } from "../hooks/usekpicounter";
import { KPI_LABELS } from "../constants/data";

export default function KpiCounters() {
  const th = useThemeTokens();
  const { counters, kpiRef } = useKpiCounters();

  const formatCounter = (value, index) => {
    if (index === 3) return `${value}%`;
    if (index === 1) return `${Math.floor(value / 1000)}K+`;
    return `${value.toLocaleString()}+`;
  };

  return (
    <section
      ref={kpiRef}
      className="kpi-section"
      style={{
        background: th.dark
          ? "rgba(45,90,158,0.08)"
          : "rgba(45,90,158,0.05)",
        borderTop: `1px solid ${th.border}`,
        borderBottom: `1px solid ${th.border}`,
      }}
    >
      <div className="kpi-grid">
        {counters.map((value, i) => (
          <div key={i} className="kpi-item">
            <div
              className="kpi-counter"
              style={{ color: i % 2 === 0 ? th.blue : th.red }}
            >
              {formatCounter(value, i)}
            </div>
            <div className="kpi-label" style={{ color: th.textMuted }}>
              {KPI_LABELS[i]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./MetricsGrid.module.css";

const metrics = [
  { label: "System Uptime", value: "99.98%" },
  { label: "CPU Load", value: "41%" },
  { label: "Active Sessions", value: "128" },
  { label: "Error Rate", value: "0.02%" },
];

export default function MetricsGrid() {
  return (
    <div className={styles.grid}>
      {metrics.map((m) => (
        <div key={m.label} className={styles.card}>
          <div className={styles.label}>{m.label}</div>
          <div className={styles.value}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}
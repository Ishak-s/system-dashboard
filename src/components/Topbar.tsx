import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <input className={styles.input} placeholder="Search..." />
      <div className={styles.status}>🟢 AI Online</div>
    </div>
  );
}
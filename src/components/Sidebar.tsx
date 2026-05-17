import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>NEXUS</h2>

      <ul className={styles.list}>
        <li>Dashboard</li>
        <li>AI Core</li>
        <li>Analytics</li>
        <li>Security</li>
        <li>Logs</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
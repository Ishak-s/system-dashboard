import styles from "./SystemStatus.module.css";

export default function SystemStatus() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.dot}></div>
        SYSTEM OPERATIONAL
      </div>

      <div className={styles.right}>
        Node Cluster: STABLE
      </div>
    </div>
  );
}
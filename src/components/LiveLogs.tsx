"use client";

import { useEffect, useState } from "react";
import styles from "./LiveLogs.module.css";

const baseLogs = [
  "auth service initialized",
  "database connection stable",
  "cache layer active",
  "API response time: 120ms",
];

export default function LiveLogs() {
  const [logs, setLogs] = useState(baseLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] system heartbeat OK`;

      setLogs((prev) => [newLog, ...prev.slice(0, 6)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>LIVE SYSTEM LOGS</div>

      <div className={styles.logs}>
        {logs.map((l, i) => (
          <div key={i} className={styles.log}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
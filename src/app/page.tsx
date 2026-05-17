"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import MetricsGrid from "@/components/MetricsGrid";
import LiveLogs from "@/components/LiveLogs";
import SystemStatus from "@/components/SystemStatus";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.main}>
        <Topbar />

        <div className={styles.content}>
          <SystemStatus />

          <MetricsGrid />

          <div className={styles.grid}>
            <LiveLogs />
          </div>
        </div>
      </div>
    </div>
  );
}
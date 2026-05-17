import "@/styles/globals.css";

export const metadata = {
  title: "Nexus AI Dashboard",
  description: "Futuristic AI Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
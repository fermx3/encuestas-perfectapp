export const metadata = {
  title: "Dashboard de Encuestas",
  description: "Panel de administración y estadísticas básicas de las encuestas.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Dashboard de Encuestas",
    description: "Panel de administración y estadísticas básicas de las encuestas.",
    type: "website",
    url: "https://encuestas-perfectapp.vercel.app/dashboard",
    siteName: "Dashboard de Encuestas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard de Encuestas",
    description: "Panel de administración y estadísticas básicas de las encuestas.",
  },
};

export default function DashboardLayout({ children }) {
  return <>{children}</>;
}

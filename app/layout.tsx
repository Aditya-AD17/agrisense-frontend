import "./globals.css"
import AppShell from "@/components/layout/AppShell"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
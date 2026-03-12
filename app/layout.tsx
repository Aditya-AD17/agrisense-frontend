import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"
import PageTransition from "@/components/layout/PageTransition"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col min-h-screen">

          <Navbar />

          <main className="p-8 flex-1">
  <PageTransition>
    {children}
  </PageTransition>
</main>

        </div>

      </body>
    </html>
  )
}
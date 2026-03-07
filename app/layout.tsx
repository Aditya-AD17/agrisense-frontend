import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <main className="p-6">
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}
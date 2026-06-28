import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-gray-50">

        <div className="flex min-h-screen">

          {/* Sidebar (Desktop) */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col">

            <Topbar />

            <main className="p-4 md:p-6">
              {children}
            </main>

          </div>
        </div>

      </body>
    </html>
  )
}

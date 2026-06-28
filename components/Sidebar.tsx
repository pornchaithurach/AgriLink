import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-64 bg-green-800 text-white min-h-screen p-4">

      <h1 className="text-xl font-bold mb-6">
        🌾 AgriLink
      </h1>

      <nav className="flex flex-col gap-3">
        <Link href="/">📊 Dashboard</Link>
        <Link href="/farmers">👨‍🌾 Farmers</Link>
        <Link href="/crops">🌱 Crops</Link>
        <Link href="/plots">🗺️ Plots</Link>
        <Link href="/market">💰 Market</Link>
      </nav>

    </div>
  )
}

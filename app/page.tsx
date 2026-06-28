import { supabase } from "@/lib/supabase"
import Card from "@/components/Card"

export default async function Dashboard() {

  const { data: farmers } = await supabase.from("farmers").select("*")
  const { data: plots } = await supabase.from("plots").select("*")
  const { data: crops } = await supabase.from("crops").select("*")

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        📊 Dashboard
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <Card title="👨‍🌾 Farmers" value={farmers?.length || 0} />
        <Card title="🗺️ Plots" value={plots?.length || 0} />
        <Card title="🌱 Crops" value={crops?.length || 0} />

      </div>

    </div>
  )
}

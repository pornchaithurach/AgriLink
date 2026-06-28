import { supabase } from "@/lib/supabase"
import MapView from "@/components/MapView"

export default async function PlotsPage() {

  const { data: plots } = await supabase
    .from("plots")
    .select("*")

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">
        🗺️ GIS Agricultural Map
      </h1>

      {/* MAP */}
      <MapView plots={plots || []} />

      {/* LIST */}
      <div className="mt-6 space-y-3">

        {plots?.map((p) => (
          <div
            key={p.id}
            className="bg-white p-3 rounded-xl shadow"
          >
            🌾 {p.plot_name} —
            📍 {p.latitude}, {p.longitude}
          </div>
        ))}

      </div>

    </div>
  )
}

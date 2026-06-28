import { supabase } from "@/lib/supabase"

export default async function CropsPage() {
  const { data } = await supabase.from("crops").select("*")

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">
        🌱 Crops
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {data?.map((c) => (
          <div
            key={c.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <div className="font-bold text-green-700">
              {c.crop_name}
            </div>

            <div className="text-sm text-gray-500">
              {c.category}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

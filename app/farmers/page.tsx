import { supabase } from "@/lib/supabase"

export default async function FarmersPage() {
  const { data } = await supabase.from("farmers").select("*")

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">
        👨‍🌾 Farmers
      </h1>

      <div className="space-y-3">

        {data?.map((f) => (
          <div
            key={f.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row md:justify-between"
          >

            <div>
              <div className="font-bold">{f.full_name}</div>
              <div className="text-sm text-gray-500">
                {f.village}
              </div>
            </div>

            <div className="text-green-600 text-sm">
              📍 {f.district}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

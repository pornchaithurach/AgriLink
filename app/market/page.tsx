import { supabase } from "@/lib/supabase"

export default async function MarketPage() {
  const { data } = await supabase
    .from("market_prices")
    .select("*")
    .order("recorded_at", { ascending: false })

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">
        💰 Market Prices
      </h1>

      <div className="space-y-3">

        {data?.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between"
          >

            <div>
              <div className="font-bold">
                {p.crop_name}
              </div>
              <div className="text-xs text-gray-500">
                ตลาด: {p.market_location}
              </div>
            </div>

            <div className="text-green-600 font-bold">
              {p.price_per_kg} ฿/kg
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

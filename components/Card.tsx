export default function Card({
  title,
  value,
  icon
}: {
  title: string
  value: string | number
  icon?: string
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">

      <div className="text-gray-500 text-sm">
        {title}
      </div>

      <div className="text-2xl font-bold text-green-700">
        {icon} {value}
      </div>

    </div>
  )
}

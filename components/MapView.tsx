"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

type Plot = {
  id: string
  plot_name: string
  latitude: number
  longitude: number
  area_rai: number
}

export default function MapView({ plots }: { plots: Plot[] }) {
  return (
    <MapContainer
      center={[15.8, 101.0]} // ไทยกลาง (ปรับเป็นเทพสถิตได้)
      zoom={10}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    >

      {/* Base Map */}
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Plot Markers */}
      {plots.map((plot) => (
        <Marker
          key={plot.id}
          position={[plot.latitude, plot.longitude]}
        >
          <Popup>
            <div>
              <b>🌾 {plot.plot_name}</b>
              <br />
              📏 {plot.area_rai} ไร่
            </div>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  )
}

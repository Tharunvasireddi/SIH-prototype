import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { dummyIssues } from "../Data/data.js";

export default function MapView() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">City Issue Map</h1>
      <MapContainer
        center={[17.6868, 83.2185]} // Vizag coords
        zoom={13}
        style={{ height: "500px", width: "100%" }}
        className="rounded shadow"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {dummyIssues.map((issue, idx) => (
          <Marker
            key={idx}
            position={[
              17.6868 + Math.random() * 0.01,
              83.2185 + Math.random() * 0.01,
            ]}
          >
            <Popup>
              <b>{issue.title}</b>
              <br />
              {issue.location}
              <br />
              Status: {issue.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

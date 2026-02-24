import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import type {RestaurantData} from "@/types"
import 'leaflet/dist/leaflet.css'

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  restaurants: RestaurantData[];
  center?: [number, number];
  zoom?: number;
}

const MapComponent = ({restaurants, center = [52.0975, 23.7343], zoom = 13}: MapProps) => (
  <div className="sticky top-0 h-screen w-full rounded-lg overflow-hidden">
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.name}
          position={[restaurant.lat, restaurant.lng]}
        >
          <Popup>
            <div className="">
              <h3 className="font-bold">{restaurant.name}</h3>
              <p className="text-sm">{restaurant.cuisine}, {restaurant.rate}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
)

export default MapComponent

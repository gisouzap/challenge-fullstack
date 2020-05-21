import pinIcon from '../../../assets/icon-map.png';
import L from 'leaflet';

const Pin = L.icon({
  iconUrl: pinIcon,
  iconSize: [48, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export default Pin;

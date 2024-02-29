import { GeoAlt } from 'react-bootstrap-icons';
import './LocationAndDescription.css';

function LocationAndDescription(props) {
  if (props.interactionWithTask) {
    return (
      <div className="create-meeting-location-and-description">
        {props.icon}
        <div
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.placeholder}
        >
          {props.value != null ? props.placeholder : props.value}
        </div>
      </div>
    );
  } else {
    return (
      <div className="create-meeting-location-and-description">
        {props.icon}
        <input
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.placeholder}
        ></input>
      </div>
    );
  }
}
export default LocationAndDescription;

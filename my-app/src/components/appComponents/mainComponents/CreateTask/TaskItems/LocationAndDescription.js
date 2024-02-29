import e from "express"

function LocationAndDescription(props){

if(props.interactionWithTask){

} else{
    
}

    return(<div className="create-meeting-location">
    <GeoAlt className="icon-create-meeting" />
    <input
      value={props.addLocation}
      onChange={(e) => props.setAddLocation(e.target.value)}
      placeholder="Add location"
    ></input>
  </div>
  <div className="create-meeting-description">
    <TextLeft className="icon-create-meeting" />
    <input
      value={props.addDescription}
      onChange={(e) => props.setAddDescription(e.target.value)}
      placeholder="Add description"
    ></input>
  </div>)
}
export default LocationAndDescription
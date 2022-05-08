import React from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const Map = ({ modData }) => {
  const [selected, setSelected] = React.useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-7DjIQEANVLSTnoplHbf_ZaJKXKWHHmg">
      {/* Google map view */}
      <GoogleMap
        mapContainerStyle={{
          height: "100vh",
          width: "100%",
        }}
        zoom={10}
        center={{ lng: -74.006, lat: 40.7128 }}
      >
        {
          // Maps through data to only create markers on un-delivered locations
          modData.map((item, indx) => {
            return (
              <Marker
                key={indx}
                position={{
                  lng: item.geometry.coordinates[0],
                  lat: item.geometry.coordinates[1],
                }}
                onClick={() => onSelect(item)}
                onMouseOver={() => onSelect(item)}
              />
            );
          })
        }
        {
          // Info Window which appears when user selects or hovers over a marker
          selected.geometry?.coordinates && (
            <InfoWindow
              position={{
                lng: selected.geometry.coordinates[0],
                lat: selected.geometry.coordinates[1],
              }}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div className="p-1 flex flex-col overflow-auto gap-y-1">
                <p>Name: {selected.properties.name}</p>
                <p>Notes: {selected.properties.notes}</p>
              </div>
            </InfoWindow>
          )
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

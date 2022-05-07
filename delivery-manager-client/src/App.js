import React from "react";
import "./App.css";
import Delivery from "./pages/Delivery";

function App() {
  const [currPosition, setCurrPosition] = React.useState({
    lat: null,
    lon: null,
  });

  /**
   * Options for geolocation
   */
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  /**
   * Function to exectute upon being able to user's location
   */
  const success = (pos) => {
    var crd = pos.coords;
    setCurrPosition({
      lat: crd.latitude,
      lon: crd.longitude,
    });
  };
  /**
   * Function to exectute upon failure to get user's location
   */
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  /**
   * Upon first render, get user's location and set state when successful.
   */
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <Delivery currentPosition={currPosition} />
    </div>
  );
}

export default App;

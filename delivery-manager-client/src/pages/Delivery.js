import React from "react";
import axios from "axios";
import DeliveryList from "../components/DeliveryList";

const Delivery = ({ currentPosition }) => {
  const [data, setData] = React.useState([]);
  const [modData, setModData] = React.useState([]);

  /**
   * API call to get data and set data state
   */
  const getData = async () => {
    await axios
      .get("/deliveries")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /**
   * Calculating distance using lats and lons
   * Source: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
   */
  const distance = (lat1, lon1, lat2, lon2) => {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  };

  /**
   * get data upon first render
   */
  React.useEffect(() => {
    getData();
  }, []);
  /**
   * Append distance and sort modData when current position and/or data is changed
   */
  React.useEffect(() => {
    let newData = data;
    newData.forEach((item) => {
      if (currentPosition.lat) {
        item["distance"] = distance(
          item.geometry.coordinates[0],
          item.geometry.coordinates[1],
          currentPosition.lat,
          currentPosition.lon
        );
      } else {
        item["distance"] = 0;
      }
    });
    // sorting data by distance
    newData.sort((a, b) => (a.distance > b.distance ? 1 : -1));
    setModData(newData);
  }, [currentPosition, data]);

  return (
    <div className="sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
      <DeliveryList modData={modData} setData={setData} />
    </div>
  );
};

export default Delivery;

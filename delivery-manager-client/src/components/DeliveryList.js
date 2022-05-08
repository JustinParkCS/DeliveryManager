import React from "react";
import DeliveryCard from "./DeliveryCard";
import Map from "./Map";

/**
 * Creates a list view of the Data passed into prop
 */
const DeliveryList = ({ modData, setData }) => {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <div className="flex flex-col">
      {/* Map view */}
      <div className="mt-4 mb-10">
        <button
          className="border px-3 py-1 rounded-md bg-green-600 text-white"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? "Close Map" : "Show Map"}
        </button>
        <div className={showMap ? "" : "hidden"}>
          <Map modData={modData} />
        </div>
      </div>

      {/* List view */}
      <ul className="space-y-3">
        {/* if data is available */}
        {modData.length > 0 ? (
          // iterate through data
          modData.map((dataItem, indx) => (
            <li
              key={indx}
              className="border overflow-hidden p-4 sm:px-6 sm:rounded-md"
            >
              <DeliveryCard cardData={dataItem} setData={setData} />
            </li>
          ))
        ) : (
          // If no data available
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default DeliveryList;

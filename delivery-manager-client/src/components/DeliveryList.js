import React from "react";
import DeliveryCard from "./DeliveryCard";

/**
 * Creates a list view of the Data passed into prop
 */
const DeliveryList = ({ modData, setData }) => {
  return (
    <div className="">
      <ul className="space-y-3">
        {/* if data is available */}
        {modData.length > 0 ? (
          // iterate through data
          modData.map(
            (dataItem, indx) =>
              // if not delivered yet create list item
              !dataItem.properties.delivered && (
                <li
                  key={indx}
                  className="border overflow-hidden p-4 sm:px-6 sm:rounded-md"
                >
                  <DeliveryCard cardData={dataItem} setData={setData} />
                </li>
              )
          )
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

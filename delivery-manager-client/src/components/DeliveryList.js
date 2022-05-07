import React from "react";
import DeliveryCard from "./DeliveryCard";

const DeliveryList = ({ data }) => {
  return (
    <ul className="space-y-3">
      {data.length > 0 ? (
        data.map((dataItem, indx) => (
          <li
            key={indx}
            className="border overflow-hidden p-4 sm:px-6 sm:rounded-md"
          >
            <DeliveryCard cardData={dataItem} />
          </li>
        ))
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </ul>
  );
};

export default DeliveryList;

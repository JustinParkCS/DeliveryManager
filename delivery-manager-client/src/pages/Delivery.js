import React from "react";
import DeliveryList from "../components/DeliveryList";
import { deliveryData } from "../deliveries";

const Delivery = () => {
  return (
    <div>
      <DeliveryList data={deliveryData.features} />
    </div>
  );
};

export default Delivery;

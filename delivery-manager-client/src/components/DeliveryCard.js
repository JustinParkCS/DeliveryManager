import React from "react";
//{cardData.properties.name}
const DeliveryCard = ({ cardData }) => {
  const handleEdit = () => {
    console.log(`Edit button pressed for id: ${cardData.properties.id}.`);
  };

  const handleComplete = () => {
    console.log(`Complete button pressed for id:${cardData.properties.id}.`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      {/* Top row */}
      <div className="flex flex-row justify-between gap-x-4">
        {/* left side */}
        <div>
          <p>{cardData.properties.name}</p>
        </div>
        {/* right side */}
        <div className="flex gap-x-6">
          <button
            className="border px-3 py-1 rounded-md bg-blue-600 text-white"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="border px-3 py-1 rounded-md bg-green-600 text-white"
            onClick={handleComplete}
          >
            Complete
          </button>
        </div>
      </div>
      {/* Bottom row */}
      <div className="flex flex-row justify-between gap-x-4">
        {/* left side */}
        <div className="w-3/5 overflow-x-auto">
          <p className="whitespace-nowrap">{cardData.properties.notes}</p>
        </div>
        {/* right side */}
        <div>
          <p>Distance: %DISTANCE% miles</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;

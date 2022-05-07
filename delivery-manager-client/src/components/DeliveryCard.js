import React from "react";
import axios from "axios";

/**
 * Each card item within the list is made using this component.
 */
const DeliveryCard = ({ cardData, setData }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [input, setInput] = React.useState(cardData.properties.notes);
  const handleEdit = () => {
    setShowInput(!showInput);
  };

  /**
   * Makes API call to change delivered status value
   */
  const handleComplete = async () => {
    await axios
      .put(`/deliveries/${cardData.properties.id}`, {
        delivered: true,
      })
      .then((res) => {
        setData(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /**
   * Makes API call to change notes value
   */
  const handleInputSubmit = async () => {
    await axios
      .put(`/deliveries/${cardData.properties.id}`, {
        notes: input,
      })
      .then((res) => {
        setShowInput(!showInput);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {/* Top row */}
      <div className="flex flex-row justify-between gap-x-4">
        {/* left side */}
        <div>
          <p className="font-bold text-xl">{cardData.properties.name}</p>
        </div>
        {/* right side */}
        <div className="flex gap-x-6">
          <button
            className="border px-3 py-1 rounded-md bg-blue-600 text-white"
            onClick={handleEdit}
          >
            Edit
          </button>
          {/* If the current item is delivered, show 'completed', else show 'complete' button */}
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
          {showInput ? (
            <div>
              <textarea
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="w-full border p-1"
              />
              <button
                className="border px-3 py-1 rounded-md bg-green-600 text-white"
                onClick={handleInputSubmit}
              >
                Modify Note
              </button>
            </div>
          ) : (
            <p className="whitespace-nowrap">{input}</p>
          )}
        </div>
        {/* right side */}
        <div>
          <p>Distance: {cardData.distance?.toFixed(2)} km</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;

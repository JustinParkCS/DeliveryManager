import React from "react";

const DeliveryCard = ({ cardData }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [input, setInput] = React.useState(cardData.properties.notes);
  const handleEdit = () => {
    console.log(`Edit button pressed for id: ${cardData.properties.id}.`);
    setShowInput(!showInput);
  };

  const handleComplete = () => {
    console.log(`Complete button pressed for id: ${cardData.properties.id}.`);
  };

  const handleInputSubmit = () => {
    console.log(`Submit button pressed for id: ${cardData.properties.id}.`);
    console.log(input);
    setShowInput(!showInput);
  };

  return (
    <div className="flex flex-col gap-y-2">
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
          <p>Distance: %DISTANCE% miles</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;

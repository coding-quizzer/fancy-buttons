import React, { useState } from "react";

const AngryButton = function() {
  const [anger, setAnger] = useState();
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}
      <span>Don't click me too much! </span>
      {/*When the threshold is reached */}
      <span>Rawr!</span>
    </button>
  );
};

export default AngryButton;
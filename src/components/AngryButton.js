import React from "react";

const AngryButton = function() {
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}
      <span>Don't click me too much! </span>
      {/*When the threshold is reached */}
      <span>Rawr!</span>
    </button>
  )
}
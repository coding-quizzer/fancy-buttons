import React from "react";

const LightSwitchButton = function() {
  return (
    <button className="LightSwitchButton">
      {/* When the state is on */}
      <span><i>💡</i></span>
      {/* When the state is off */}
      <span><i>💡</i></span>
    </button>
  );
};

export default LightSwitchButton;

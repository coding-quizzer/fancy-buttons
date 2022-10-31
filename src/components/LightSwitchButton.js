import React, { useState } from "react";

const LightSwitchButton = function() {
  const [light, setLight] = useState('off');
  const handleClick = () => {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on")
    }
  };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {/* When the state is on */}
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {/* When the state is off */}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
};

export default LightSwitchButton;

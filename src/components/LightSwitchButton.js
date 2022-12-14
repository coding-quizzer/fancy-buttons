import React from "react";

const LightSwitchButton = function(props) {
  const { light, switchLight } = props
  return (
    <button className="LightSwitchButton" onClick={switchLight}>
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
};

export default LightSwitchButton;

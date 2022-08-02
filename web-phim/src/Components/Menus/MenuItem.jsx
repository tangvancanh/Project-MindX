import React from "react";
import { randomColor } from "../../utils";

const MenuItem = (props) => {
  const { name, Icon } = props;
  return (
    <div>
      <div className="subMenu">
        <Icon className="icon" style={{ color: randomColor(1) }} />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default MenuItem;

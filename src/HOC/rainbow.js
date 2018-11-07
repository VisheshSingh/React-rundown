import React from "react";

const rainbow = WrappedComponent => {
  const colors = ["red", "green", "teal", "purple", "pink", "brown"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default rainbow;

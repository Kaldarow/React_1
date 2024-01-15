import React from "react";

const Boxes = ({ st }) => {
  return (
    <div>
        {st.map((elem, index) => (
          <div
            key={index}
            style={{
              width: elem.width,
              height: elem.height,
              backgroundColor: elem.backgroundColor,
            }}
          ></div>
        ))}
    </div>
  );
};

export default Boxes;

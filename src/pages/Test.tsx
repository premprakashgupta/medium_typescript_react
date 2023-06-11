import React from "react";
import Highlight from "react-highlight";

type Props = {};

const Test = (props: Props) => {
  return (
    <div className="h-screen">
      <Highlight className="css">
        {".btn{display:block;\n .btn{display:block;}"}
      </Highlight>
    </div>
  );
};

export default Test;

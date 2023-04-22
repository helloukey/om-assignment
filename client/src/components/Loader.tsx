import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="my-8 w-full flex justify-center">
      <button className="btn btn-square loading"></button>
    </div>
  );
};

export default Loader;

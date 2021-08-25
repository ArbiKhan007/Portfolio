import React from "react";

function Page(props) {
  return (
    <>
      <h3
        style={{
          color: "#fff",
          margin: "1rem 0",
          fontFamily: "Urbanist, sans-serif",
        }}
        className="display-4"
      >
        {props.title}
      </h3>
      {props.children}
    </>
  );
}

export default Page;

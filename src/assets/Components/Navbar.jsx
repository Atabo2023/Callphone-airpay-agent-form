import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "0 7%",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        {/* <img src={logo_black} alt="" className="logo" /> */}
        {/* VICTOR.CV */}
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            height: "3rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <li>Products</li>
          <li>Company</li>
          <li>Resources</li>
          <li>blog</li>
          <button
            style={{
              backgroundColor: " #4834d4",
              color: "#fff",
              border: "none",
              borderRadius: "0.2rem",
              width: "5%",
              height: "1.5rem",
              position: "absolute",
              right: "13%",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

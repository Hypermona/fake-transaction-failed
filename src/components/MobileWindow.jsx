import React from "react";
import { grey } from "@mui/material/colors";
import Backdrop from "@mui/material/Backdrop";

const style = {};

function MobileWindow({ children }) {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <div
        style={{
          width: "min(100vw,450px)",
          margin: "auto",
          zIndex: 999,
          background: "rgb(245, 245, 245)",
          borderRadius: "10px",
          border: `10px solid ${grey[800]}`,
        }}
      >
        {children}
      </div>
      <div
        style={{
          width: "150px",
          height: "30px",
          borderRadius: "0 0 10px 10px",
          position: "absolute",
          background: grey[800],
          right: "44vw",
          top: 0,
        }}
      ></div>
    </Backdrop>
  );
}

export default MobileWindow;

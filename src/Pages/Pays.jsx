import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { setPay } from "../store/user/action";
import { useDispatch, useSelector } from "react-redux";
import pays from "../Constants/pays";
import { grey, blue } from "@mui/material/colors";

const PayCard = ({ pay }) => {
  const { pay: _pay } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: 0,
        padding: 1,
        borderRadius: 5,
        background: pay.name === _pay ? blue[500] : "inherit",
        filter: pay.available ? "grayscale(0%)" : "grayscale(100%)",
        opacity: pay.available ? 1 : 0.5,
      }}
    >
      <Card
        sx={{ maxWidth: 375, margin: 2, cursor: "pointer" }}
        onClick={() => dispatch(setPay(pay.name))}
      >
        {pay.available ? null : (
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "min(100vw,375px)",
              height: "250px",
            }}
          >
            <Button startIcon={<LockIcon />} variant="contained" sx={{ borderRadius: 18 }}>
              Under construction
            </Button>
          </div>
        )}
        <CardHeader title={<Typography align="center">{pay.title}</Typography>} />
        <CardMedia component="img" height="194" image={pay.logo} alt="Paella dish" />
      </Card>
    </div>
  );
};

export default function Pays() {
  return (
    <div>
      {pays.map((pay) => (
        <PayCard pay={pay} />
      ))}
    </div>
  );
}

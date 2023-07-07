import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";
import checkMobile from "../../Constants/checkMobile";
import { Typography } from "@mui/material";
import { useEffect } from "react";

function Transaction() {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  const error = useSelector((state) => state.error);
  const { photo: uPhoto, firstName } = useSelector((state) => state.user);
  const receivers = useSelector((state) => state.receivers);

  const receiver = receivers.filter((r) => r.upi === state?.upi)[0];
  console.log(receiver?.amount);
  return (
    <div
      style={{
        background: "#1b73ea",
        width: "min(100vw,450px)",
        height: document.fullscreen || !checkMobile() ? "100vh" : `93vh`,
        // minHeight: "-webkit-fill-available",
      }}
    >
      <Stack alignItems={"center"} justifyContent="center" sx={{ height: "60vh" }}>
        <Stack direction={"row"} justifyContent="center">
          <Avatar
            sx={{ width: 56, height: 56, border: "2px solid white" }}
            alt={firstName}
            src={`${uPhoto || "c//fake.png"}`}
          />
          <ArrowForwardIcon sx={{ color: "white", margin: "15px 10px" }} />
          <Avatar
            sx={{ width: 56, height: 56, border: "2px solid white" }}
            alt={receiver?.fullName}
            src={`${receiver?.photo || "c//fake.png"}`}
          />
        </Stack>
        <Typography sx={{ color: "white", margin: "15px auto 0 auto" }} variant="body2">
          Paying {receiver?.fullName}
        </Typography>
        <Typography sx={{ color: "white" }} variant="body2">
          {`(${state?.upi})`}
        </Typography>

        <p
          style={{
            fontSize: "5rem",
            margin: "0 30px 0 0",
            padding: 0,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CurrencyRupeeIcon />
          {new Intl.NumberFormat("en-IN").format(Number.parseInt(receiver?.amount))}
        </p>
        {receiver?.note?.length > 0 && (
          <p
            style={{
              fontSize: "1rem",
              margin: "0 20px",
              padding: "20px 30px",
              color: "white",
              background: "rgb(24, 103, 212)",

              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            {receiver?.note}
          </p>
        )}
      </Stack>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          margin: "0 10px 0 10px",
          background: "white",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <Error {...error} />
      </div>
    </div>
  );
}

export default Transaction;

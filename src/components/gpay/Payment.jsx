import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import "./payment.css";
import PrevNextButton from "../PrevNextButton";
import { setPayment } from "../../store/receivers/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  const receivers = useSelector((state) => state.receivers);
  console.log(state, receivers);
  const receiver = receivers?.filter((r) => r.upi === state?.upi)[0];
  // const upi = "mohans8050@okaxis";
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(setPayment(state?.upi, data.amount, data.note));
  const { register, handleSubmit, watch } = useForm();
  return (
    <Stack
      alignItems={"center"}
      direction={"column"}
      sx={{
        width: "min(100vw,400px)",
        height: "100vh",
        paddingTop: 5,
        background: "rgb(245, 245, 245)",
        textAlign: "center",
      }}
    >
      <Avatar
        alt={receiver?.fullName}
        src={`${receiver?.photo || "c//fake.png"}`}
        sx={{ bgcolor: "purple", width: 64, height: 64, margin: "5px" }}
      />
      <Typography sx={{ fontWeight: 500 }} color="text.primary">
        Paying {receiver?.fullName}
      </Typography>
      <Typography>+91 {receiver?.mobile}</Typography>
      <Typography variant="body2">
        Banking name: <span style={{ textTransform: "uppercase" }}>{receiver?.fullName}</span>{" "}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Stack direction={"row"} justifyContent="center">
          <CurrencyRupeeIcon sx={{ marginTop: "20px" }} />

          <input
            type="number"
            className="amount"
            placeholder="0"
            autoFocus
            step="0.01"
            {...register("amount")}
            style={{ width: `${watch("amount")?.length + 1}ch` }}
          />
        </Stack>
        <input
          type="text"
          className="note"
          placeholder="Add a note"
          {...register("note")}
          style={{ width: `${watch("note")?.length + 10}ch` }}
        />
        <button type="submit" id="make_payment_form" hidden></button>
        <div style={{ position: "sticky", bottom: 30, marginTop: "30vh" }}>
          <PrevNextButton
            id="make_payment_form"
            prev={{ to: `/errors`, text: "edit", state: { upi: state?.upi } }}
            next={{ to: `/transaction/`, text: "pay", state: { upi: state?.upi } }}
          />
        </div>
      </form>
    </Stack>
  );
}

export default Payment;

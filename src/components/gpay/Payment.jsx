import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import "./payment.css";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { setPayment } from "../../store/receivers/action";
import { useDispatch, useSelector } from "react-redux";

function Payment() {
  const upi = "mohans8050@okaxis";
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(setPayment(upi, data.amount, data.note));
  const { register, handleSubmit, watch } = useForm();
  return (
    <Stack
      alignItems={"center"}
      direction={"column"}
      sx={{
        width: "min(100vw,450px)",
        height: "100vh",
        paddingTop: 5,
        background: "rgb(245, 245, 245)",
        textAlign: "center",
      }}
    >
      <Avatar alt="ks" src="hhi" sx={{ bgcolor: "purple", width: 64, height: 64, margin: "5px" }} />
      <Typography sx={{ fontWeight: 500 }} color="text.primary">
        Paying Kavya Naik
      </Typography>
      <Typography>+91 973194300</Typography>
      <Typography variant="body2">
        Banking name: <span style={{ textTransform: "uppercase" }}>Kavya naik</span>{" "}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div style={{ position: "absolute", bottom: 10, right: 10, margin: 10 }}>
          <Button
            size="large"
            type="submit"
            variant="contained"
            sx={{ borderRadius: 18 }}
            endIcon={<ArrowForwardIosIcon />}
          >
            pay
          </Button>
        </div>
        <div style={{ position: "absolute", bottom: 10, left: 10, margin: 10 }}>
          <Button
            size="large"
            variant="outlined"
            sx={{ borderRadius: 18 }}
            startIcon={<ArrowBackIosNewIcon />}
          >
            edit
          </Button>
        </div>
      </form>
    </Stack>
  );
}

export default Payment;

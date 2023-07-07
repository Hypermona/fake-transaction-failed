import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReceiver } from "../store/receivers/action";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PrevNextButton from "../components/PrevNextButton";
import Compressor from "compressorjs";
import receiverSchema from "../Constants/schema/receiver";
import { joiResolver } from "@hookform/resolvers/joi";

// fullName
// mobile no
// upi id
// photo
export default function ReceiverDetails({ upi_id }) {
  const [image, setImage] = useState(null);
  const receivers = useSelector((state) => state.receivers);
  console.log(receivers);
  const receiver = receivers?.filter((receiv) => receiv.upi === upi_id)[0];
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(receiverSchema),
    defaultValues: {
      fullName: receiver?.fullName || "",
      mobile: receiver?.mobile || "",
      upi: receiver?.upi || "",
      photo: receiver?.photo || "",
    },
  });

  // Submit your data into Redux store
  const onSubmit = (data) => {
    if (typeof data.photo !== "string" && data.photo) {
      new Compressor(data.photo, {
        quality: 0.1,
        success(result) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result.toString());
            data = { ...data, photo: reader.result.toString() };
            dispatch(addReceiver(data));
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.log(err.message);
        },
      });
    } else {
      dispatch(addReceiver(data));
    }
  };
  console.log("hi");
  //watching profile photo changes
  const photoPrew = watch("photo");
  useEffect(() => {
    if (typeof photoPrew !== "string" && photoPrew) {
      setImage(URL.createObjectURL(photoPrew));
    }
    return () => URL.revokeObjectURL(photoPrew);
  }, [photoPrew]);
  //end of watching

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant={"button"} sx={{ margin: "10px" }}>
          Recipient Details
        </Typography>
        <label htmlFor="photo-btn">
          {photoPrew || receiver?.photo ? (
            <Avatar
              alt={receiver?.fullName}
              src={image || receiver?.photo}
              sx={{ width: 150, height: 150, margin: "20px auto", opacity: 0.8 }}
            />
          ) : (
            <Avatar alt="" sx={{ width: 150, height: 150, margin: "20px auto" }} />
          )}
          <AddAPhotoIcon
            fontSize="large"
            style={{ position: "absolute", marginTop: "-110px", marginLeft: "-20px" }}
          />
        </label>
        <Controller
          name="photo"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              onChange={(e) => onChange(e.target.files[0])}
              hidden
              id="photo-btn"
              type="file"
              accept="image/*"
            />
          )}
        />

        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ margin: "0 10px 10px 10px" }}
              label="Full Name"
              error={errors.fullName ? true : false}
              helperText={errors.fullName?.message}
            />
          )}
        />

        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ margin: "0 10px 10px 10px" }}
              label="Mobile"
              error={errors.mobile ? true : false}
              helperText={
                errors.mobile ? "Please enter valid mobile number without country code" : ""
              }
            />
          )}
        />
        <Controller
          name="upi"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ margin: "0 10px 10px 10px" }}
              label="UPI id"
              error={errors.upi ? true : false}
              helperText={errors.upi ? "Please enter a valid UPI id eg: 'example@okaxis'" : ""}
            />
          )}
        />

        <br />
        <input type={"submit"} id={"receiver-details-form"} hidden />
        <PrevNextButton
          id={"receiver-details-form"}
          disable={Boolean(Object.keys(errors).length)}
          prev={{ to: `/receivers`, text: "back", state: {} }}
          next={{ to: `/pays`, text: "Save & Next", state: { upi: watch("upi") } }}
        />
      </Box>
    </form>
  );
}

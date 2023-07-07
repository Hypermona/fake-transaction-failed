import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/user/action";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useLocation } from "react-router-dom";
import PrevNextButton from "../components/PrevNextButton";
import Compressor from "compressorjs";
import userSchema from "../Constants/schema/user";
import { joiResolver } from "@hookform/resolvers/joi";

// first name
// last name
// mobile no
// upi id
// photo
export default function UserDetails() {
  const location = useLocation();
  const start = location?.state || false;
  const [image, setImage] = useState(null);
  const { firstName, lastName, mobile, upi, photo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(userSchema),
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      upi: upi,
      photo: photo,
    },
  });
  console.log("errors", Object.keys(errors).length);
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
            dispatch(addUser(data));
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.log(err.message);
        },
      });
    } else {
      dispatch(addUser(data));
    }
  };

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
          Enter Your Details
        </Typography>
        <label htmlFor="photo-btn">
          {photoPrew || photo ? (
            <Avatar
              alt={firstName}
              src={image || photo}
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
              //   {...field}
              onChange={(e) => onChange(e.target.files[0])}
              hidden
              id="photo-btn"
              type="file"
              accept="image/*"
            />
          )}
        />

        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ margin: "0 10px 10px 10px" }}
              label="First Name"
              error={errors.firstName ? true : false}
              helperText={errors.firstName?.message}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ margin: "0 10px 10px 10px" }}
              label="Last Name"
              error={errors.lastName ? true : false}
              helperText={errors.lastName?.message}
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
        {start ? (
          <>
            <button type="submit" id="user-details-form" hidden></button>
            <PrevNextButton
              id={"user-details-form"}
              disable={Boolean(Object.keys(errors).length)}
              prev={{ to: `/`, text: "Home", state: {} }}
              next={{ to: `/receivers`, text: "Next", state: {} }}
            />
          </>
        ) : (
          <Button
            type="submit"
            disabled={Boolean(Object.keys(errors).length)}
            variant="contained"
            sx={{ margin: "0 10px 10px 10px" }}
          >
            Submit
          </Button>
        )}
      </Box>
    </form>
  );
}

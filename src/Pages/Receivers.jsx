import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Item = ({ fullName, mobile, upi, photo }) => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton>
            <DeleteForeverRounded sx={{ color: red[900] }} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={fullName} src={photo || "c//fake.png"} />
        </ListItemAvatar>
        <ListItemText
          primary={fullName}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {upi}
              </Typography>
              {" +91"}
              {mobile}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default function Receivers() {
  const receivers = useSelector((state) => state.receivers);
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between" sx={{ padding: "10px" }}>
        <div>
          <Typography variant="h6">Your Paying to</Typography>
          <Typography variant="caption">Select one to continue</Typography>
        </div>
        <Button startIcon={<ControlPointIcon />} variant={"contained"} size="small">
          Add New
        </Button>
      </Stack>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {receivers?.map((r) => (
          <Item fullName={r.fullName} mobile={r.mobile} upi={r.upi} photo={r.photo} />
        ))}
      </List>
      <Typography align="center" color={"GrayText"}>
        Add new recipient by clicking ADD NEW button
      </Typography>
    </>
  );
}

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
import { Link } from "react-router-dom";
import { removeReceiver } from "../store/receivers/action";
import { useDispatch } from "react-redux";

const Item = ({ fullName, mobile, upi, photo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={<Button onClick={() => dispatch(removeReceiver(upi))}>Delete</Button>}
      >
        <Link to={"/pays"} state={{ upi }} style={{ textDecoration: "none" }}>
          <ListItemAvatar>
            <Avatar alt={fullName} src={`${photo || "c//fake.png"}`} />
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
                <Typography color="text.secondary" component="span" sx={{ display: "block" }}>
                  {" +91 "}
                  {mobile}
                </Typography>
              </>
            }
          />
        </Link>
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
        <Link to="new" style={{ textDecoration: "none" }}>
          <Button startIcon={<ControlPointIcon />} variant={"contained"}>
            Add New
          </Button>
        </Link>
      </Stack>
      <Divider />
      {receivers?.length > 0 ? (
        <List
          sx={{
            width: "min(100vw,450px)",
            bgcolor: "background.paper",
            cursor: "pointer",
          }}
        >
          {receivers?.map((r, i) => (
            <Item
              fullName={r.fullName}
              mobile={r.mobile}
              upi={r.upi}
              photo={r.photo}
              key={r.upi + i}
            />
          ))}
        </List>
      ) : (
        <Stack justifyContent={"center"} height={"80vh"}>
          <Typography align="center" color={"GrayText"}>
            Add new recipient by clicking ADD NEW button
          </Typography>
        </Stack>
      )}
    </>
  );
}
{
  /* <IconButton>
  <DeleteForeverRounded sx={{ color: red[900] }} />
</IconButton>; */
}

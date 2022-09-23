import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import MessageIcon from "@mui/icons-material/Message";
import Stack from "@mui/material/Stack";
import { grey, blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { addError } from "../../store/error";

export default function Error({ id, title, signal, subtitle, description, buttons, elevation }) {
  const { error_id } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: 0,
        padding: 1,
        borderRadius: 5,
        background: error_id === id ? blue[500] : "inherit",
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 500,
          margin: 2,
          cursor: "pointer",
        }}
        elevation={elevation}
        onClick={() => dispatch(addError(id))}
      >
        <CardContent>
          <Stack direction="row">
            <ErrorIcon color={signal} fontSize="small" sx={{ marginTop: 0.3 }} />
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "600", marginLeft: 1 }} gutterBottom>
              {title}
            </Typography>
          </Stack>

          <Typography variant="subtitle1" sx={{ fontWeight: 500 }} color="text.secondary">
            {subtitle}
          </Typography>
          <Stack direction="row">
            {description && (
              <MessageIcon sx={{ color: grey[700], marginTop: 0.8 }} fontSize="samll" />
            )}
            <Typography variant="subtitle2" color="text.secondary" sx={{ marginLeft: 1 }}>
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          {buttons.map((button, i) => (
            <Button key={i + button} variant="outlined" sx={{ borderRadius: 18 }}>
              {button}
            </Button>
          ))}
        </CardActions>
      </Card>
    </div>
  );
}

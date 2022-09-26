import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function PrevNextButton({ prev, next, id }) {
  return (
    <Stack direction="row" justifyContent={"space-around"} width={"min(100vw,450px)"}>
      <Link to={prev.to} state={prev.state} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{ borderRadius: 18, background: "gray" }}
          startIcon={<ArrowBackIosNewIcon />}
        >
          {prev.text}
        </Button>
      </Link>
      <Link to={next.to} state={next.state} style={{ textDecoration: "none" }}>
        <Button
          onClick={() => {
            document.getElementById(id)?.click();
          }}
          type="submit"
          variant="contained"
          sx={{ borderRadius: 18 }}
          endIcon={<ArrowForwardIosIcon />}
        >
          {next.text}
        </Button>
      </Link>
    </Stack>
  );
}

export default PrevNextButton;

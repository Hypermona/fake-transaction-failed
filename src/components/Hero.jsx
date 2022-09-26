import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Stack width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Link to="user" state={{ start: true }} style={{ textDecoration: "none" }}>
        <Button variant="contained">Start</Button>
      </Link>
    </Stack>
  );
}

export default Hero;

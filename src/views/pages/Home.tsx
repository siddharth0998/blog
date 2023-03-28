import { Box } from "@mui/material";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      {/* <Box sx={{background: 'hsl(210deg, 30%, 8%)'}}> */}
        <NavBar />
        <Main />
      {/* </Box> */}
    </>
  );
}

export default Home;

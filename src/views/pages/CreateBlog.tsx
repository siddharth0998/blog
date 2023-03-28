import { Box, TextField } from "@mui/material";
import "./CreateBlog.css"

import NavBar from "../components/NavBar";

function CreateBlog() {
  return (
    <Box>
      <NavBar />
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        sx={{ margin: "100px 0px 0px 0px" }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
         <TextField fullWidth label="email" id="fullWidth" />
        </Box>

        <Box>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="10"
            defaultValue="Default Value"
            margin="normal"
            variant="outlined"
            sx={{ display: "flex", width: "500px", backgroundColor: "white" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CreateBlog;

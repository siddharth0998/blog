import { Box, Button, TextField } from "@mui/material";
import "./CreateBlog.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/store";

function CreateBlog() {
  const [data, setData] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const blogs = useBlogStore((state: any) => state.blogs);
  const createBlog = useBlogStore((state: any) => state.createBlog);
  const setSaveData = useBlogStore((state: any) => state.setSaveData);
  const saveData = useBlogStore((state: any) => state.saveData);

  const handleSubmit = () => {
    createBlog(data.title, data.description);
    if (!saveData) {
      navigate("/");
      setSaveData(saveData);
    }
  };

  return (
    <Box>
      <NavBar />
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        m={"auto"}
        pt={"100px"}
        width={"500px"}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            backgroundColor: "transparent",
          }}
        >
          <TextField
            fullWidth
            label="Title"
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </Box>

        <Box>
          <TextField
            id="outlined-multiline-static"
            label="Descriptipon"
            multiline
            rows="10"
            margin="normal"
            variant="outlined"
            sx={{ display: "flex", width: "500px" }}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} width={1}>
          <Button
            color="error"
            onClick={() => setData({ ...data, title: "", description: "" })}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateBlog;

import { Box, Button, TextField } from "@mui/material";
import "./CreateBlog.css";
import NavBar from "../components/NavBar";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogStore } from "../../store/store";

function CreateBlog() {
  const { id } = useParams();
  const [data, setData] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const selectedBlog = useBlogStore((state: any) => state.selectedBlog);
  const createBlog = useBlogStore((state: any) => state.createBlog);
  const setSaveData = useBlogStore((state: any) => state.setSaveData);
  const saveData = useBlogStore((state: any) => state.saveData);
  const editBlog = useBlogStore((state: any) => state.editBlog);
  const getBlogById = useBlogStore((state: any) => state.getBlogById);
  console.log(selectedBlog);

  const getData = useCallback(() => {
    id !== undefined && getBlogById(id);
    setData({
      ...data,
      title: selectedBlog[0]?.title,
      description: selectedBlog[0]?.description,
    });
    console.log("after refresh", data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const handleSubmit = () => {
    id === undefined
      ? createBlog(data.title, data.description)
      : editBlog(id, data.title, data.description);
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
          <Button onClick={handleSubmit}>
            {id === undefined ? "Submit" : "Update"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateBlog;

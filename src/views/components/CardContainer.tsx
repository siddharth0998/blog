import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/store";

export default function CardContainer() {
  const navigate = useNavigate();
  const blogs = useBlogStore((state: any) => state.blogs);
  const getBlog = useBlogStore((state: any) => state.getBlog);
  const deleteBlog = useBlogStore((state: any) => state.deleteBlog);

  useEffect(() => {
    getBlog();
  }, [getBlog]);

  const handleEdit = (id: string) => {
    navigate(`./createblog/${id}`);
  };
  const handleDelete = (id: any) => {
    deleteBlog(id);
  };
  return (
    <Box>
      {blogs?.map((data: any, index: string) => (
        <Card
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
          id={data._id}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2">{data.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleEdit(data._id)}>
              Edit
            </Button>
            <Button size="small" onClick={() => handleDelete(data._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

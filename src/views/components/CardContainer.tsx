import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  colors,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardContainer() {
  const [backEndData, setBackEndData] = useState({} as any);
  useEffect(() => {
    axios("http://localhost:5000")
      .then((data) => {
        console.log(data);
        setBackEndData(data);
      })
      .catch((err) => console.log(err));
    console.log("backEndData", backEndData);
  }, []);

  return (
    <Box>
      {backEndData?.data?.data?.map((data: any, index: string) => (
        <Card
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
            color:"white"
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2">{data.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

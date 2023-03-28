import { Container } from "@mui/material";
import CardContainer from "./CardContainer";

export default function Main() {
  return (
    <Container
      sx={{
        maxWidth: "1536px",
        minHeight: "100vh",
        "@media(min-width: 1100px)": {
          maxWidth: "1100px",
        },
        "@media(min-width: 1537px)": {
          maxWidth: "1536px",
        },
        paddingTop: '30px'
      }}
    >
      <CardContainer />
    </Container>
  );
}

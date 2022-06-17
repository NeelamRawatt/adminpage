import logo from "./logo.svg";
import "./App.css";
import Admin from "./Admin";
import { Button, Box } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container maxWidth="md">
      <Box>
        <form onSubmit={handleSubmit}>
          <Admin />
        </form>
      </Box>
    </Container>
  );
}

export default App;

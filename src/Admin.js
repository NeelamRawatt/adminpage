import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";

function Admin(props) {
  const [value, setValue] = useState("");
  const handleChange = () => {};

  const stylee = {
    marginBottom: 20,
  };
  return (
    <Container maxWidth="md" style={{ border: "1px solid red" }}>
      <Box width="50%" textAlign="center" mt={5}>
        <TextField style={stylee} label="Title" fullWidth variant="outlined" />
        <TextField
          style={stylee}
          label="Example 1"
          fullWidth
          variant="outlined"
        />
        <TextField
          style={stylee}
          label="Example 2"
          fullWidth
          variant="outlined"
        />
        <TextField
          style={stylee}
          label="Example 3"
          fullWidth
          variant="outlined"
        />

        <TextField
          style={stylee}
          label="Constraints"
          fullWidth
          variant="outlined"
        />

        <TextField
          style={stylee}
          label="Expected Output"
          fullWidth
          variant="outlined"
        />

        <FormControl fullWidth style={stylee}>
          <InputLabel>CATEGORY</InputLabel>
          <Select value={value} onChange={handleChange}>
            <MenuItem>Options1</MenuItem>
            <MenuItem>Options2</MenuItem>
            <MenuItem>Options3</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel>Difficulty Level</InputLabel>
          <Select value={value} onChange={handleChange}>
            <MenuItem>EASY</MenuItem>
            <MenuItem>MEDIUM</MenuItem>
            <MenuItem>HARD</MenuItem>
          </Select>
        </FormControl>

        <Box mt={3} mb={3}>
          <Button variant="contained" type="submit">
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Admin;

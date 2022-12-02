import { Box, Input, Slider, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("purple");
  return (
    <>
      <Typography color="secondary" variant="h4" marginTop={5} marginLeft={100}>
        Box Shadow GUI
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        marginTop={20}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            margin: "50px",
            boxShadow: `${horizontal}px ${vertical}px ${blur}px ${color}`,
          }}
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={horizontal}
            onChange={(e) => setHorizontal(e.target.value)}
            min={-300}
            max={300}
            color="error"
            sx={{
              width: 300,
              marginTop: "50px",
              marginLeft: 40,
            }}
          />
          <Typography marginLeft={40}>Horizontal in "Px"</Typography>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
            min={-300}
            max={300}
            color="error"
            sx={{
              width: 300,
              marginTop: "50px",
              marginLeft: 40,
            }}
          />
          <Typography marginLeft={40}>Vertical in "Px"</Typography>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
            min={0}
            max={300}
            color="error"
            sx={{
              width: 300,
              marginTop: "50px",
              marginLeft: 40,
            }}
          />
          <Typography marginLeft={40}>Blur in "Px"</Typography>
          <Input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            sx={{
              width: 30,
              marginTop: "50px",
              marginLeft: 40,
            }}
          />
          <Typography marginLeft={40}>Colors</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;

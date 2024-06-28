import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOGORAPHY
          </Typography>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/about" color="inherit">
            About
          </Button>
          <Button href="/articles" color="inherit">
            Articles
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

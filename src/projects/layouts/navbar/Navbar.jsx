
import { AppBar, Box, FormControlLabel, Button, IconButton, MenuItem, Switch, Toolbar, Typography,Menu } from "@mui/material";
import { useState } from "react";


export default function Navbar({title,menuIcon,profile}) {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   <> 
      <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {menuIcon&&menuIcon}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {title&&title}
          </Typography>
          {profile&&profile}
        </Toolbar>
      </AppBar>
    </Box>

</>
  );
}
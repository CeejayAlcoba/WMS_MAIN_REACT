import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AppBarStyle from "./__styles__/Style";
import useProfileIcon from "./__hooks__/useProfileIcon";
import { Link } from "react-router-dom";
import { ProfileMenuItemsModel } from "./__models__/ProfileMenuItemsModel";

export default function Navbar({ open, handleDrawerOpen, drawerWidth }) {
  const { anchorEl, handleMenu, handleClose } = useProfileIcon();
  const AppBar = AppBarStyle(open, drawerWidth);
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="d-flex justify-content-between">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Persistent drawer
            </Typography>
            <ProfileIcon
              anchorEl={anchorEl}
              handleMenu={handleMenu}
              handleClose={handleClose}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

const ProfileIcon = ({ handleMenu, handleClose, anchorEl }) => {
  const menuItems = ProfileMenuItemsModel();
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        className="d-flex justify-self-end"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItems menuItems={menuItems} handleClose={handleClose} />
      </Menu>
    </div>
  );
};

const MenuItems = ({ menuItems, handleClose }) => {
  return (
    menuItems &&
    menuItems.map((val, index) => {
      return (
        <Link to={val.path} key={index}>
          <MenuItem onClick={handleClose && handleClose}>{val.name}</MenuItem>
        </Link>
      );
    })
  );
};

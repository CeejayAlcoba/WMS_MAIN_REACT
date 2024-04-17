import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "../navbar";
import Sidebar from "../sidebar/Sidebar";
import { Typography } from "@mui/material";
import MainStyle from "./__styles__/Style";
import usePageLayout from "./__hooks__/usePageLayout";

function PageLayout({ children }) {
  const { open, handleDrawerOpen, handleDrawerClose } = usePageLayout();
  const drawerWidth = 240;
  const Main = MainStyle(drawerWidth);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          drawerWidth={drawerWidth}
        />
        <Sidebar
          open={open}
          handleDrawerClose={handleDrawerClose}
          drawerWidth={drawerWidth}
        />
        <Main open={open}>
          <Typography paragraph>{children}</Typography>
        </Main>
      </Box>
    </>
  );
}

export default PageLayout;

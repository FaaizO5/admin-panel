import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Button } from "@mui/material";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

export const SIDEBAR_WIDTH = 240;

function Sidebar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const navLinks = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Products",
      icon: <InboxIcon />,
      path: "/products",
    },
    {
      text: "Sales",
      icon: <TrendingUpIcon />,
      path: "/sales",
    },
    {
      text: "Customers",
      icon: <PeopleAltIcon />,
      path: "/home",
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Admin Panel
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(link.path)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div
        style={{
          display: "flex",
          marginTop: 350,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Button
          startIcon={<PowerSettingsNewIcon fontSize="small" />}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      // position="fixed"
      component="nav"
      sx={{ width: { sm: SIDEBAR_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: SIDEBAR_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: SIDEBAR_WIDTH,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;

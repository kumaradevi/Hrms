import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;

function Sidebar({ darktheme, toggleTheme }) {
 
  const theme = useTheme();
  const [mode, setMode] = useState(darktheme.dark);

  const handleThemeChange = () => {
    setMode(!mode);
    toggleTheme();
  };

   
  return (
    <Drawer 
      sx={{
        width: drawerWidth,
        width:{xs:"100px"},
        position:"fixed",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "65px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/employees">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
        <ListItem button component={Link} to="/departments">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
        <ListItem button component={Link} to="/leave/request">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Leave Management" />
        </ListItem>
        <ListItem button component={Link} to="/payroll">
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>
        <ListItem button component={Link} to="/performance/review">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Performance" />
        </ListItem>
        <ListItem button component={Link} to="/settings/user">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/help">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help & Support" />
        </ListItem>
        <ListItem>
          <Switch onClick={handleThemeChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            defaultChecked
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;

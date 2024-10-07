import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDataContext } from "../../nonview/core/DataProvider";

const STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 100,
};

export default function CustomAppBar() {
  const data = useDataContext();
  if (!data) return null;
  const { human } = data;
  return (
    <Box sx={{ STYLE }}>
      <AppBar position="static" sx={{ background: "gray" }}>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {human.name}
          </Typography>

          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

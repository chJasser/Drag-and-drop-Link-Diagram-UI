import { Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { styled } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const TopBar = () => {
  return (
    <AppBar position="fixed" open={false}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Drag and drop Link Diagram UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import ModalComponent from "../Modal/Modal";

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
}));
interface ListItemProps {
  text: string;
  index: number;
  icon: React.ReactElement;
}

const generateListItem = ({ text, index, icon }: ListItemProps) => (
  <ListItem key={text} disablePadding sx={{ display: "block" }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: 0 }} />
    </ListItemButton>
  </ListItem>
);

export default function SideBarView() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const listItems: React.ReactNode[] = ["All mail", "Trash", "Spam"].map(
    (text, index) =>
      generateListItem({
        text,
        index,
        icon: index % 2 === 0 ? <InboxIcon /> : <MailIcon />,
      })
  );
  const addItem = generateListItem({
    text: "Add",
    index: -1,
    icon: <AddIcon onClick={handleOpenModal} />,
  });
  listItems.push(addItem);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={false}>
        <Divider />
        <List> {listItems}</List>

        <ModalComponent open={openModal} handleClose={handleCloseModal} />
      </Drawer>
    </Box>
  );
}

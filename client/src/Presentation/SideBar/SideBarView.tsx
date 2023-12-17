import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import ModalComponent from "../Modal/Modal";
import PageForm from "../Page/PageForm/PageForm";
import useSideBarModal from "./SideBarModal";
import PageItem from "../Page/PageItem/PageItem";
import useViewModel from "../Page/PageViewModel";
import { Tooltip } from "@mui/material";

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

export default function SideBarView() {
  const { handleOpenModal, openModal, handleCloseModal } = useSideBarModal();
  const { pages, getPages } = useViewModel();

  React.useEffect(() => {
    getPages();
  }, []);

  React.useEffect(() => {
    console.log("pages in SideBarView:", pages);
  }, [pages]);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={false}>
        <Box mt={7}>
          <Divider />
          <List>
            {pages.map((page, index) => (
              <PageItem
                key={page.title}
                text={page.title}
                index={index}
                icon={page.icon}
              />
            ))}
          </List>
          <Tooltip sx={{ cursor: "pointer" }} title="Create a new page">
            <AddIcon onClick={handleOpenModal} />
          </Tooltip>
        </Box>
        <ModalComponent
          title="Create a new page"
          contnent={PageForm}
          open={openModal}
          handleClose={handleCloseModal}
        />
      </Drawer>
    </Box>
  );
}

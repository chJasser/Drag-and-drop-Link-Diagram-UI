import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import AddIcon from "@mui/icons-material/Add";
import ModalComponent from "../Modal/Modal";
import PageForm from "../Page/PageForm/PageForm";
import useSideBarModal from "./SideBarModal";
import PageItem from "../Page/PageItem/PageItem";
import { Tooltip } from "@mui/material";
import { getPagesAsync } from "../slice/PageSlice";
import { useAppDispatch, useAppSelector } from "../..";


const Drawer = styled(MuiDrawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

export default function SideBarView() {
  const { handleOpenModal, openModal, handleCloseModal } = useSideBarModal();
  const pages = useAppSelector((state) => state.page.pages)

  const dispatch = useAppDispatch()
  React.useEffect(() => {
   
    dispatch(getPagesAsync);
  }, [dispatch]);

  return (
    <Box>
      <Drawer variant="permanent" open={false}>
        <Box textAlign={"center"} p={1} mt={7}>
          <Divider />
          <List>
            {pages&& pages.map((page) => (
              <PageItem key={page.id} page={page} />
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

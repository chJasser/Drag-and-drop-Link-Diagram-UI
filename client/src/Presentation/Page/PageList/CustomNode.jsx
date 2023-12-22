import { Box } from "@mui/material";
import { Handle, Position } from "reactflow";
import PageItem from "../PageItem/PageItem";
import { useState } from "react";
import ModalComponent from "../../Modal/Modal";
import PageForm from "../PageForm/PageForm";
import useViewModel from "../usePageModel";
import { useAppDispatch } from "../../..";
import { selectPage } from "../../slice/PageSlice";
function CustomNode(page) {
  const { onChangeValue } = useViewModel();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    onChangeValue();
    dispatch(selectPage(page.data));
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box onClick={handleOpenModal}>
        <Handle type="target" position={Position.Left} />
        <PageItem page={page.data} />
        <Handle type="source" position={Position.Right} id="a" />
      </Box>
      <ModalComponent
        title="Update Page"
        contnent={PageForm}
        open={openModal}
        handleClose={handleCloseModal}
      />
    </>
  );
}

export default CustomNode;

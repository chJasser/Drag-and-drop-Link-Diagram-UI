import { useState } from "react";
import { useAppDispatch } from "../..";
import { selectPage } from "../slice/PageSlice";

const SideBarModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    dispatch(
      selectPage({
        title: "",
        color: "",
        link: "",
        form: "",
        icon: "",
        description: "",
      })
    );
    setOpenModal(false);
  };
  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default SideBarModal;

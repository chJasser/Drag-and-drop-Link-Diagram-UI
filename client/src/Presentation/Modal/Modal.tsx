import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
interface ModalComponentProps {
  handleClose: () => void;
  open: boolean;
  title: string;
  contnent: React.ComponentType<any>;
}
const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { handleClose, open, contnent: Contnent, title } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Contnent />
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;

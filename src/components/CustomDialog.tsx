import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

interface CustomDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  open,
  closeDialog,
}) => {
  const handleCloseDialog = () => {
    closeDialog();
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  );
};

export default CustomDialog;

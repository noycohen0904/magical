import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

interface CustomReacurrenceDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
}

const CustomReacurrenceDialog: React.FC<CustomReacurrenceDialogProps> = ({
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

export default CustomReacurrenceDialog;

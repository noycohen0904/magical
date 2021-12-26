import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomReacurrenceDialog from "./components/CustomReacurrenceDialog";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDoneDialog = (data: any) => {
    console.log(data);
    setOpenDialog(false);
  };

  return (
    <div className="container">
      <Button onClick={handleOpenDialog}>Click to open Dialog</Button>
      <CustomReacurrenceDialog
        open={openDialog}
        title="Custom Reacurrence"
        closeDialog={handleCloseDialog}
        doneDialog={handleDoneDialog}
        date={new Date()}
      />
    </div>
  );
}

export default App;

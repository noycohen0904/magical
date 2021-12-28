import { Button } from "@mui/material";
import React, { useState } from "react";
import { CustomDialog, Result } from "./components/CustomDialog";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDoneDialog = (data: Result) => {
    console.log(data);
    setOpenDialog(false);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">
        Click to open Dialog
      </Button>
      {openDialog && (
        <CustomDialog
          open={openDialog}
          title="Custom Reacurrence"
          closeDialog={handleCloseDialog}
          doneDialog={handleDoneDialog}
          date={new Date()}
        />
      )}
    </div>
  );
}

export default App;

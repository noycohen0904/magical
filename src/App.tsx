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

  return (
    <div className="container">
      <Button onClick={handleOpenDialog}>Click to open Dialog</Button>
      <CustomReacurrenceDialog
        open={openDialog}
        title="Custom Reacurrence"
        closeDialog={handleCloseDialog}
      />
    </div>
  );
}

export default App;

/**
 * <Action title="Repeat on">
              <EventRepeatIcon />
            </Action>

    <Action title="Repeat every">
              <ReplayIcon/>
            </Action>


            <Action title="Ends">
              <KeyboardTabIcon/>
            </Action>
 * 
 */

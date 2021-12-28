import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Calibri",
    button: { textTransform: "none" },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        root: { maxHeight: "30vh" },
      },
    },
  },
});

export default theme;

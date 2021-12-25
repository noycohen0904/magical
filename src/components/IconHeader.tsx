import { Grid, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface IconHeaderProps {
  title: string;
}

const IconHeader = (props: PropsWithChildren<IconHeaderProps>) => {
  return (
    <>
      <Grid item>{props.children}</Grid>
      <Grid item>
        <Typography>{props.title}</Typography>
      </Grid>
    </>
  );
};

export default IconHeader;

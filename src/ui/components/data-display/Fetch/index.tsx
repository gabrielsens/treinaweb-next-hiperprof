import { Box, CircularProgress, Typography } from "@mui/material";
import { type } from "os";
import { ReactElement } from "react";

interface FetchProps<T> {
  data: T[] | undefined;
  render: (dataFiltered: T[]) => ReactElement;
  message?: string,
  maxLength?: number
}

type FetchComponent = <T>(props: FetchProps<T>) => ReactElement;

const Fetch: FetchComponent = ({ data, render, message, maxLength = null }) => {
  if (data) {
    let dataFilted = data;

    if(maxLength !== null)
      dataFilted = data.slice(0, maxLength);

    if (data.length === 0) {
      return (
        <Typography>
          {message}
        </Typography>
      )
    }

    return render(dataFilted);
  }

  return (
    <Box>
      <CircularProgress />
    </Box>
  )
};

export default Fetch;

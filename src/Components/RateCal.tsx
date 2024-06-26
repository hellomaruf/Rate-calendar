import { Box, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function RateCal() {
  return (
    <div className="my-4 mx-4">
      <Box>
        <Typography variant="h5">Rate Calender</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className=" flex gap-4">
            <DatePicker label="Start Date" />
            <DatePicker label="End Date" />
          </div>
        </LocalizationProvider>
      </Box>
    </div>
  );
}

export default RateCal;

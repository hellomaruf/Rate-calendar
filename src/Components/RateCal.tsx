import { Box, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function RateCal() {
  return (
    <div className="my-4 mx-4 bg-white p-6 rounded-xl">
      <Box>
        <div className=" mb-3">
          <Typography variant="h5">Rate Calender</Typography>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className=" flex items-center gap-4">
            <DatePicker label="Start Date" />
            <h2>--</h2>
            <DatePicker label="End Date" />
          </div>
        </LocalizationProvider>
      </Box>
    </div>
  );
}

export default RateCal;

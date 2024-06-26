import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
function RateCal() {
  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(null);
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(null);
  console.log(startDateValue);

  return (
    <div className="my-4 mx-4 bg-white p-6 rounded-xl">
      <Box>
        <div className=" mb-3">
          <Typography variant="h5">Rate Calender</Typography>
        </div>

        {/* Pick start and end date from here */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex gap-3 items-center">
            <DatePicker
              label="Start Date"
              value={startDateValue}
              onChange={(newValue: Dayjs | null) => setStartDateValue(newValue)}
              // renderInput={(params) => <TextField {...params} />}
            />
            <p>--</p>
            <DatePicker
              label="End Date"
              value={endDateValue}
              onChange={(newValue: Dayjs | null) => setEndDateValue(newValue)}
              // renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
      </Box>
    </div>
  );
}

export default RateCal;

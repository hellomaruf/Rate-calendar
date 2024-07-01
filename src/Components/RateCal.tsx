import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
function RateCal() {
  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(null);
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(null);
  // console.log(startDateValue?.$d);
  interface ApiResponse {
    data: {
      data: {
        inventory_calendar: object;
      };
    };
  }
  const { data: roomData } = useQuery({
    queryKey: ["roomData"],
    queryFn: () => {
      const res: object = axios.get(
        "https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment?start_date=2024-05-01&end_date=2024-05-15"
      );
      const data = res as ApiResponse;
      return data;
    },
  });
  console.log(roomData?.data?.data);
  console.log(roomData?.data?.data[0].inventory_calendar);

  return (
    <div className="bg-gray-100 mx-4 ">
      <div className="bg-white mt  p-6 rounded-xl">
        <Box>
          <div className=" mb-6">
            <Typography variant="h5">Rate Calender</Typography>
          </div>

          {/* Pick start and end date from here */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex gap-3 items-center">
              <DatePicker
                label="Start Date"
                value={startDateValue}
                onChange={(newValue: Dayjs | null) =>
                  setStartDateValue(newValue)
                }
                // renderInput={(params) => <TextField {...params} />}
              />
              <p>--</p>
              <DatePicker
                label="End Date"
                value={endDateValue}
                onChange={(newValue: Dayjs | null) => setEndDateValue(newValue)}
              />
            </div>
          </LocalizationProvider>
        </Box>
      </div>
      {/* Table */}
      <div className="mt-4 bg-white p-6 rounded-xl flex gap-3">
        {/* <TableContainer className="max-w-[300px]" component={Paper}>
          <Table>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Dessert (100g serving)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer > */}
        <div className=" w-[300px]">
          {roomData?.data?.data.map((item: any, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{item?.name}</h2>
              <h4 className="py-3 ">Room Status</h4>
              <hr />
              <h4 className="py-3 ">Rooms Sell</h4>
              <hr />
              <h4 className="py-3">Not booked</h4>
              <hr />
              <h4 className="py-3 ">Standerd Rate</h4>
              <hr />
              <h4 className="py-3">Min, length of stay</h4>
              <hr />
              <h4 className="py-3 ">Min, advance reservation</h4>
              <h4 className="py-3 ">Min, advance reservation</h4>
            </div>
          ))}
        </div>

        {/* <TableContainer className="mt-5" component={Paper}>
          <Table>
              {roomData?.data?.data.map((item, index) => (
            <TableBody>
                <TableRow key={index}>
                  {item?.inventory_calendar.map((item, index) => (
                    <TableCell key={index} className=" text-white">
                      {item?.status ? "Open" : "Close"}
                    </TableCell>
                  ))}
                
                </TableRow>
            </TableBody>
              ))}
          </Table>
        </TableContainer> */}

<div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {roomData?.data?.data.map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {item?.name}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default RateCal;

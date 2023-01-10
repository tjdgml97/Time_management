import {
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import TimeTableRow from "./TimeTableRow";
import { withStyles } from "@mui/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InputModal from "../InputModal/InputModal";
import { useRecoilValue } from "recoil";
import { timeTableState } from "../store/store";
const hourData = Array.from({ length: 11 }, (i, j) => j + 9);
const styles = () => ({
  Table: {
    "& th,td": {
      border: "1px solid rgba(224, 224, 224, 1)",
    },
  },
});

function TimeTable({ classes }) {
  const timeTableData = useRecoilValue(timeTableState);
  const [showModal, setshowModal] = useState(false);
  const [editInfo, seteditInfo] = useState({});
  const handleClose = useCallback(() => {
    setshowModal(false);
    seteditInfo({});
  }, []);

  const Edit = useCallback(
    (day, id) => {
      const { start, end, name, color } = timeTableData[day].find(
        (lectureInfo) => lectureInfo.id === id
      );
      seteditInfo({
        dayData: day,
        startTimeData: start,
        endTimeData: end,
        lectureNameData: name,
        colorData: color,
        idNum: id,
      });
      setshowModal(true);
    },
    [timeTableData]
  );
  return (
    <>
      <TableContainer
        sx={{
          width: "60%",
          minWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      >
       <h2>Weekly plan</h2>
        <Button
          variant="contain"
          sx={{ float: "right" }}
          endIcon={<AddBoxIcon />}
          onClick={() => setshowModal(true)}
        >
          고정일정추가
        </Button>
        <Table className={classes.Table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>
                Time
              </TableCell>
              <TableCell align="center" width={200}>
                Mon
              </TableCell>
              <TableCell align="center" width={200}>
                Tue
              </TableCell>
              <TableCell align="center" width={200}>
                Wed
              </TableCell>
              <TableCell align="center" width={200}>
                Thu
              </TableCell>
              <TableCell align="center" width={200}>
                Fri
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell align="center">{`${time}:00 - ${
                  time + 1
                }:00`}</TableCell>
                <TimeTableRow timeNum={time} Edit={Edit} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <InputModal
        showModal={showModal}
        handleClose={handleClose}
        {...editInfo}
      />
    </>
  );
}

export default withStyles(styles)(TimeTable);

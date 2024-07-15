import React from "react";
import "../css/Tank.css";
import "../css/DayStart.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { get } from "react-hook-form";
export default function Tankd({ dbpath1, setDate }) {



  const [amsToday, setamsToday] = useState([]);
  const [bspeedToday, setbspeedToday] = useState([]);
  const [hsdToday, sethsdToday] = useState([]);

  const [dateStart,setDateStart] = useState([]);

  const [lastDayData, setLastDayData] = useState([]);

  const [conditionType, setConditionType] = useState("");

  const [amsLast, setamsLast] = useState([]);
  const [bspeedLast, setbspeedLast] = useState("");
  const [hsdLast, sethsdLast] = useState("");

  const [amsDifference, setamsDifference] = useState("0");
  const [bspeedDifference, setbspeedDifference] = useState("0");
  const [hsdDifference, sethsdDifference] = useState("0");

  const [machineOpen, setMachineOpen] = useState(false);
  const [machineLayout, setMachineLayout] = useState([]);
  const [editMachineLayout, setEditMachineLayout] = useState({});


  const fetchMs = () => {
    axios
      .get("http://localhost:4000/ms")
      .then((res) => {
        console.log("res", res.data[0].reading);
        setamsToday(res.data[0].reading);
        setamsLast(res.data[1].reading)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
console.log("typeof amsToday",typeof amsLast)
  const fetchSpeed = () => {
    axios
      .get("http://localhost:4000/speed")
      .then((res) => {
        console.log("res speed",res.data[0]);
        setbspeedToday(res.data[0].reading);
        setbspeedLast(res.data[1].reading)

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchHsd = () => {
    axios
      .get("http://localhost:4000/hsd")
      .then((res) => {
        console.log("res.data", res.data[0]);
        sethsdToday(res.data[0].reading);
        setDateStart(res.data[0].date);
        sethsdLast(res.data[1].reading)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log("dateStart",dateStart)

  
  useEffect(() => {
    fetchMs();
    fetchSpeed();
    fetchHsd()
  }, []);


 
  useEffect(() => {
    try {
    
    } catch {
      console.log("");
    }
  }, []);



  function getTodaysDate() {
    const today = new Date();
  //  console.log(today)
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${day}-${month}-${year}`;
}
getTodaysDate();


// Utility function to format the date
function formatDate(dateString) {
  const date = new Date(dateString);

  const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[date.getMonth()]; // getMonth() returns a zero-based index
  const day = date.getDate();

  return `${month} ${day}`;
}

//formatDate("Mon Jul 14 2024 14:38:34 GMT+0530 (India Standard Time)");
//console.log(formatDate("Mon Jul 14 2024 14:38:34 GMT+0530 (India Standard Time)"));
//setDateStart(formatDate("Mon Jul 14 2024 14:38:34 GMT+0530 (India Standard Time"));
//console.log(dateFinalStart)
//let dateFinalStart = (formatDate(dateStart))









  return (
    <>
      <center>
        <b>
          <div className="tankMainDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded bigFontWeight">
            <h2 className="mt-3 text-center"> Day Start</h2>
            <br></br>
            <div style={{ display: "flex" }}>
              <h5 style={{ marginLeft: "36%" }} className="mt-2">
                <span style={{ fontSize: "26px" }}> Reading Day : </span>
              </h5>
              <input
                // type="date"
                 value={getTodaysDate()}
                style={{
                  width: "200px",
                  marginLeft: "20px",
                  border: "2px solid red",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
                class="form-control"
                id="dateinput"
                // onChange={(e) => {
                //   setDate(e.target.value);
                //   setCookies(e.target.value);
                //   getDayStartData(e.target.value, -1);
                // }}
                pattern="\d{4}-\d{2}-\d{2}"
              ></input>
            </div>

            <div>
              <div
                className="container"
                style={{ padding: "150px", paddingTop: "50px" }}
              >
                <div className="row">
                  <div className="col-4">
                    <h4 style={{ color: "red" }}>A-MS</h4>
                    <br></br>
                    Reading Day
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                       value={amsToday}
                      id="amsToday"
                      onChange={(e) => {
                        setamsToday(e.target.value);
                      }}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-4">
                    <h4 style={{ color: "red" }}>B-SPEED </h4> <br></br>
                    Reading Day
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                        value={bspeedToday}
                      onChange={(e) => {
                         setbspeedToday(e.target.value);
                      }}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-4">
                    <h4 style={{ color: "red" }}>C-HSD </h4> <br></br>
                    Reading Day
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                       value={hsdToday}
                      onChange={(e) => {
                        sethsdToday(e.target.value);
                      }}
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  id="savebtn"
                  style={{
                    marginTop: "-75px",
                    marginLeft: "890px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                  //onClick={onAdd}
                  class="btn"
                >
                  <span id="savebtn1">Save</span>
                </button>
                <div className="row">
                  <div className="col-4">
                    Last Day<br></br>
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      // value={amsToday}
                      value={amsLast}
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>
                  <div className="col-4">
                    Last Day
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      value={bspeedLast}
                      id="bspeedLast"
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>
                  <div className="col-4">
                    Last Day
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      value={hsdLast}
                      id="hsdLast"
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <br></br>
                    Difference MS
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      value={parseFloat(amsToday -amsLast)}
                      // value={parseFloat(amsDifference)}
                      disabled
                    />
                  </div>
                  <div className="col-4">
                    <br></br>
                    Difference Speed
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      // value={bspeedDifference}
                      value={parseFloat(bspeedToday -bspeedLast)}

                      id="diffspeed"
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>
                  <div className="col-4">
                    <br></br>
                    Difference HSD
                    <input
                      type="number"
                      class="form-control inputDivPrice"
                      // value={hsdDifference}
                      value={parseFloat(hsdToday -hsdLast)}
                      id="diffhsd"
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>

                  {/* <div className="savepop" id="savepop">
                    <div>
                      <br></br>
                      <h3>Saved ✅</h3>
                      <h5 style={{ marginTop: "20px", marginBottom: "20px" }}>
                        {" "}
                        Difference MS :
                        <span className="diffms">FSCC {amsDifference} </span>{" "}
                        <br></br>
                        Difference Speed :
                        <span className="diffspeed"> {bspeedDifference} </span>
                        <br></br>
                        Difference HSD :{" "}
                        <span className="diffhsd"> {hsdDifference} </span>{" "}
                        <br></br>{" "}
                      </h5>
                      <button
                        type="button"
                        id="savebtn"
                        style={{ backgroundColor: "green", color: "white" }}
                        // onClick={onOkay}
                        class="btn"
                      >
                        Okay
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </b>
      </center>
    </>
  );
}

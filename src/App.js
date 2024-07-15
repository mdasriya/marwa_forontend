import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Tank from "./components/objects/Tank";
import Login from "./components/login/Login";
import Machine from "./components/objects/Machine";
import Nozzles from "./components/objects/Nozzles";
import Oil_Purchase from "./components/objects/Oil_Purchase";
import Oil_Godown from "./components/objects/Oil_Godown";
import Oil_Products from "./components/objects/Oil_Product";
import Oil_Retail from "./components/objects/Oil_Retail";
import Client from "./components/objects/Client";
import Client2 from "./components/objects/Client2";
import Petrol_Decantation from "./components/objects/Petrol_Decantation";
import Petrol_Invoice_Feeding from "./components/objects/Petrol_Invoice_Feeding";
import Petrol_Products from "./components/objects/Petrol_Products";
import Staff_Salary from "./components/objects/Staff_Salary";
import Bank_Statement from "./components/objects/Bank_Statement";
import Bank_Deposits from "./components/objects/Bank_Deposits";
import Statement_Entry from "./components/objects/Statement_Entry";
import Add_Oil_Pouches from "./components/objects/Add_Oil_Pouches";
import Add_Mode from "./components/objects/Add_Mode";
import Variation from "./components/objects/Variation";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Handloans from "./components/objects/Handloans";
import Advances from "./components/objects/Advances";
import Day_Start from "./components/objects/Day_Start";
import Credit_Client from "./components/objects/Credit_Client";
import Client_Cheque from "./components/objects/Client_Cheque";
import Generate_Bills from "./components/objects/Generate_Bills";
import Add_Bank from "./components/objects/Add_Bank";
import Add_Staff from "./components/objects/Add_Staff";
import Oil_Pouches from "./components/objects/Oil_Pouches";
import Sale_Fuels from "./components/objects/Sale_Fuels";
import Variartion from "./components/objects/Variation";
import Add_Wallet from "./components/objects/Add_Wallet";
import Add_Petro_Card from "./components/objects/Add_Petro_Card";
import Petro_Card from "./components/objects/Petro_Card";
import Wallet_Payment from "./components/objects/Wallet_Payment";
import Add_Expenses_Topic from "./components/objects/Add_Expenses_Topic";
import Expenses from "./components/objects/Expenses";
import Day_End from "./components/objects/Day_End";

import PetrolReport from "./components/Reports/PetrolReport";
import PetrolReport1 from "./components/Reports/PetrolReport1";
import PetrolReport2 from "./components/Reports/PetrolReport2";
import PetrolReport3 from "./components/Reports/PetrolReport3";
import PetrolReport4 from "./components/Reports/PetrolReport4";
import PetrolReport5 from "./components/Reports/PetrolReport5";
import PetrolReport6 from "./components/Reports/PetrolReport6";

import CreditClientReport from "./components/Reports/CreditClientReport";
import CreditReport1 from "./components/Reports/CreditReport1";
import CreditReport2 from "./components/Reports/CreditReport2";
import CreditReport3 from "./components/Reports/CreditReport3";
import CreditReport4 from "./components/Reports/CreditReport4";

import ExpensesReport from "./components/Reports/ExpensesReport";
import ExpensesReport1 from "./components/Reports/ExpensesReport1";
import ExpensesReport2 from "./components/Reports/ExpensesReport2";
import ExpensesReport3 from "./components/Reports/ExpensesReport3";

import AdvancesHandloanReport from "./components/Reports/AdvancesHandloanReport";
import AdvancesHandloanReport1 from "./components/Reports/AdvancesHandloanReport1";
import AdvancesHandloanReport2 from "./components/Reports/AdvancesHandloanReport2";
import AdvancesHandloanReport3 from "./components/Reports/AdvancesHandloanReport3";

import BankStatements from "./components/Reports/BankStatements";
import BankStatements1 from "./components/Reports/BankStatements1";
import BankStatements2 from "./components/Reports/BankStatements2";
import BankStatements3 from "./components/Reports/BankStatements3";

import CardsReport from "./components/Reports/CardsReport";
import CardsReport1 from "./components/Reports/CardsReport1";
import CardsReport2 from "./components/Reports/CardsReport2";
import CardsReport3 from "./components/Reports/CardsReport3";
import MainHome from "./components/objects/MainHome";
import MachineLayout from "./components/objects/MachineLayout";
import New from "./components/objects/New";
import { Toaster } from "react-hot-toast";
import MachineReadings from "./components/objects/MachineReadings";
import ReadingComponent from "./components/objects/ReadingComponent";
import NozzleProductWise from "./components/objects/NozzleProductWise";

function App() {
  var dbpath1 = "https://test.royalswebtech.com/marwah/a-database/";

  const [dateDayStart, setDate] = useState("");

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");
  const [date4, setDate4] = useState("");
  const [date5, setDate5] = useState("");
  const [date6, setDate6] = useState("");
  const [date7, setDate7] = useState("");
  const [date8, setDate8] = useState("");

  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login dbpath1={dbpath1} dateDayStart={dateDayStart} />
            </>
          }
        />

        <Route
          path="/mainhome"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <MainHome  date={date2} />
                </div>
              </div>
            </>
          }
        />

<Route
          path="/new"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
             <New  />
                </div>
              </div>
            </>
          }
        />

<Route
          path="/machinelayout"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <MachineLayout  date={date3} />
                </div>
              </div>
            </>
          }
        />


<Route
          path="/machineReadings"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <MachineReadings />
                </div>
              </div>
            </>
          }
        />


<Route
          path="/readingcomponent"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ReadingComponent />
                </div>
              </div>
            </>
          }
        />

<Route
          path="/nozzleproductwise"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                <NozzleProductWise/>
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/OilReports"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/OilReports1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/OilReports2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/OilReports3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/ExpensesReport"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/ExpensesReport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/ExpensesReport2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/ExpensesReport3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <ExpensesReport3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/AdvancesHandloanReport"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <AdvancesHandloanReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/AdvancesHandloanReport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <AdvancesHandloanReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/AdvancesHandloanReport2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <AdvancesHandloanReport2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/AdvancesHandloanReport3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <AdvancesHandloanReport3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/BankStatements"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <BankStatements dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/BankStatements1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <BankStatements1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/BankStatements2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <BankStatements2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/BankStatements3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <BankStatements3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/CardsReport"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CardsReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/CardsReport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CardsReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/CardsReport2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CardsReport2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/CardsReport3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CardsReport3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/creditreport4"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditReport4 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/CreditClientReport"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <CreditClientReport dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport1"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport1 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport2 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport3"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport3 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport4"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport4 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport5"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport5 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport6"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport6 dbpath1={dbpath1} date={date2} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Dashboard"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Dashboard dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/PetrolReport"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <PetrolReport
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                    setDate1={setDate1}
                    setDate2={setDate2}
                    setDate3={setDate3}
                    setDate4={setDate4}
                    setDate5={setDate5}
                    setDate6={setDate6}
                    setDate7={setDate7}
                    setDate8={setDate8}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Day_End"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Day_End dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Nozzles"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Nozzles dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/pouches_godown"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <pouches_godown
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/pouches_purchase"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <pouches_purchase
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Petro_Card"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Petro_Card dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Wallet_Payment"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Wallet_Payment
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Add_Wallet"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Wallet dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Add_Petro_Card"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Petro_Card
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Staff_Salary"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Staff_Salary dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Variation"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Variation dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Statement_Entry"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Statement_Entry
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Bank_Deposits"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Bank_Deposits
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Tanks"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Tank dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Day_Start"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Day_Start
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                    setDate={setDate}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Bank_Statement"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Bank_Statement
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/add_staff"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Staff dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Machine"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Machine dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Client_Cheque"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Client_Cheque
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Oil_Pouches"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Oil_Pouches dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/add_payments_mode"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Mode dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Fuel_Sales"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Sale_Fuels dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Oil_Purchase"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Oil_Purchase dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Generate_Bills"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Generate_Bills
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Add_Bank"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Bank dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Petrol_Decantation"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Petrol_Decantation
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Petrol_Invoice_Feeding"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Petrol_Invoice_Feeding
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Oil_Godown"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Oil_Godown dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/add_client"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Client dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/add_client2"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Client2 dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/credit_client"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Credit_Client
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/handloans"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Handloans dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/advances"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Advances dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Daily_Expenses"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Expenses dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Oil_Retail"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Oil_Retail dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Oil_Products"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Oil_Products dbpath1={dbpath1} dateDayStart={dateDayStart} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Petrol_Products"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Petrol_Products
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/Add_Oil_Pouches"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Oil_Pouches
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/Add_Expenses_Topic"
          element={
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <Sidebar />
                </div>
                <div>
                  <Navbar />
                  <Add_Expenses_Topic
                    dbpath1={dbpath1}
                    dateDayStart={dateDayStart}
                  />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

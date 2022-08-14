import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import AddDepartment from "../Services/Owner/AddDepartment";
import AddGuest from "../Services/Receptionist/AddGuest";
import IssueBill from "../Services/Receptionist/IssueBill";
import IssueBillResult from "../Services/Receptionist/IssueBillResult";
import Reservation from "../Services/Receptionist/Reservation";
import ReservationMenu from "../Services/Receptionist/ReservationMenu";
import SearchRoom from "../Services/Receptionist/SeachRoom";
import SearchRoomResult from "../Services/Receptionist/SearchRoomResult";
import ViewGuestById from "../Services/Receptionist/ViewGuestById";
import ViewGuestResult from "../Services/Receptionist/ViewGuestResult";

import ReceptionistMenu from "./ReceptionistMenu";




const ReceptionistMenuCall=()=>{
    return(
        // <BrowserRouter>
        <ReceptionistMenu>
        
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
          
        <Route path="/addguest" element={<AddGuest />} />
        <Route path="/viewguestbyid" element={<ViewGuestById />} />
        <Route path="/viewguestbyid/result" element={<ViewGuestResult />} />
        <Route path="/searchroom" element={<SearchRoom />} />
        <Route path="/searchroom/result" element={<SearchRoomResult />} />
        <Route path="/searchroom/result/reservation" element={<Reservation />} />
        <Route path="/reservationmenu" element={<ReservationMenu />} />
        <Route path="/issuebill" element={<IssueBill/>} />
        <Route path="/issuebill/result" element={<IssueBillResult/>} />
              
        </Routes>
        
        </ReceptionistMenu>
        // </BrowserRouter>
    )
}

export default ReceptionistMenuCall;
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx";

import AddDepartment from "../pages/AddDepartment";

import OwnerMenu from "./OnwerMenu";



const OwnerMenuCall=()=>{
    return(
        //  <BrowserRouter>
        <OwnerMenu>
            
        
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/home" element={<Dashboard />}/>
          
        <Route path="/adddepartment" element={<AddDepartment />} />
              
        </Routes>
       
        </OwnerMenu>
        //  </BrowserRouter>
    )
}

export default OwnerMenuCall;
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import AddDepartment from "../Services/Owner/AddDepartment";


import ManagerMenu from "./ManagerMenu";
import AddInventory from "../Services/Manager/AddInventory";



const ManagerMenuCall=()=>{
    return(
        // <BrowserRouter>
        <ManagerMenu>
        
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
          
              <Route path="/addinventory" element={<AddInventory/>} />
              
        </Routes>
        
        </ManagerMenu>
        // </BrowserRouter>
    );
};

export default ManagerMenuCall;
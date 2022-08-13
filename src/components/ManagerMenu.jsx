import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaChild,
    FaBorderAll
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'reactstrap';


const ManagerMenu = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/manager/home",
            name:"Home",
            icon:<FaTh/>
        },
        
        {
            path:"/manager/addinventory",
            name:"Add Inventory",
            icon:<FaShoppingBag/>
        },
        {
            path:"/manager/updateinventory",
            name:"Update Inventory",
            icon:<FaShoppingBag/>
        },
        {
            path:"/manager/deleteinventory",
            name:"Delete Inventory",
            icon:<FaShoppingBag/>
        },
       
        {
            path:"/manager/addstaff",
            name:"Add Staff",
            icon:<FaChild/>
        },
        {
            path:"/manager/updatestaff",
            name:"Update Staff",
            icon:<FaChild/>
        },
        {
            path:"/manager/deletestaff",
            name:"Delete Staff",
            icon:<FaChild/>
        },
        
        {
            path:"/manager/addroom",
            name:"Add Room",
            icon:<FaBorderAll/>
        },
        {
            path:"/manager/updateroom",
            name:"Update Room",
            icon:<FaBorderAll/>
        },
        {
            path:"/manager/deleteroom",
            name:"Delete Room",
            icon:<FaBorderAll/>
        },
        
        
        {
            path:"/logout",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container1">
            
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Manager </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       </NavLink>
                       
                   ))
               }
               
           </div>
           <main className='bgimage '>
            {children}
            </main>
        </div>
    );
};

export default ManagerMenu;
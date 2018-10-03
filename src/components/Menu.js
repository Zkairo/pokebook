import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export const Menu = () =>
  <nav clasName="menu">
    <div>
      <Link to="/" activeClassName="selected">
        <FaHome className="home-icon" />
      </Link>
      <Link to="/add-day" activeClassName="selected">
        <FaCalendarPlus className="cal-icon" />
      </Link>
      <Link to="/list-days" activeClassName="selected">
        <FaList className="list-icon"/>
      </Link>
    </div>
  </nav>

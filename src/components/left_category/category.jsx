import React from 'react'
import "./category.css"
import { PiStudentThin } from "react-icons/pi";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { LiaAddressBookSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className='category_con'>
        <ul>
            <li>
                <a href="#">
                    <PiStudentThin  className='category_icons' size={50}/>
                    <span>Talabalar</span>
                </a>
            </li>
            <li>
                <Link to={'/teachers'}>
                    <PiChalkboardTeacherThin size={50}/>
                    <span>O'qituvchilar</span>
                </Link>
            </li>
            <li>
                <a href="#">
                    <LiaAddressBookSolid size={50}/>
                    <span>Kurslar</span>
                </a>
            </li>
            <li>
                <Link to={'/group'}>
                    <RiTeamLine size={50}/>
                    <span>Guruhlar</span>
                </Link>
            </li>
            <li>
                <a href="#">
                    <MdOutlineDownloading size={50}/>
                    <span>Listlar</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <IoSettingsOutline size={50}/>
                    <span>Sozlamalar</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Category
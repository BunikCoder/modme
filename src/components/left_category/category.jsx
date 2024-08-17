import React from 'react'
import "./category.css"
import { PiStudentThin } from "react-icons/pi";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { LiaAddressBookSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
function Category() {
  return (
    <div className='category_con'>
        <ul>
            <li>
                <PiStudentThin  className='category_icons' size={50}/>
                <span>Talabalar</span>
            </li>
            <li>
                <PiChalkboardTeacherThin size={50}/>
                <span>O'qituvchilar</span>
            </li>
            <li>
                <LiaAddressBookSolid size={50}/>
                <span>Kurslar</span>
            </li>
            <li>
                <RiTeamLine size={50}/>
                <span>Guruhlar</span>
            </li>
            <li>
                <MdOutlineDownloading size={50}/>
                <span>Listlar</span>
            </li>
            <li>
                <IoSettingsOutline size={50}/>
                <span>Sozlamalar</span>
            </li>
        </ul>
    </div>
  )
}

export default Category
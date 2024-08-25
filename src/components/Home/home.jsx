import React from 'react'
import "./home.css"
import { FaRegUser } from "react-icons/fa";
import { PiStudentThin } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { CiWarning } from "react-icons/ci";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa6";
import { LiaUserTimesSolid } from "react-icons/lia";
import { FaPeopleArrows } from "react-icons/fa";
import CollapsibleTable from '../Table/table';
import { Link } from "react-router-dom";

function Home() {
  return (
        <div className='home padding'>
          <ul>
            <li>
              <a href="#">
                <FaRegUser size={50}/>
                <span>Faol lidlar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <PiStudentThin size={50} />
                <span>Faol talabalar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FiUsers size={50} />
                <span>Guruhlar</span>
              </a>
            </li>
            <li>
              <Link to="/lid">
                <CiWarning size={50} />
                <span>Qarzdorlar</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <AiOutlineLineChart size={50} />
                <span>Sinov darsida</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaRegHandshake size={50} />
                <span>Joriy oyda to'laganlar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <LiaUserTimesSolid size={50} />
                <span>Faol guruhni tark etganlar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaPeopleArrows size={50} />
                <span>Sinov muddatidan keyin ketti</span>
              </a>
            </li>
          </ul>
          <CollapsibleTable />
        </div>

  )
}

export default Home
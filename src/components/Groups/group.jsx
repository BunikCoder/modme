import React from 'react'
import "./group.css"
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import DataTable from '../Table/lesson-table';
function Group() {

  return (<>
    <div className='padding group'>
          <div className="pages_top">
            <div className='pages_about'>
              <h1>Guruhlar</h1>
              <span>Miqdor - </span>
            </div>
            <div className="add_btn">
              <span><FaPlus /></span>
            </div>
          </div>
        <div className="groups_search">
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" placeholder='Faol guruhlar'/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" placeholder="O'qituvchilar"/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" placeholder="Kurslar bo'yicha"/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" placeholder='Kunlar'/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" placeholder='Teglar'/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="date" name="" id="" valuer='Tugash sanasi'/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="date" name="" id="" valuer='Tugash sanasi'/>
            </fieldset>
            <fieldset>
                <button type='button' id='close_btn'><IoMdClose /></button>
            </fieldset>
        </div>
        <DataTable />
    </div>

    </>
  )
}

export default Group
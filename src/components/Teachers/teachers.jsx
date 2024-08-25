import React, { useState, useEffect } from 'react'
import Login from '../Login/Login';
import "./teachers.css"
import axios from '../service/api'
const Teachers = () => {
    const [openLogin , SetOpenLogin] = useState(false);
    function openLog() {
      SetOpenLogin(true);
    }
    const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/teachers')
        setData(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (

    <div className="padding">
        <div className='teachers'>
          <div className="pages_top">
            <div className='pages_about'>
              <h1>O'qituvchilar</h1>
              <span>Miqdor - </span>
            </div>
            <div onClick={openLog} className="add_btn">
              <span>O'qituvchi qo'shish</span>
            </div>
          </div>
          <ul className='teacher_list_con'>
        {data.map((item) => (
          <li key={item.id} className='teacher_list'>
            <span>{item.name}</span>
             {item.phone}
            </li>
        ))}
          </ul>
        </div>
        {openLogin && <Login LoginClose={SetOpenLogin}/>}
    </div>


  );
}

export default Teachers
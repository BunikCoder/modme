import React from 'react'
import "./header.css"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
	<div className="head_con">
		<div className='header'>
			<div className='logo'>
				<Link to={"/"}>
					<img src="https://enlightenment-cap.com/wp-content/uploads/2020/03/CyberCore-Logo.png" alt="" />
				</Link>
			</div>

  			<div class="search">

			<input type="text" placeholder='Qidiruv...'/>

			</div>

		<div className="user">
			<span>User</span>
		</div>
	</div>

</div>
  )
}

export default Header
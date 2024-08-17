import React from 'react'
import "./header.css"
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
	
    	<div className='header'>
			<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" ></script>
  			<div class="search">
			  
			<input type="text" placeholder='Qidiruv...'/>
			<CiSearch />

			</div>
		<div className='logo'>
			Logo
		</div>
		<div className="user">
			<span>User</span>
		</div>
 
</div>
  )
}

export default Header
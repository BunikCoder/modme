import React from 'react'
import MobileHeader from './Mobile/mobileheader'
import Header from './Desktop/header'

function HeaderResponse() {
  return (
    <>
        <Header />
        <MobileHeader />
    </>
  )
}

export default HeaderResponse
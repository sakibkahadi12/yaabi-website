import React from 'react'

import { Footer } from '../Shared/Footer';
import { Navbar } from '../Shared/Navbar';

export const MainLayoutProvider = ({children}) => {
  return <div className=" flex flex-col ">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>;
}

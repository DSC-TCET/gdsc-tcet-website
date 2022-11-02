/* eslint-disable */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Switch, useDarkreader } from "react-darkreader";
import brandlogo from "../Images/gdsclogo.png";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [shownav, setShownav] = useState(false);
  const [isDark, { toggle }] = useDarkreader(false);
  return (
    <nav className='shadow-md sticky top-0 z-20 bg-white'>
      <Container
        maxWidth='lg'
        className={`flex justify-between items-center bg-white py-2.5 md:px-4 px-0 border-b-2  ${
          shownav ? "border-neutral-200" : "border-white"
        } transition content-box`}
      >
        <Link to='/'>
          <div className='flex items-center gap-1'>
            <div className='w-20'>
              <img src={brandlogo} alt='logo' className='w-full' />
            </div>
            <h1 className='text-2xl font-semibold -mb-0.5 text-neutral-800'>
              GDSC TCET
            </h1>
          </div>
        </Link>
        <div>
          <div
            className='md:hidden flex items-center justify-center rounded-full p-2 hover:bg-neutral-200 transition cursor-pointer active:bg-neutral-300'
            onClick={() => setShownav(!shownav)}
          >
            <MenuIcon fontSize='large' />
          </div>
        </div>
        <div className='md:flex hidden items-center gap-10 -mb-5'>
          <Link to='/'>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Home
            </p>
          </Link>
          <Link to='/events'>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Events
            </p>
          </Link>
          <Link to='/team'>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Team
            </p>
          </Link>
          <Switch className='-mt-5' checked={isDark} onChange={toggle} />
        </div>
      </Container>
      <Container
        className={`absolute top-0 -z-10 flex md:hidden bg-white border-t-2 px-6 py-4 shadow-md flex justify-center transition duration-400 bg-white -mt-1 ${
          shownav ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className='flex items-center gap-10 -mb-5'>
          <Link to='/' onClick={() => setShownav(!shownav)}>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Home
            </p>
          </Link>
          <Link to='/events' onClick={() => setShownav(!shownav)}>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Events
            </p>
          </Link>
          <Link to='/team' onClick={() => setShownav(!shownav)}>
            <p className='text-xl text-neutral-800 hover:text-neutral-600 transition'>
              Team
            </p>
          </Link>
          <Switch className='-mt-5' checked={isDark} onChange={toggle} />
        </div>
      </Container>
    </nav>
  );
}

export default Header;

{
  /* <Switch checked={isDark} onChange={toggle} /> */
}

{
  /* <MDBNavbarItem style={{ marginRight: '2vw' }}>
              <Link to="/">
                <MDBNavbarLink>Home</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ marginRight: '2vw' }}>
              <Link to="/events">
                <MDBNavbarLink>Events</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ marginRight: '2vw' }}>
              <Link to="/team">
                <MDBNavbarLink>Team</MDBNavbarLink>
              </Link>
            </MDBNavbarItem> */
}

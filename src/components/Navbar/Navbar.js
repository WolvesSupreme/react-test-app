import React, { useState } from 'react';
// import { MenuItems } from './MenuItems';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from '../../styles/Navbar.elements';

export const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' click={click}>
                            <NavIcon />
                            Massage Abi
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        {/* --- NAVEGACION --- */}
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/nosotros'>Nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/servicios'>Servicios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/paquetes'>Paquetes</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/reservaciones'>Reservaciones</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contactenos'>Contactenos</NavLinks>
                            </NavItem>
                        </NavMenu>


                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>

        </>
    )
}

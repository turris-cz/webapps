/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import DarkModeToggle from "./DarkModeToggle";

import TurrisLogo from "./turris-dark.svg";

const Header = ({ darkMode, toggleMode }) => {
    return (
        <header>
            <Navbar
                bg="light"
                variant="light"
                fixed="top"
                className="shadow-sm"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            className="d-inline-block align-top"
                            src={TurrisLogo}
                            alt="Turris Logo"
                        />
                    </Navbar.Brand>
                    <DarkModeToggle
                        darkMode={darkMode}
                        toggleMode={toggleMode}
                    />
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

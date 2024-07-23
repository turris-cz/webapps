/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import { useContext } from "react";

import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { t } from "ttag";

import DarkModeDropdown from "./DarkModeDropdown";
import LangSwitcher from "./LangSwitcher";
import TurrisLogo from "./turris-dark.svg";
import AuthContext from "../../store/auth-context";

const Header = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    return (
        <header>
            <Navbar fixed="top" className="bg-body shadow-sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            className="d-inline-block align-top"
                            src={TurrisLogo}
                            alt={t`Turris Logo`}
                            height="30"
                        />
                    </Navbar.Brand>
                    <div className="ms-auto d-flex align-items-center align-content-center">
                        <Nav className="me-2">
                            <DarkModeDropdown />
                            <LangSwitcher />
                            <Nav.Link onClick={isLoggedIn ? logout : login}>
                                {isLoggedIn ? t`Logout` : t`Login`}
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

Header.propTypes = {
    darkMode: PropTypes.string,
    changeDarkMode: PropTypes.func,
};

export default Header;

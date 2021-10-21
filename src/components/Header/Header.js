/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { t } from "ttag";

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
                            alt={t`Turris Logo`}
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

Header.propTypes = {
    darkMode: PropTypes.bool,
    toggleMode: PropTypes.func,
};

export default Header;

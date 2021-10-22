/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { BoxArrowUpRight } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { t } from "ttag";

import LanguageMenuItem from "./LanguageMenuItem";

const LangSwitcher = () => {
    return (
        <Nav>
            <NavDropdown
                align="end"
                id="nav-dropdown-languages"
                title={t`Language`}
            >
                <LanguageMenuItem />
                <NavDropdown.Divider />
                <NavDropdown.Item
                    target="_blank"
                    href="https://docs.turris.cz/geek/contributing/translation/"
                >
                    {t`Participate`}
                    <sup>
                        <BoxArrowUpRight className="ms-1" size={12} />
                    </sup>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default LangSwitcher;

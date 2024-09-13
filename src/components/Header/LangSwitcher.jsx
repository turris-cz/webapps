/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BoxArrowUpRight, Translate } from "react-bootstrap-icons";
import { t } from "ttag";

import LanguageMenuItem from "./LanguageMenuItem";

const LangSwitcher = () => {
    const renderLangTooltip = (props) => (
        <Tooltip id="lang-tooltip" {...props}>
            {t`Change Language`}
        </Tooltip>
    );
    return (
        <OverlayTrigger placement="bottom" overlay={renderLangTooltip}>
            <NavDropdown
                align="end"
                id="nav-dropdown-languages"
                title={<Translate />}
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
        </OverlayTrigger>
    );
};

export default LangSwitcher;

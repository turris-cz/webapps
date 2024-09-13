/*
 * Copyright (c) 2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BoxArrowInRight, BoxArrowRight } from "react-bootstrap-icons";
import { t } from "ttag";

import AuthContext from "../../store/auth-context";

const LoginButton = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);

    const renderLoginTooltip = (props) => (
        <Tooltip id="login-tooltip" {...props}>
            {isLoggedIn ? t`Log Out` : t`Log In`}
        </Tooltip>
    );

    return (
        <OverlayTrigger placement="bottom" overlay={renderLoginTooltip}>
            <Nav.Link
                className="d-flex align-items-center"
                onClick={isLoggedIn ? logout : login}
            >
                {isLoggedIn ? <BoxArrowRight /> : <BoxArrowInRight />}
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default LoginButton;

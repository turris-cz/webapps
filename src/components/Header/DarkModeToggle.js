/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { t } from "ttag";

const DarkModeToggle = ({ darkMode, toggleMode }) => {
    let modeLabel = darkMode ? t`Light` : t`Dark`;

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {t`Toggle ${modeLabel} Mode`}
        </Tooltip>
    );

    return (
        <Form className="me-d">
            <OverlayTrigger placement="left" overlay={renderTooltip}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={toggleMode}
                    checked={darkMode}
                />
            </OverlayTrigger>
        </Form>
    );
};

DarkModeToggle.propTypes = {
    darkMode: PropTypes.bool,
    toggleMode: PropTypes.func,
};

export default DarkModeToggle;

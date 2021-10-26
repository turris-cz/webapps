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

const DarkModeToggle = ({ darkMode, toggleMode }) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {`Toggle ${darkMode ? "Light" : "Dark"} Mode`}
        </Tooltip>
    );

    return (
        <Form className="ms-auto">
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

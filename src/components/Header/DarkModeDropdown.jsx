/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import PropTypes from "prop-types";
import NavDropdown from "react-bootstrap/NavDropdown";
import { t } from "ttag";

import {
    BrightnessHighFill,
    Check2,
    CircleHalf,
    MoonStarsFill,
} from "react-bootstrap-icons";

const darkModeOptions = [
    {
        icon: <BrightnessHighFill className="me-2" />,
        text: t`Light`,
        mode: "light",
    },
    {
        icon: <MoonStarsFill className="me-2" />,
        text: t`Dark`,
        mode: "dark",
    },
    {
        icon: <CircleHalf className="me-2" />,
        text: t`Auto`,
        mode: "auto",
    },
];

const DarkModeToggle = ({ darkMode, changeDarkMode }) => {
    console.log(darkMode);
    const dropdownTitle = darkModeOptions.find(
        (option) => option.mode === darkMode
    );

    return (
        <NavDropdown
            align="end"
            id="nav-dropdown-dark-mode"
            title={dropdownTitle.icon || <BrightnessHighFill />}
        >
            {darkModeOptions.map((option) => (
                <li key={option.mode}>
                    <NavDropdown.Item
                        as="button"
                        className="d-flex align-items-center"
                        key={option.mode}
                        onClick={changeDarkMode(option.mode)}
                        active={option.mode === darkMode}
                    >
                        {option.icon}
                        {option.mode === darkMode ? (
                            <>
                                <strong>{option.text}</strong>
                                <Check2 className="ms-auto" />
                            </>
                        ) : (
                            option.text
                        )}
                    </NavDropdown.Item>
                </li>
            ))}
        </NavDropdown>
    );
};

DarkModeToggle.propTypes = {
    darkMode: PropTypes.bool,
    changeDarkMode: PropTypes.func,
};

export default DarkModeToggle;

/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useContext } from "react";

import { t } from "ttag";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    BrightnessHighFill,
    Check2,
    CircleHalf,
    MoonStarsFill,
} from "react-bootstrap-icons";

import ThemeContext from "../../store/theme-context";

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

const DarkModeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <NavDropdown
            align="end"
            id="nav-dropdown-dark-mode"
            title={<CircleHalf />}
        >
            {darkModeOptions.map((option) => (
                <li key={option.mode}>
                    <NavDropdown.Item
                        as="button"
                        className="d-flex align-items-center"
                        key={option.mode}
                        onClick={setTheme.bind(null, option.mode)}
                        active={option.mode === theme}
                    >
                        {option.icon}
                        {option.mode === theme ? (
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

export default DarkModeToggle;

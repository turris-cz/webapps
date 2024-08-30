/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useContext } from "react";

import { t } from "ttag";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
    BrightnessHighFill,
    Check2,
    CircleHalf,
    MoonStarsFill,
} from "react-bootstrap-icons";

import ThemeContext from "../../store/theme-context";

const darkModeOptions = [
    {
        icon: <BrightnessHighFill />,
        text: t`Light`,
        mode: "light",
    },
    {
        icon: <MoonStarsFill />,
        text: t`Dark`,
        mode: "dark",
    },
    {
        icon: <CircleHalf />,
        text: t`Auto`,
        mode: "auto",
    },
];

const DarkModeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const currentThemeIcon = darkModeOptions.find(
        (option) => option.mode === theme
    ).icon;

    const renderDarkModeTooltip = (props) => (
        <Tooltip id="dark-mode-tooltip" {...props}>
            {t`Change Theme`}
        </Tooltip>
    );
    return (
        <OverlayTrigger placement="left" overlay={renderDarkModeTooltip}>
            <NavDropdown
                align="end"
                id="nav-dropdown-dark-mode"
                title={currentThemeIcon}
                aria-label={t`Change Theme (${theme})`}
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
                            <span className="me-2 opacity-50">
                                {option.icon}
                            </span>
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
        </OverlayTrigger>
    );
};

export default DarkModeToggle;

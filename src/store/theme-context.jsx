/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useState, useEffect, createContext } from "react";

import PropTypes from "prop-types";

const ThemeContext = createContext({
    theme: "auto",
    setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("auto");

    // Apply theme to the document
    const applyTheme = (selectedTheme) => {
        document.documentElement.setAttribute("data-bs-theme", selectedTheme);
    };

    // Initialize theme based on localStorage and media query
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        setTheme(savedTheme);
        applyTheme(savedTheme);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleMediaChange = (e) => {
            if (theme === "auto") {
                applyTheme(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleMediaChange);
        return () =>
            mediaQuery.removeEventListener("change", handleMediaChange);
    }, [theme]);

    // Apply the selected theme
    useEffect(() => {
        if (theme === "auto") {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            applyTheme(prefersDark ? "dark" : "light");
        } else {
            applyTheme(theme);
        }
    }, [theme]);

    // Handle theme change and save to localStorage
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const contextValue = {
        theme,
        setTheme: handleThemeChange,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContext;

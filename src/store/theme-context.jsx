/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, {
    useState,
    useLayoutEffect,
    createContext,
    useCallback,
    useMemo,
} from "react";

import PropTypes from "prop-types";

const ThemeContext = createContext({
    theme: "auto",
    setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("auto");

    // Function to apply the theme to the document
    const applyTheme = useCallback((selectedTheme) => {
        document.documentElement.setAttribute("data-bs-theme", selectedTheme);
    }, []);

    // Function to handle favicon change based on the theme
    const handleFaviconChange = useCallback((currentTheme) => {
        const favicon = document.getElementById("favicon");
        if (favicon) {
            favicon.setAttribute(
                "href",
                `favicon-${currentTheme === "dark" ? "white" : "black"}.png`
            );
        }
    }, []);

    // Initialize theme based on localStorage and prefers-color-scheme media query
    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const initializeTheme = () => {
            const savedTheme = localStorage.getItem("theme") || "auto";
            setTheme(savedTheme);
            applyTheme(savedTheme);

            handleFaviconChange(mediaQuery.matches ? "dark" : "light");
        };

        initializeTheme();

        // Event listener for theme change
        const handleMediaChange = (event) => {
            if (theme === "auto") {
                const newTheme = event.matches ? "dark" : "light";
                setTheme(newTheme);
                applyTheme(newTheme);
            }
            handleFaviconChange(mediaQuery.matches ? "dark" : "light");
        };

        // Event listener for storage change
        const handleStorageChange = () => {
            const savedTheme = localStorage.getItem("theme") || "auto";
            setTheme(savedTheme);
            applyTheme(savedTheme);
        };

        mediaQuery.addEventListener("change", handleMediaChange);
        window.addEventListener("storage", handleStorageChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [applyTheme, handleFaviconChange, theme]);

    // Apply the selected theme on change
    useLayoutEffect(() => {
        if (theme === "auto") {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            applyTheme(prefersDark ? "dark" : "light");
        } else {
            applyTheme(theme);
        }
    }, [theme, applyTheme]);

    // Handle theme change and save it to localStorage
    const handleThemeChange = useCallback(
        (newTheme) => {
            setTheme(newTheme);
            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        },
        [applyTheme]
    );

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme: handleThemeChange,
        }),
        [theme, handleThemeChange]
    );

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

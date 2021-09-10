/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import React, { useEffect, useLayoutEffect } from "react";

import ErrorBoundary from "./utils/ErrorBoundary";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const getInitialMode = () => {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }
    };

    const [darkMode, setDarkMode] = React.useState(getInitialMode());

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    useLayoutEffect(() => {
        document.body.setAttribute(
            "data-theme",
            `${darkMode ? "dark" : "light"}`
        );
    });

    const darkModeToggleHandler = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <Header darkMode={darkMode} toggleMode={darkModeToggleHandler} />
            <ErrorBoundary>
                <Main />
            </ErrorBoundary>
            <Footer />
        </>
    );
};

export default App;

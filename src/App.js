/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, { useEffect, useLayoutEffect, useState } from "react";

import { t } from "ttag";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundary from "./utils/ErrorBoundary";

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
        }
        if (userPrefersDark) {
            return true;
        }
        return false;
    };

    const [darkMode, setDarkMode] = useState(getInitialMode());

    useEffect(() => {
        document.title = t`Available Applications | Turris`;
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

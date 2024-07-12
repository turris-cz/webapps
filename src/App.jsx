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
import { AuthContextProvider } from "./store/auth-context";

const App = () => {
    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const getInitialMode = () => {
        const isReturningUser = "theme" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("theme"));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        }
        if (userPrefersDark) {
            return "dark";
        }
        return "light";
    };

    const [darkMode, setDarkMode] = useState(getInitialMode());

    useEffect(() => {
        document.title = t`Available Applications | Turris`;
        localStorage.setItem("theme", JSON.stringify(darkMode));
    }, [darkMode]);

    // useLayoutEffect(() => {
    //     document.documentElement.setAttribute(
    //         "data-theme",
    //         `${darkMode ? "dark" : "light"}`
    //     );
    // });

    const changeDarkMode = (mode) => {
        // Set dark mode to three states: light, dark, auto
        if (mode === "auto") {
            setDarkMode(getPrefColorScheme() ? "dark" : "light");
        } else {
            setDarkMode(mode);
        }
    };

    return (
        <AuthContextProvider>
            <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />
            <ErrorBoundary>
                <Main />
            </ErrorBoundary>
            <Footer />
        </AuthContextProvider>
    );
};

export default App;

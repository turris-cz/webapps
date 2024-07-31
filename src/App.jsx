/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundary from "./utils/ErrorBoundary";
import { AuthContextProvider } from "./store/auth-context";
import { ThemeContextProvider } from "./store/theme-context";

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <Header />
                <ErrorBoundary>
                    <Main />
                </ErrorBoundary>
                <Footer />
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;

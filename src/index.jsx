/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./httpsRedirect";
import "./i18n";

import "./index.scss";

async function enableMocking() {
    if (!import.meta.env.DEV) {
        return;
    }

    const { worker } = await import("./mocks/browser");
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start({
        onUnhandledRequest: "bypass", // This option ensures that any unmocked requests are forwarded to the actual network.
    });
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});

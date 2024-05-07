/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { addLocale, useLocale } from "ttag";

function getLocale() {
    return localStorage.getItem("locale") || "en";
}

export function saveLocale(locale) {
    localStorage.setItem("locale", locale);
}

// Setup Internalization
export const locale = getLocale();

if (locale !== "en") {
    import(`../i18n/${locale}.po.json`)
        .then((translationsObj) => {
            addLocale(locale, translationsObj.default);
            useLocale(locale);
        })
        .catch((error) => {
            console.error("Failed to load the translation file:", error);
        });
}

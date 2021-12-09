/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
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
    const translationsObj = require(`../i18n/${locale}.po.json`);
    addLocale(locale, translationsObj);
    useLocale(locale);
}

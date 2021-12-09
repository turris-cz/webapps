/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Check2 } from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";

import { locale, saveLocale } from "../../i18n";

const LANGS = [
    { id: "cs", title: "Čeština" },
    { id: "en", title: "English" },
    { id: "de", title: "Deutsch" },
    { id: "ru", title: "Русский" },
];

const setLocale = (locale) => (event) => {
    event.preventDefault();
    saveLocale(locale);
    window.location.reload();
};

const LanguageMenuItem = () => {
    const sortedLangs = [
        ...LANGS.filter((language) => language.id === locale),
        ...LANGS.filter((language) => language.id !== locale),
    ];
    return sortedLangs.map((language) => {
        return (
            <NavDropdown.Item
                key={language.id}
                onClick={setLocale(language.id)}
            >
                {language.id === locale ? (
                    <strong>
                        {language.title}
                        <Check2 className="ms-1" />
                    </strong>
                ) : (
                    language.title
                )}
            </NavDropdown.Item>
        );
    });
};

export default LanguageMenuItem;

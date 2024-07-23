/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import NavDropdown from "react-bootstrap/NavDropdown";
import { Check2 } from "react-bootstrap-icons";

import { locale, saveLocale } from "../../i18n";

const LANGS = [
    { id: "cs", title: "Čeština" },
    { id: "de", title: "Deutsch" },
    { id: "en", title: "English" },
    { id: "it", title: "Italiano" },
    { id: "nl", title: "Nederlands" },
    { id: "nb_NO", title: "Norsk Bokmål" },
    { id: "pl", title: "Polski" },
    { id: "ru", title: "Русский" },
    { id: "sk", title: "Slovenčina" },
    { id: "sv", title: "Svenska" },
];

const setLocale = (locale) => (event) => {
    event.preventDefault();
    saveLocale(locale);
    window.location.reload();
};

const LanguageMenuItem = () => {
    return LANGS.map((language) => {
        return (
            <NavDropdown.Item
                key={language.id}
                onClick={setLocale(language.id)}
                className="d-flex align-items-center"
                active={language.id === locale}
            >
                {language.id === locale ? (
                    <>
                        <strong>{language.title}</strong>
                        <Check2 className="ms-auto" />
                    </>
                ) : (
                    language.title
                )}
            </NavDropdown.Item>
        );
    });
};

export default LanguageMenuItem;

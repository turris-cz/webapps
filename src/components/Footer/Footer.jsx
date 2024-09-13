/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import { t } from "ttag";

const Footer = () => {
    return (
        <footer className="footer bg-body mt-auto py-3 shadow">
            <div className="container text-center">
                <span className="text-muted">
                    <small>
                        {t`Turris is developed by CZ.NIC, the CZ domain registry.`}
                    </small>
                </span>
            </div>
        </footer>
    );
};

export default Footer;

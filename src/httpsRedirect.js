/*
 * Copyright (C) 2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

(function () {
    if (window.location.protocol !== "https:") {
        var httpsUrl =
            "https://" +
            window.location.hostname +
            window.location.pathname +
            window.location.search;
        fetch(httpsUrl, { method: "HEAD" })
            .then(function (response) {
                if (response.ok) {
                    window.location.replace(httpsUrl);
                }
            })
            .catch(function (error) {
                console.error("HTTPS check failed:", error);
            });
    }
})();

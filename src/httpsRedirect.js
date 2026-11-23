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
        // Use "no-cors" so no CORS headers are needed on the server: the
        // response is opaque, but the promise resolves only if the TLS
        // handshake and HTTP exchange succeeded (it rejects on connection
        // errors or an untrusted certificate).
        fetch(httpsUrl, { method: "HEAD", mode: "no-cors", cache: "no-store" })
            .then(function () {
                window.location.replace(httpsUrl);
            })
            .catch(function (error) {
                console.error("HTTPS check failed:", error);
            });
    }
})();

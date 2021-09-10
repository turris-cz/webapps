/*
 * Copyright (c) 2019-2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

const dummyData = {
    langs: {
        en: {
            title: "Available applications",
            countdown: "Switching to the default app in:",
        },
        cs: {
            title: "Dostupné rozhraní",
            countdown: "Přepnutí na výchozí rozhraní za:",
        },
    },
    apps: [
        {
            id: "foris",
            title: "Foris",
            url: "/foris/config/",
            icon: "../icons/turris.svg",
            selected: false,
            description: {
                en: "Simple configuration interface for Turris OS.",
                cs: "Jednoduché rozhraní pro nastavení Turris OS.",
            },
        },
        {
            id: "reforis",
            title: "reForis",
            url: "/reforis/",
            icon: "../icons/foris.svg",
            selected: true,
            description: {
                en: "Redesigned web interface for Turris OS.",
                cs: "Nový design rozhraní pro nastavení Turris OS.",
            },
        },
        {
            id: "luci",
            title: "LuCI",
            url: "/cgi-bin/luci",
            icon: "../icons/luci.svg",
            selected: false,
            description: {
                en: "OpenWrt advance web configuration.",
                cs: "OpenWrt rozhraní pro nastavení routeru.",
            },
        },
        {
            id: "nextcloud",
            title: "Nextcloud",
            url: "/nextcloud",
            icon: "../icons/nextcloud.svg",
            selected: false,
            description: {
                en: "The self-hosted productivity platform that keeps you in control.",
                cs: "Vlastní souborový hosting a kancelářská platforma, kterou máte pod kontrolou.",
            },
        },
        {
            id: "transmission",
            title: "Transmission",
            url: "/transmission",
            icon: "../icons/transmission.svg",
            selected: false,
            description: {
                en: "A BitTorrent client.",
                cs: "BitTorrent klient.",
            },
        },
        {
            id: "tvheadend",
            title: "TVHeadend",
            url: "/tvheadend",
            icon: "../icons/tvheadend.svg",
            selected: false,
            description: {
                en: "TV streaming server and recorder.",
            },
        },
    ],
};

module.exports = dummyData;

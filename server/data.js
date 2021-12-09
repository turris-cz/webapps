/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

const dummyData = {
    countdown: 25,
    selected: "reforis",
    apps: [
        {
            id: "reforis",
            title: "reForis",
            url: "/reforis/",
            icon: "../icons/foris.svg",
            description: {
                en: "Redesigned web interface for Turris OS.",
                cs: "Nový design rozhraní pro nastavení Turris OS.",
                ru: "Обновлённый веб-интерфейс для ОС Turris.",
            },
        },
        {
            id: "foris",
            title: "Foris",
            url: "/foris/config/",
            icon: "../icons/turris.svg",
            description: {
                en: "Simple configuration interface for Turris OS.",
                cs: "Jednoduché rozhraní pro nastavení Turris OS.",
                ru: "Простой интерфейс настройки для ОС Turris.",
            },
        },
        {
            id: "luci",
            title: "LuCI",
            url: "/cgi-bin/luci",
            icon: "../icons/luci.svg",
            description: {
                en: "OpenWrt advance web configuration.",
                cs: "OpenWrt rozhraní pro nastavení routeru.",
                ru: "Расширенная веб-конфигурация OpenWrt.",
            },
        },
        {
            id: "nextcloud",
            title: "Nextcloud",
            url: "/nextcloud",
            icon: "../icons/nextcloud.svg",
            description: {
                en: "The self-hosted productivity platform that keeps you in control.",
                cs: "Vlastní souborový hosting a kancelářská platforma, kterou máte pod kontrolou.",
                ru: "Самостоятельная платформа для повышения производительности, которая держит вас под контролем.",
            },
        },
        {
            id: "transmission",
            title: "Transmission",
            url: "/transmission",
            icon: "../icons/transmission.svg",
            description: {
                en: "A BitTorrent client.",
                cs: "BitTorrent klient.",
                ru: "BitTorrent клиент",
            },
        },
        {
            id: "tvheadend",
            title: "TVHeadend",
            url: "/tvheadend",
            icon: "../icons/tvheadend.svg",
            description: {
                en: "TV streaming server and recorder.",
                cs: "Televizní streamovací server a rekordér.",
                ru: "Сервер потокового ТВ и рекордер.",
            },
        },
    ],
};

module.exports = dummyData;

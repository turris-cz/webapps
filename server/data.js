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
            id: "foris",
            title: "Foris",
            url: "/foris/config/",
            icon: "../icons/turris.svg",
            description: "Simple configuration interface for Turris OS.",
        },
        {
            id: "reforis",
            title: "reForis",
            url: "/reforis/",
            icon: "../icons/foris.svg",
            description: "Redesigned web interface for Turris OS.",
        },
        {
            id: "luci",
            title: "LuCI",
            url: "/cgi-bin/luci",
            icon: "../icons/luci.svg",
            description: "OpenWrt advance web configuration.",
        },
        {
            id: "nextcloud",
            title: "Nextcloud",
            url: "/nextcloud",
            icon: "../icons/nextcloud.svg",
            description:
                "The self-hosted productivity platform that keeps you in control.",
        },
        {
            id: "transmission",
            title: "Transmission",
            url: "/transmission",
            icon: "../icons/transmission.svg",
            description: "A BitTorrent client.",
        },
        {
            id: "tvheadend",
            title: "TVHeadend",
            url: "/tvheadend",
            icon: "../icons/tvheadend.svg",
            description: "TV streaming server and recorder.",
        },
    ],
};

module.exports = dummyData;

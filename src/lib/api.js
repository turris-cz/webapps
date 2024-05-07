/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

const getAllData = async () => {
    const response = await fetch("/api/apps.json");

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch data");
    }

    if (!response.headers.get("content-type")?.includes("application/json")) {
        throw new Error(
            "Expected JSON, got " + response.headers.get("content-type")
        );
    }

    const data = await response.json();
    return data;
};

const getAuthData = async () => {
    const response = await fetch("/login.json");

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch data.");
    }

    if (!response.headers.get("content-type")?.includes("application/json")) {
        throw new Error(
            "Expected JSON, got " + response.headers.get("content-type")
        );
    }

    const data = await response.json();

    return data;
};

export { getAuthData };
export default getAllData;

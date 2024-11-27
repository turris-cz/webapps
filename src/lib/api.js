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

    let contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
        console.warn(
            "Unexpected Content-Type: " +
                contentType +
                ". Attempting to parse as JSON."
        );
    }

    try {
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Failed to parse JSON: " + e.message);
    }
};

const getAuthData = async () => {
    const response = await fetch("/login.json");

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch data.");
    }

    let contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
        console.warn(
            "Unexpected Content-Type: " +
                contentType +
                ". Attempting to parse as JSON."
        );
    }

    try {
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Failed to parse JSON: " + e.message);
    }
};

export { getAuthData };
export default getAllData;

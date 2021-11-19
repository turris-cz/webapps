/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

const getAllData = async () => {
    const response = await fetch("/api/apps.json");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || t`Could not fetch data.`);
    }

    return data;
};

const getAuthData = async () => {
    const response = await fetch("/login.json");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || t`Could not fetch data.`);
    }

    return data;
};

export { getAuthData };
export default getAllData;

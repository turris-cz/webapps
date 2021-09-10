/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";

import Cards from "../cards/Cards";
import CountDown from "./CountDown";

const Main = () => {
    const [apps, setApps] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAppsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        await axios("/api/apps.json")
            .then((response) => {
                setApps(response.data);
            })
            .catch((err) => {
                console.error("Error fetching data: ", err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchAppsHandler();
    }, [fetchAppsHandler]);

    const [defaultApp] =
        apps && apps.length > 0
            ? apps.filter((app) => app.selected === true)
            : "/";

    const onCompleteHandler = () => {
        if (process.env.NODE_ENV === "development") return null;
        window.location.assign(defaultApp.url);
    };

    return (
        <main role="main">
            <section className="py-4 text-center container">
                <div className="container">
                    {!isLoading && !error && (
                        <>
                            <h1>Available Applications</h1>
                            <CountDown
                                countDownTime={25}
                                onComplete={onCompleteHandler}
                            />
                        </>
                    )}
                </div>
            </section>
            <Cards apps={apps} error={error} isLoading={isLoading} />
        </main>
    );
};

export default Main;

/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";

import getAllData from "../../utils/api";
import useHttp from "../../utils/use-http";
import Cards from "../Cards/Cards";
import CountDown from "./CountDown";

const Main = () => {
    const {
        sendRequest,
        status,
        data: loadedData,
        error,
    } = useHttp(getAllData, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") {
        return (
            <div id="backdrop">
                <div className="spinner-center">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    if (error) {
        return <p className="py-5 text-center">{error}</p>;
    }

    if (
        status === "completed" &&
        (!loadedData || loadedData.apps.length === 0)
    ) {
        return <p className="py-5 text-center">No apps found.</p>;
    }

    const [defaultApp] = loadedData.apps.filter(
        (app) => loadedData.selected === app.id
    );

    const onCompleteHandler = () => {
        if (process.env.NODE_ENV === "development") return null;
        window.location.assign(defaultApp.url);
    };

    return (
        <main role="main">
            <section className="py-4 text-center container">
                <div className="container">
                    <h1>Available Applications</h1>
                    <CountDown
                        countDownTime={loadedData.countdown}
                        onComplete={onCompleteHandler}
                    />
                </div>
            </section>
            <Cards apps={loadedData.apps} defaultApp={defaultApp.id} />
        </main>
    );
};

export default Main;

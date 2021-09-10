/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import Spinner from "react-bootstrap/Spinner";

import AppCard from "./AppCard";

const Cards = ({ apps, error, isLoading }) => {
    let content;

    if (isLoading) {
        content = (
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
        content = <p>{error.message}</p>;
    }

    if (apps && apps.length > 0) {
        content = apps.map((app, index) => {
            return (
                <AppCard
                    key={app.id}
                    title={app.title}
                    url={app.url}
                    icon={app.icon}
                    description={app.description.en}
                    tabIndexPosition={index + 1}
                    defaultApp={app.selected}
                />
            );
        });
    }

    return (
        <div className="py-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-lg-5 justify-content-center">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Cards;

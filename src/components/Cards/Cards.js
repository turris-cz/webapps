/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import PropTypes from "prop-types";

import AppCard from "./AppCard";

const Cards = ({ apps, defaultApp }) => {
    return (
        <div className="py-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-lg-5 justify-content-center">
                    {apps.map((app, index) => {
                        return (
                            <AppCard
                                key={app.id}
                                title={app.title}
                                url={app.url}
                                icon={app.icon}
                                description={app.description}
                                tabIndexPosition={index + 1}
                                defaultApp={app.id === defaultApp && true}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    apps: PropTypes.array,
    defaultApp: PropTypes.string,
};

export default Cards;

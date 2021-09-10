/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { ChevronRight, InfoCircleFill } from "react-bootstrap-icons";

const AppCard = ({
    title,
    url,
    icon,
    description,
    defaultApp,
    tabIndexPosition,
}) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {`${title} - ${description}`}
        </Tooltip>
    );

    return (
        <div className="col mb-5">
            <Card className="card h-100 shadow-sm ms-auto me-auto">
                <Card.Img
                    variant="top"
                    src={icon}
                    className="bd-placeholder-img card-img-top p-5 border-bottom"
                    alt={`${title} Logo`}
                />
                <Card.Body>
                    <Card.Title
                        as={"h2"}
                        className="h4 text-dark d-inline align-middle card-name"
                    >
                        {title}
                    </Card.Title>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <span style={{ position: "relative", zIndex: "2" }}>
                            <InfoCircleFill
                                className="text-secondary ms-1"
                                width="17"
                                height="17"
                            />
                        </span>
                    </OverlayTrigger>
                    {defaultApp && (
                        <Badge bg="primary" className="ms-1 align-middle">
                            default
                        </Badge>
                    )}
                    <div className="d-grid mt-1">
                        <a
                            tabIndex={tabIndexPosition}
                            href={url}
                            className="btn btn-outline-primary stretched-link btn-wrap-text"
                        >
                            <span className="align-middle">Go to {title}</span>
                            <ChevronRight className="align-middle ms-1" />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AppCard;

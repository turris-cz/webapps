/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ChevronRight, HouseFill, InfoCircleFill } from "react-bootstrap-icons";
import { t } from "ttag";

const AppCard = ({
    title,
    url,
    icon,
    description,
    defaultApp,
    tabIndexPosition,
}) => {
    const renderInfoTooltip = (props) => (
        <Tooltip id="info-tooltip" {...props}>
            {`${title} - ${description}`}
        </Tooltip>
    );

    const renderHomeTooltip = (props) => (
        <Tooltip id="home-tooltip" {...props}>
            {t`Default Application`}
        </Tooltip>
    );

    return (
        <div className="col mb-5">
            <Card className="card h-100 shadow-sm ms-auto me-auto">
                <Card.Img
                    variant="top"
                    src={icon}
                    className="bd-placeholder-img card-img-top p-5 img-logo-black"
                    alt={t`${title} Logo`}
                />
                <Card.Body className="text-truncate border-top">
                    <Card.Title
                        as={"h2"}
                        className="h4 d-inline align-middle card-name me-1"
                    >
                        {title}
                    </Card.Title>
                    {defaultApp && (
                        <OverlayTrigger
                            placement="top"
                            overlay={renderHomeTooltip}
                        >
                            <span
                                style={{
                                    position: "relative",
                                    zIndex: "2",
                                }}
                            >
                                <HouseFill
                                    className="text-secondary me-1"
                                    width="17"
                                    height="17"
                                />
                            </span>
                        </OverlayTrigger>
                    )}
                    <OverlayTrigger placement="top" overlay={renderInfoTooltip}>
                        <span
                            style={{
                                position: "relative",
                                zIndex: "2",
                            }}
                        >
                            <InfoCircleFill
                                className="text-secondary"
                                width="17"
                                height="17"
                            />
                        </span>
                    </OverlayTrigger>
                    <div className="d-grid mt-1">
                        <a
                            tabIndex={tabIndexPosition}
                            href={url}
                            className="btn btn-outline-primary stretched-link d-inline-block text-truncate"
                        >
                            <span className="align-middle me-1">
                                {t`Go to `}
                                {title}
                            </span>
                            <ChevronRight className="align-middle" />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

AppCard.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
    defaultApp: PropTypes.bool,
    tabIndexPosition: PropTypes.number,
};

export default AppCard;

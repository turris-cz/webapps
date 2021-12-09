/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import { t } from "ttag";

const CountDown = ({ countDownTime = 25, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(countDownTime);

    useEffect(() => {
        if (!timeLeft) {
            onComplete();
            return null;
        }
        setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }, [timeLeft, onComplete]);

    return (
        <>
            <p className="text-muted">
                {t`Switching to the default one in: ${timeLeft} sec.`}
            </p>
            <ProgressBar
                animated
                max={countDownTime}
                now={timeLeft}
                label={t`${timeLeft} sec.`}
                visuallyHidden
            />
        </>
    );
};

CountDown.propTypes = {
    countDownTime: PropTypes.number,
    onComplete: PropTypes.func,
};

export default CountDown;

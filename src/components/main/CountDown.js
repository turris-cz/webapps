/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, { useEffect, useState } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const CountDown = ({ countDownTime = 30, onComplete }) => {
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
                {`Switching to the default one in: ${timeLeft} sec.`}
            </p>
            <ProgressBar
                animated
                max={countDownTime}
                now={timeLeft}
                label={`${timeLeft} sec.`}
                visuallyHidden
            />
        </>
    );
};

export default CountDown;

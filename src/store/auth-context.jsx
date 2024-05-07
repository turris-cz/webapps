import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { t } from "ttag";

import useHttp from "../hooks/use-http";
import { getAuthData } from "../lib/api";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(null);
    const {
        sendRequest,
        status,
        data: loadedData,
        error,
    } = useHttp(getAuthData, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    useEffect(() => {
        if (status !== "pending" && loadedData.accesstime) {
            setUserIsLoggedIn(true);
        } else {
            setUserIsLoggedIn(false);
        }
    }, [loadedData]);

    if (status === "pending") {
        return (
            <div id="backdrop">
                <div className="spinner-center">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">{t`Loading…`}</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    if (error) {
        return <p className="py-5 text-center">{error}</p>;
    }

    const loginHandler = () => {
        window.location.assign("/login");
    };

    const logoutHandler = () => {
        setUserIsLoggedIn(false);
        window.location.assign("/logout");
    };

    const contextValue = {
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;

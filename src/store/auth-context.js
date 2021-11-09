import React, { useState, useEffect, useCallback } from "react";

import PropTypes from "prop-types";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const contextValue = {
        isLoggedIn: false,
        login: () => {},
        logout: () => {},
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

/*
 * Copyright (c) 2021-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Component } from "react";

import PropTypes from "prop-types";
import { t } from "ttag";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error(
            t`An error ocurred in WebApps: "${error}", see details below.`,
            errorInfo.componentStack
        );
    }

    render() {
        const { error } = this.state;
        if (error) {
            document.title = t`An Error Occurred - Available Applications | Turris`;
            return (
                <div className="container">
                    <div className="container-fluid p-3 py-sm-5">
                        <h1>{t`Oops! Something went wrong:`}</h1>
                        <p className="p-3 my-3 bg-secondary-subtle">
                            <code>{error.toString()}</code>
                        </p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t`More detailed information is available in the console of your web browser. On most browsers accessible after pressing <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd></kbd> or <kbd>F12</kbd>.`,
                            }}
                        ></p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t`Please report this error to our support team via e-mail: <a href="mailto:tech.support@turris.cz">tech.support@turris.cz</a>.`,
                            }}
                        />
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

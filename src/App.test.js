/*
 * Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { render, screen } from "@testing-library/react";

import App from "./App";

it("Renders <App/>", () => {
    render(<App />);
    const linkElement = screen.getByText(/turris is developed/i);
    expect(linkElement).toBeInTheDocument();
});

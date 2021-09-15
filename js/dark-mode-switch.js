const darkSwitch = document.getElementById("darkSwitch");
const lightSchemeIcon = document.querySelector("link#light-scheme-icon");
const darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(onColorSchemeUpdate);

darkSwitch.addEventListener("change", () => {
    localStorage.setItem("color-scheme",
        darkSwitch.checked ? "dark" : "light")
    updateTheme();
});

function onColorSchemeUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
        darkSwitch.checked = true;
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
        darkSwitch.checked = false;
    }
    updateTheme();
}

/**
- * Summary: updateTheme checks if the switch is 'on' or 'off' and if it is toggled
- * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
- * applied.
- * @return {void}
- */
function updateTheme() {
    if (localStorage.getItem("color-scheme") === "dark") {
        darkSwitch.checked = true;
    }
    if (localStorage.getItem("color-scheme") === "light") {
        darkSwitch.checked = false;
    }
    darkSwitch.checked
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.removeAttribute("data-theme");
}


// Update theme (this calls updateTheme as well as it updates icons)
onColorSchemeUpdate();

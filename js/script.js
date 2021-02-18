/*
 * Copyright (c) 2020 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

let appRedirect;

// Fetching JSON
const getJSON = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

// Timer & Progress Bar
const timerAndProgressBar = () => {
    let start = true;
    setTimeout(() => {
        if (start) {
            start = false;
            let duration = 25;
            let progressWidth = 100;
            const progressBar = document.getElementById("progress-bar");
            const timeout = document.getElementById("timeout");

            timeout.textContent = ` ${duration} sec.`;
            const timer = setInterval(frame, 1000);

            function frame() {
                let step = progressWidth / duration;
                duration = Math.max(0, duration - 1);
                timeout.textContent = ` ${duration} sec.`;
                if (progressWidth < 1) {
                    clearInterval(timer);
                    start = true;
                    redirectTo(appRedirect);
                } else {
                    progressWidth = progressWidth - step;
                    progressBar.style.width = progressWidth + "%";
                }
            }
        }
    }, 100);
};

// Rediret to URL
const redirectTo = (url) => {
    window.location.assign(url);
};

// Render apps on page load
window.addEventListener("load", () => {
    const intro = document.getElementById("intro");

    getJSON("js/apps.json")
        .then((data) => {
            // Remove spinner
            intro.innerHTML = "";

            // Language Switch
            const lang = data.langs;
            const userLang = navigator.language || navigator.userLanguage;
            var pageTitle;
            var pageCountdown;

            switch (userLang) {
                case "cs":
                    pageTitle = lang.cs.title;
                    pageCountdown = lang.cs.countdown;
                    break;
                default:
                    pageTitle = lang.en.title;
                    pageCountdown = lang.en.countdown;
                    break;
            }

            // Insert intro & countdown
            intro.insertAdjacentHTML(
                "beforeBegin",
                `<h1>${pageTitle}</h1>
            <p class="lead text-muted">${pageCountdown}<span id="timeout"> 25 sec.</span></p>`
            );

            // Insert progressbar
            intro.innerHTML += `
        <div class="progress">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                id="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="animation-direction: reverse; width: 100%"
            >
            </div>
        </div>`;

            // Handle special case with only one app
            if (data.apps.length == 1) {
                redirectTo(data.apps[0].url);
                return;
            }

            // Rendering apps
            for (let i = 0; i < data.apps.length; i++) {
                const app = data.apps[i];
                const { title, icon, id, url } = app;
                const { selected } = data;
                const container = document.querySelector(".container .row");
                var appDescription = app.description;

                switch (userLang) {
                    case "cs":
                        appDescription = app.description.cs;
                        break;
                    default:
                        appDescription = app.description.en;
                        break;
                }

                // Fallback if description is not translated
                if (!appDescription) {
                    appDescription = app.description.en;
                }

                selected == id
                    ? (selectedApp = true) && (appRedirect = url)
                    : (selectedApp = false);

                container.innerHTML += `
            <div class="col mb-5">
                <div class="card h-100 shadow-sm mr-auto ml-auto">
                    <img class="bd-placeholder-img card-img-top p-5 border-bottom" src="${icon}" alt="${title}" />
                    <div class="card-body">
                        <a 
                        href="${url}" 
                        title="${title} - ${appDescription}" 
                        class="stretched-link d-inline-block" 
                        tabindex="${i + 1}"
                        >
                            <h2 class="h3 text-dark d-inline align-middle card-name">${title}</h2>
                        </a>
                        ${
                            selectedApp
                                ? "<span class='badge badge-primary align-middle'>default</span>"
                                : ""
                        }  
                        <p class="card-text text-truncate">
                            ${appDescription}
                        </p>
                    </div>
                </div>
            </div>`;
            }
            // Start timer and progress bar after apps render
            timerAndProgressBar();
        })
        .catch((error) => {
            console.error(error.message);
        });
});

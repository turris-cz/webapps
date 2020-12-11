/*
 * Copyright (c) 2020 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

const intro = document.getElementById("intro");
const progressBar = document.getElementById("progress-bar");
let appRedirect;

// Timer & Progress Bar
window.onload = () => {
    let start = true;
    setTimeout(() => {
        if (start) {
            start = false;
            let duration = 25;
            let progressWidth = 100;
            const bar = document.getElementById("progress-bar");
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
                    bar.style.width = progressWidth + "%";
                }
            }
        }
    }, 100);
};

const redirectTo = (url) => {
    window.location.assign(url);
};

// Fetching JSON
const getJSON = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

getJSON("js/apps.json")
    .then((data) => {
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
        intro.insertAdjacentHTML(
            "beforeBegin",
            `<h1>${pageTitle}</h1>
            <p class="lead text-muted">${pageCountdown}<span id="timeout"></span></p>`
        );

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
    })
    .catch((error) => {
        console.error(error);
    });

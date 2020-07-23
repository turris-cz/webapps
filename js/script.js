var timeout = document.getElementById("timeout");
var appRedirect;

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
        var userLang = navigator.language || navigator.userLanguage;
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
        timeout.insertAdjacentHTML(
            "beforeBegin",
            `<h1>${pageTitle}</h1>
                            <p>${pageCountdown}</p>`
        );

        // Rendering apps
        for (let i = 0; i < data.apps.length; i++) {
            const app = data.apps[i];
            const { title, icon, id, url } = app;
            const { selected } = data;
            var container = document.querySelector(".container");
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

            container.innerHTML += `<div class="cards">
                            <a href="${url}" title="${title} - ${appDescription}">
                                <div class="card-item ${
                selectedApp ? "selected" : ""
                }">
                                        <div class="card-icon" style="background-image:url(${icon})"></div>
                                    <div class="card-info">
                                        <h2 class="card-name">${title}</h2>
                                        <p>
                                            ${appDescription}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
        }
    })
    .catch((error) => {
        console.error(error);
    });

// Timer & Progress Bar
var width = 100;
var duration = 25;
window.onload = function () {
    var progressBar = document.getElementById("bar-status");
    timeout.textContent = ` ${duration} sec.`;
    var timer = setInterval(frame, 1000);
    function frame() {
        var step = width / duration;
        timeout.textContent = ` ${duration} sec.`;
        duration = Math.max(0, duration - 1);
        if (width <= 100) {
            progressBar.style.width = width + "%";
            if (width <= 1) {
                progressBar.style.opacity = "0";
            }
            width -= step;
        }
        if (duration == 0) {
            redirectTo(appRedirect);
        }
    }
    dynamicWidth();
};

function redirectTo(url) {
    location.replace(url);
}

function dynamicWidth() {
    const childCardNumber = document.getElementsByClassName("cards").length;
    var progressContainer = document.getElementById("progress");
    if (childCardNumber === 4) {
        progressContainer.style.maxWidth = "1285px";
    } else if (childCardNumber === 3) {
        progressContainer.style.maxWidth = "950px";
    }
}

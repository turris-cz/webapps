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
        var timeout = document.getElementById("timeout");
        var container = document.querySelector(".container");

        var userLang = navigator.language || navigator.userLanguage;
        console.log("The language is: " + userLang);

        const lang = data.langs;
        var pageTitle;
        var pageDescription;

        switch (userLang) {
            case "cs":
                pageTitle = lang.cs.title;
                pageDescription = lang.cs.description;
                break;
            default:
                pageTitle = lang.en.title;
                pageDescription = lang.en.description;
                break;
        }
        timeout.insertAdjacentHTML(
            "beforeBegin",
            `<h1>${pageTitle}</h1>
                            <p>${pageDescription}</p>`
        );

        // Rendering apps
        for (let i = 0; i < data.apps.length; i++) {
            const app = data.apps[i];
            const { title, icon, url, selected } = app;
            var appDescription = app.description;

            switch (userLang) {
                case "cs":
                    appDescription = app.description.cs;
                    break;
                default:
                    appDescription = app.description.en;
                    break;
            }

            container.innerHTML += `<div class="cards">
                            <a href="${url}" title="${title} - ${appDescription}">
                                <div class="card-item ${
                                    selected ? "selected" : ""
                                }">
                                        <img class="card-icon responsive" src="${icon}"></img>
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

// Timer
var width = 100;
var duration = 25;
window.onload = function () {
    var progressBar = document.getElementById("bar-status");
    var timeout = document.getElementById("timeout");
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
            // redirectTo("#");
        }
    }
};

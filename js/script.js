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
        var container = document.querySelector(".container");

        for (let i = 0; i < data.apps.length; i++) {
            const element = data.apps[i];
            const { title, icon, url, selected } = element;
            const appDescription = element.description.en;
            container.innerHTML += `<div class="cards">
                            <a href="${url}" title="${title} - ${appDescription}">
                                <div class="card-item ${
                                    selected ? "selected" : null
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
    timeout.textContent = duration;
    var timer = setInterval(frame, 1000);
    function frame() {
        var step = width / duration;
        timeout.textContent = duration;
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

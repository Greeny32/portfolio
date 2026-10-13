const btn_projects_left = document.getElementById("p_left").addEventListener("click", p_left);
const btn_projects_right = document.getElementById("p_right").addEventListener("click", p_right);
const texts_projects = document.getElementById("texts_projects");

const project_image = document.getElementById("project_image");

const f1_txt = "I created this in late 2023 using Python. It was my first time using Object Oriented Programming and API's. It renders graphs of F1 timings for every session and weekend in the season."
const crm_txt = "For my A-Level Computer Science coursework I created a <strong>Racing Car Management</strong> style game using Python. Inspired by other games such as Football Manager and F1 Manager. It allows users to control 1 of 10 teams, upgrade their cars and simulate races."
const wc_txt = 'This was my first site, a World Cup fixture/result viewer. You can see it <a href="https://greeny32.github.io/wc26/">here.</a> It solved a simple problem of easily knowing which games were happening each day, as conventional alternatives shown games past midnight on the following day.'
const wordle_txt = "To learn PyGame, I created a simple <strong>Wordle clone</strong> over a weekend. It uses an API to get a large collection of words."

const projects = ["wc", "f1", "wordle", "crm"];
const projects_text = [wc_txt, f1_txt, wordle_txt, crm_txt];
var p_pointer = 0;

function p_left() {
    // lower pointer or reverse to other side
    if (p_pointer == 0) {
        p_pointer = projects.length - 1;
    }
    else {
        p_pointer -= 1;
    }

    change_project_text();
}

function p_right() {
    // lower pointer or reverse to other side
    if (p_pointer == projects.length - 1) {
        p_pointer = 0;
    }
    else {
        p_pointer += 1;
    }

    change_project_text();
}

function change_project_text() {
    project_image.src = "img/projects/" + projects[p_pointer] + ".png";
    texts_projects.innerHTML = projects_text[p_pointer];
}

change_project_text();
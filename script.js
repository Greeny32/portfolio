// code to swap the buttons on the skills page.

const btn_left = document.getElementById("left").addEventListener("click", left);
const btn_right = document.getElementById("right").addEventListener("click", right);
const text = document.getElementById("skills_text");

const python_txt = "My best skill is <strong>Python</strong>. I have been programming using it for over 4 years and have created multiple pieces of coursework using it at both level 3 and level 4."
const html_txt = "<strong>HTML</strong> was one of the first 'languages' I ever used. Since then we were taught it at level 4, and I have used it (alongside base JS and CSS) to create this website."
const java_text = "I have a basic knowledge of <strong>Java</strong> after studying it in first-year."
const sql_text = "I learned <strong>SQL</strong> and databases at both A-Level and level 4. It is one of my strongest areas."
const typescript_text = "As I make this (October 2026) we are currently being taught <strong>Typescript</strong>. It is very similar to JS, which I am already good at. I will be making a project using this later in the semester."
const cisco_text = "At level 4, we had a hands-on module dedicated to <strong>Cisco</strong>. We followed their courses on cloud computing and cyber security. Finally we got hands on use with real Cisco equiptment in our lab as well as simulating it using Packet Tracer."


const skill_image = document.getElementById("img_skill");

const skills = ["python", "cisco", "html", "java", "typescript", "sql"];
const skills_text = [python_txt, cisco_text, html_txt, java_text, typescript_text, sql_text];
var pointer = 0;

function left() {
    // lower pointer or reverse to other side
    if (pointer == 0) {
        pointer = skills.length - 1;
    }
    else {
        pointer -= 1;
    }

    change_text();
}

function right() {
    // lower pointer or reverse to other side
    if (pointer == skills.length - 1) {
        pointer = 0;
    }
    else {
        pointer += 1;
    }

    change_text()
}

function change_text() {
    skill_image.src = "img/skills/" + skills[pointer] + ".png";

    text.innerHTML = skills_text[pointer];
}

change_text()

// Code to swap the image on the projects page. Very similar. Yes the variables are confusing...
const texts_projects = document.getElementById("texts_projects");

const project_image = document.getElementById("project_image");
const mobile_swap = document.getElementById("image_swap").addEventListener("click", p_right);

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

change_text();
change_project_text();

// Get HTML elements
const btn_left = document.getElementById("left");
const btn_right = document.getElementById("right");
const text = document.getElementById("skills_text");

const p_left = document.getElementById("p_left");
const p_right = document.getElementById("p_right");
const p_img = document.getElementById("project_image");
const p_text = document.getElementById("projects_text");

const skill_image = document.getElementById("img_skill");

// Add event listeners
btn_left.addEventListener("click", () => left("skill"));
btn_right.addEventListener("click", () => right("skill"));

p_left.addEventListener("click", () => left("project"));
p_right.addEventListener("click", () => right("project"));


// SKILLS

const python_txt = "My best skill is <strong>Python</strong>. I have been programming using it for over 4 years and have created multiple pieces of coursework using it at both level 3 and level 4.";

const html_txt = "<strong>HTML</strong> was one of the first 'languages' I ever used. Since then we were taught it at level 4, and I have used it (alongside base JS and CSS) to create this website.";

const java_text = "I have a basic knowledge of <strong>Java</strong> after studying it in first-year.";

const sql_text = "I learned <strong>SQL</strong> and databases at both A-Level and level 4. It is one of my strongest areas.";

const typescript_text = "As I make this (October 2026) we are currently being taught <strong>Typescript</strong>. It is very similar to JS, which I am already good at. I will be making a project using this later in the semester.";

const cisco_text = "At level 4, we had a hands-on module dedicated to <strong>Cisco</strong>. We followed their courses on cloud computing and cyber security. Finally we got hands on use with real Cisco equipment in our lab as well as simulating it using Packet Tracer.";

const skills = ["python", "cisco", "html", "java", "typescript", "sql"];

const skills_text = [
    python_txt,
    cisco_text,
    html_txt,
    java_text,
    typescript_text,
    sql_text
];

let skills_pointer = 0;


// PROJECTS

// Keep your existing project descriptions here
const wc_txt = "Your WC project description";
const f1_txt = "Your F1 project description";
const wordle_txt = "Your Wordle project description";
const crm_txt = "Your CRM project description";

const projects = ["wc", "f1", "wordle", "crm"];

const projects_text = [
    wc_txt,
    f1_txt,
    wordle_txt,
    crm_txt
];

let p_pointer = 0;


// NAVIGATION

function left(type) {

    if (type === "skill") {
        skills_pointer--;

        if (skills_pointer < 0) {
            skills_pointer = skills.length - 1;
        }
    }

    else if (type === "project") {
        p_pointer--;

        if (p_pointer < 0) {
            p_pointer = projects.length - 1;
        }
    }

    change_text(type);
}


function right(type) {

    if (type === "skill") {
        skills_pointer++;

        if (skills_pointer >= skills.length) {
            skills_pointer = 0;
        }
    }

    else if (type === "project") {
        p_pointer++;

        if (p_pointer >= projects.length) {
            p_pointer = 0;
        }
    }

    change_text(type);
}


// UPDATE DISPLAY

function change_text(type) {

    if (type === "skill") {

        skill_image.src = "img/skills/" + skills[skills_pointer] + ".png";

        text.innerHTML = skills_text[skills_pointer];

    }

    else if (type === "project") {

        p_img.src = "img/projects/" + projects[p_pointer] + ".png";

        p_text.innerHTML = projects_text[p_pointer];

    }

}


// INITIALISE BOTH CAROUSELS

change_text("skill");
change_text("project");

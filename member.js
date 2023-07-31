function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberDiv = document.getElementById("memberDiv");
    var skillsDiv = document.getElementById("skillsDiv");
    var projectsDiv = document.getElementById("projectsDiv");
    var contactDiv = document.getElementById("contactDiv");
    member.style.color = "#fff";
    skills.style.color = "#000";
    projects.style.color = "#000";
    contact.style.color = "#000";
    memberDiv.style.display = "block";
    skillsDiv.style.display = "none";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "none";
}
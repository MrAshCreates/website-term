let isLoggedIn = false;
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal(){
  createText("Starting localhost server...");
  await delay(1500);
  createText("Welcome User");
  await delay(700);
  createText("You can run several commands:");
  
  createCode("help", "shows all the commands and what they do");
  createCode("whoami", "prints information about the developer"); 
  createCode("resume", "download the developer's resume");
  createCode("social", "access the developer's social media profiles");
  createCode("contact", "get in touch with the developer");
  createCode("clear", "clean the terminal");
  createCode("blog", "takes you to my blog site");

  await delay(500);
  new_line();
}

function new_line() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.setAttribute("class", "type");
  p.setAttribute("class", "terminal-input");
  p.textContent = "[usr ~]$ ";
  const input = document.createElement("input");
  
  
  div.appendChild(p);
  div.appendChild(input);
  app.appendChild(div);
  
  input.focus();
}


function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("whoami", "prints information about the developer");
    createCode("fry ends", "takes you to a page of my friends");
    createOldCode("portfolio", "view the developer's programming and game development work");
    createCode("resume", "download the developer's resume");
    createCode("social", "access the developer's social media profiles");
    createCode("contact", "get in touch with the developer (email form)");
    createCode("clear", "clean the terminal");
    createCode("blog", "takes you to my blog site");

    
  }
    
  else if(value === "fry ends"){
    trueValue(value);
    createText("<a href='https://mrashcreates.xyz/fryends/ash' target='_blank'><i class='fab fa-github white'></i> Go to my profile. </a>")
    createText("<a href='https://mrashcreates.xyz/fryends/danny' target='_blank'><i class='fab fa-github white'></i> Go to Danny's profile. </a>")
    createText("<a href='https://mrashcreates.xyz/fryends/bert' target='_blank'><i class='fab fa-github white'></i> Go to Bert's profile. </a>")
    createText("<a href='https://mrashcreates.xyz/fryends/bailey' target='_blank'><i class='fab fa-github white'></i> Go to Bailey's profile. </a>")

  }
  else if(value === "git link"){
    trueValue(value);
    createText("<a href='https://github.com/MrAshCreates' target='_blank'><i class='fab fa-github white'></i> github.com/MrAshCreates</a>")
  }
  else if(value === "blog"){
    trueValue(value);
    createText("<a href='https://asherwinstead.dev' target='_blank'><i class='fab fa-github white'></i> Taking you to my blog :)</a>")
    await delay(1000);
    window.open('https://asherwinstead.dev', '_blank');
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hello! I'm Asher Winstead, a passionate IT specialist, programmer, and game developer.");
    createText("I specialize in creating interactive and engaging web applications, as well as developing entertaining and immersive games. I also Fix all kinds of devices very cheaply on the side");
    createText("My primary tools include JavaScript, HTML/CSS, React, Node.js, UnReal, and Unity.");
  }
  else if(value === "portfolio"){
  trueValue(value);
    createText("Welcome to my portfolio!");
    createText("Here are some of my programming and game development projects:");
    
    // List your projects here
    
    createText("1. : <a href='https://asherwinstead.dev' target='_blank'>Blog site</a>");
    createText("Currently only displaying my blog website as I haven't commited to the other projects in a while so they are outdated and a bad representation of my abilities");
    // You can add more projects as needed
    
    createText("Feel free to explore!");
  }
  
  else if(value === "resume"){
  trueValue(value);
  createText("Download my resume: <a href='./Resume.pdf' target='./Resume.pdf'>Download Resume</a>");
  await delay(1000);
  window.open('https://mrashcreates.xyz/Resume.pdf', '_blank');
  }

else if (value === "contact") {
  trueValue(value);

  const email = window.prompt("Enter your email:");
  const subject = window.prompt("Enter the subject:");
  const message = window.prompt("Enter your message:");

  if (email && subject && message) {
    const mailtoLink = `mailto:mrashcreates.xyz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  } else {
    createText("Please provide valid email, subject, and message.");
  }
}

  else if(value === "social" || value === "history"){
    trueValue(value);
    createText("Connect with me on social media:");
    createText("Github: <a href='https://github.com/MrAshCreates' target='_blank'>MrAshCreates</a>");
    createText("Instagram: <a href='https://www.instagram.com/asherwinstead/?hl=en' target='_blank'>@asherwinstead</a>");
    createText("LinkedIn: <a href='https://www.linkedin.com/in/asher-winstead-a89a8325b/' target='_blank'>Asher Winstead</a>");
    createText("Twitter: <a href='https://x.com/MrAshCreates' target='_blank'>@MrAshCreates</a>");
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  
else if (value.startsWith("login ")) {
  trueValue(value);

  const password = value.split(" ")[1];

  const verify = await fetch('/verify-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });

  const result = await verify.json();

  if (result.verified) {
    createText("Login successful!");
    runAfter2FASuccess(); // You can rename this to runAfterLogin()
  } else {
    createText("Incorrect password.");
  }
}
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;

  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createOldCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `<span style='text-decoration: line-through;'>${code} </span><br/><span class='text' style='text-decoration: line-through;'> ${text} </span>`;
  app.appendChild(p);
}
open_terminal();

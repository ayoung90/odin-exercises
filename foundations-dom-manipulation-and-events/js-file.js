const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const redPTag = document.createElement("p");
redPTag.style.color = "Red";
redPTag.textContent = "Hey I'm red!";

container.appendChild(redPTag);

//an <h3> with blue text that says “I’m a blue h3!”
const blueH3Tag = document.createElement("h3");
blueH3Tag.style.color = "Blue";
blueH3Tag.textContent = "Hey I'm a blue h3!";

container.appendChild(blueH3Tag);

//a <div> with a black border and pink background color with the following elements inside of it:
const divBlack = document.createElement("div");
divBlack.style.backgroundColor = "Pink";
divBlack.style.borderColor = "Black";
divBlack.style.borderStyle = "solid";
divBlack.style.borderWidth = "3px";

container.appendChild(divBlack);

//another <h1> that says “I’m in a div”
const divH1Tag = document.createElement("h1");
divH1Tag.textContent = "I’m in a div";
divBlack.appendChild(divH1Tag);

//a <p> that says “ME TOO!”
const divPTag = document.createElement("p");
divPTag.textContent = "ME TOO!";
divBlack.appendChild(divPTag);

//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const btn = document.querySelector("#btn");

function clickListener(param){
    console.log(param);
}

var isSet = false;

btn.addEventListener('click',function(e) {
    if(!isSet){

        e.target.style.backgroundColor = "blue";
        e.target.style.color = "white";
        isSet = true;
    }else{
        e.target.removeAttribute('style');
        isSet = false;
    }

});

//btn.onclick = () => alert("Hello world (from JS file)!");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        console.log(button.id);
    });

});

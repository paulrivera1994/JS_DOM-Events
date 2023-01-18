console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1Tag = document.getElementById("node1");
node1Tag.textContent =
  "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2Tag = document.getElementsByClassName("node2");
node2Tag[0].textContent =
  "I used the getElementsByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Tags = document.getElementsByTagName("h3");
// for (let i = 0; h3Tags.length; i++) {
//   h3Tags[i].textContent =
//     "I used the getElementsByTagName('h3') method to access all of these";
// }
h3Tags[0].textContent =
  "I used the getElementsByTagName('h3') method to access all of these";
h3Tags[1].textContent =
  "I used the getElementsByTagName('h3') method to access all of these";
h3Tags[2].textContent =
  "I used the getElementsByTagName('h3') method to access all of these";
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paragraph = document.createElement("p");
paragraph.textContent =
  "This node was created using the createElement() method";
const paraId = document.getElementById("parent");
// TODO: Append the created node to the parent node using the element.appendChild() method
paraId.appendChild(paragraph);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const aTagCreate = document.createElement("a");
aTagCreate.textContent = "I am an <a> tag";
aTagCreate.style.color = "white";
// BONUS: Add a link href to the <a>
aTagCreate.href = "https://www.google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
paraId.insertBefore(aTagCreate, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const exercise3Id = document.getElementById("exercise-container3");
const pId3 = document.getElementById("N1");
const newPara = document.createElement("p");
newPara.textContent = "New Child Node";
exercise3Id.replaceChild(newPara, pId3);
// TODO: Remove the "New Child Node"
newPara.remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
arrToUl(list);
function arrToUl(list) {
  const exer4Header = document.createElement("h4");
  const div = document.getElementById("container");
  const ul = document.createElement("ul");
  exer4Header.textContent = "Grocery List";
  div.append(exer4Header);
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(list[i]));
    console.log(ul.appendChild(li));
    div.appendChild(ul);
  }
}

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
  const modalDiv = document.createElement("div");
  const modalCard = document.createElement("div");
  modalCard.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  modalDiv.id = "modal";
  modalCard.classList.add("modal-card");

  //Append it to the DOM somewhere
  modalDiv.appendChild(modalCard);
  document.querySelector(".exercise5").appendChild(modalDiv);

  // Creating the close button for the modal
  const modalCloseBtn = document.createElement("btn");
  modalCloseBtn.textContent = "x";
  modalCloseBtn.style.border = "3px solid teal";
  modalCloseBtn.style.fontSize = "1.5rem";
  modalCloseBtn.style.background = "teal";
  modalCard.append(modalCloseBtn);

  modalDiv.addEventListener("click", (event) => {
    if (event.target == modalDiv) {
      modalDiv.remove();
    }
  });
}
// show();

// Append the eventlistener to the button, so that the user can click to see the modal appear
// What should do the listening?
// What event should it listen for?
// What should happen when it hears the event?

// Select the button
const displayModalBtn = document.querySelector("#btn");

// Create and add the event listener
displayModalBtn.addEventListener("click", show);

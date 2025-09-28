// Example 1
document
    .getElementById("changeTextButton")
    .addEventListener('click', function () {
        let paragraph = document.getElementById("myParagraph");
        paragraph.textContent = "The paragraph is changed"
    })


// Example 2
document
    .getElementById("highlightFirstCity")
    .addEventListener('click', function () {
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add("highlight")
    })


// Example 3
document
    .getElementById("changeOrder")
    .addEventListener('click', function() {
        let coffeeOrder = document.getElementById("coffeeType");
        coffeeOrder.textContent = "Espresso"
    })


// Example 4
document
    .getElementById("addNewItem")
    .addEventListener('click', function() {
        let newItems = document.createElement("li")
        newItems.textContent = "Eggs"
        
        document.getElementById("shoppingList").appendChild(newItems)
    })


// Example 5
document
    .getElementById("removeLastTask")
    .addEventListener('click', function() {
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove()
    })


// Example 6
document
    .getElementById("clickMeButton")
    .addEventListener('click', function() {
        alert("chaiaurcode")
    })


// Example 7
document
    .getElementById("teaList")
    .addEventListener('click', function(event) {
        if (event.target && event.target.matches('.teaItem')) {
            alert("You seclected: " + event.target.textContent)
        }
    })


// Example 8
document
    .getElementById("feedBackForm")
    .addEventListener('submit', function(event) {
        event.preventDefault();
        let feedback = document.getElementById("feedBackInput").value;
        let feedbackLabel = document.querySelector("label.feedBackInput");
        console.log("Feedback: " + feedback);
        // console.log("Feedback: " + feedbackLabel);
        document.getElementById("feedBackDisplay").textContent = `Feedback is: ${feedback}`
        
    })


// Example 9
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("domStatus").classList.add("highlight").textContent = `DOM Fully Loaded`
})


// Example 10
document
    .getElementById("toggleHighlight")
    .addEventListener('click', function() {
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("highlight")
    })
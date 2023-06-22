const mainContainer = document.querySelector(".main-container")
const submitBtn = document.querySelector(".submit-btn")
const ratingSection = document.querySelector(".rating-section")
const ratingItems = document.querySelectorAll(".rating-item")
let finalMessage = ""
let isSelected = false

ratingSection.addEventListener("click", event => {
    if(event.target.id) {
        isSelected = true
        setFinalMessageHtml(event.target.id)

    }
})

document.addEventListener("click", event => {
    if(event.target.id == "return-btn") {
            window.location.reload()
    }
})

submitBtn.addEventListener("click", ()=>{
    if(isSelected) {
        render()
    } else {
        alert("Please, select a number rating, first!")
    }
    
})

ratingItems.forEach(ratingItem => {
    // For each rating item add an event listener
    ratingItem.addEventListener("click", () => {

        // if a rating item is selected then remove the active class from all items
        ratingItems.forEach(item => item.classList.remove('active'))
        //then add the active class just for the current selected item
        ratingItem.classList.add("active")
    })
})

function setFinalMessageHtml(ratingId) {
    finalMessage = `
    <div class="final-message-container">
        <img class="illustration-thank-you" alt="an icon that represents a gray phone completing some operations" src="./images/illustration-thank-you.svg">
        <p class="selected-rating-message">
        You selected ${ratingId} out of 5
        </p>
        <h2 class="thank-you-title"> Thank you!</h2>
        <p class="appreciation-text">  We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!</p>
        <button class="return-btn" type="button" id="return-btn">Rate again</button>
    </div>
  ` 
}

// add and render the final message in the main-container after the submit button has been pressed
function render() {
    mainContainer.innerHTML = finalMessage
}





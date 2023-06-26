const mainContainer = document.querySelector(".main-container")
const ratingForm = document.querySelector(".rating-form")
let finalMessage = ""

ratingForm.addEventListener("submit", () => 
{   // check if the user has selected a rating number before submiting
    if(!document.querySelectorAll('input[name="rating"]:checked').length) {
        /*querySelectorAll('input[name="rating"]:checked') returns 
          a collection with all the checked radio buttons*/
        alert("Please, select a rating number, first!")
    } else {
        setFinalMessageHtml(document.querySelector('input[name="rating"]:checked').value)
        /*querySelector('input[name="rating"]:checked').value returns the 
        value of the checked radio button */
        render()
    }   
}) 

function setFinalMessageHtml(ratingNumber) {
    finalMessage = `
    <div class="final-message-container">
        <img class="illustration-thank-you" alt="an icon that represents a gray phone completing some operations" src="./images/illustration-thank-you.svg">
        <p class="selected-rating-message">
        You selected ${ratingNumber} out of 5
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

document.addEventListener("click", event => {
    if(event.target.id == "return-btn") {
        window.location.reload()
    }
})





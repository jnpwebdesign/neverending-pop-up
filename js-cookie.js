
const modalElement = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const popUpForm = document.getElementById("name-email-form");
const acceptBtn = document.getElementById("accept-btn");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");


setTimeout(function(){
    modalElement.style.display = "inline"
}, 1500);


modalCloseBtn.addEventListener("click", function(e){
    console.log("no way!")
})

acceptBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("form submitted");
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>
    `
    setTimeout(function(){
        document.getElementById("upload-text").textContent = "Making the sale..."
     }, 1500);

    const consentFormData = new FormData(popUpForm);

    const fullName = consentFormData.get("full-name");
    const emailAddress = consentFormData.get("email-address");

    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
                `
        document.getElementById("modal-close-btn").disabled = false;
     }, 3000)
});

declineBtn.addEventListener("mouseenter", function(){
    modalChoiceBtns.classList.toggle("reverse");
})

modalCloseBtn.addEventListener("click", function(e){
    modalElement.style.display = "none"
})


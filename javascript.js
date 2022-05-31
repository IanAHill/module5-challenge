var saveButton9 = document.getElementById("save-button-9");
var hourBlocks = document.querySelectorAll("#hour");
var currentDate = document.getElementById("currentDay");


function saveEvent(event){ 
    var eventData = [];

    hourBlocks.forEach((block)=>{
        var userText = block.querySelector(".description").value;
        console.log(userText);
        var time = block.querySelector(".hour").innerHTML;
        console.log(time);
    var saveData = {
        hour: time,
        text: userText
    } 
    eventData.push(saveData);
    })

    localStorage.setItem("eventInfo", JSON.stringify(eventData));   
}



function setTimeBlockColors() {
    //get current hour from moment.js
    var currentTime = moment().format('LT');
    hourBlocks.forEach(block=>{
        var time = block.querySelector(".hour").innerHTML;
        var textArea = block.querySelector(".description");
        console.log(currentTime);
        if (time < currentTime){
           
            textArea.classList.add("past");
        } else if (time === currentTime) {
      
            textArea.classList.add("present");
        } else {
 
            textArea.classList.add("future");
        }
    
    })
}


  


currentDate.textContent = moment().format("MMM Do YYYY");

var savedData = JSON.parse(localStorage.getItem("eventInfo"));


hourBlocks.forEach((block, idx)=>{

    block.querySelector(".description").value = savedData[idx].text;

})
$('.saveBtn').on('click', saveEvent); 

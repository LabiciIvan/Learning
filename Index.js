
function Time() {
    document.getElementById("Time").innerHTML = Date()
    console.log('Time')
}

document.getElementById("Time").style.color = "Black"
document.getElementById("Time").style.backgroundColor = "Orange"
document.getElementById("Time").style.fontFamily = "sans serif"
document.getElementById("Time").style.fontSize = "20px"
document.getElementById("Time").style.borderColor = "None"



function Request() {
    document.getElementById("Request").innerHTML = "Request Sended"
    console.log('Request Sended')
}

function Button() {
    let Hide = document.querySelector(".btn-primary-tree").style.visibility = "hidden"
    console.log('Button is hide')

}

function Error() {
    let Error = document.querySelector(".btn-primary-four").innerHTML = "Error"
    alert("Sorry,we can sing in/log in due internal problem")
}
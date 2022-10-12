let start_from_first = 0;
let change_color = () => {
    let color_collection = ["grey", "lightblue", "red", "green"];
    document.getElementById("mainDiv").style.backgroundColor = color_collection[start_from_first];
    //Iteracija
    start_from_first = (start_from_first + 1) % color_collection.length;
}
setInterval(change_color, 1000);


//Click me code
document.getElementById("btn1").addEventListener("click", () => alert("Welcome"))


//Change text code
let changetxt_btn = document.getElementById("btn2");
let first_paragraph = document.getElementById("hitochange");

changetxt_btn.addEventListener("click", () => {
    first_paragraph.style.backgroundColor = "white"
    first_paragraph.style.fontSize = "30px"
    first_paragraph.innerText = "Text has changed"
});

//Picture(onmouseover) code
let image = document.getElementById("img1");
image.onmouseover = () => image.setAttribute("src", "Resursi/do.jpg");


//Gender code
let male = document.getElementById("radio1");
let female = document.getElementById("radio2");
let genderBtn = document.getElementById("gender-checker");
genderBtn.onclick = () => {
    if(male.checked){
        document.getElementById("gender1").hidden = false;
    }else if(female.checked){
        document.getElementById("gender2").hidden = false;
    }else{
        document.getElementById("!selected").hidden = false;
    }
}


//Form code
function getusername(){
    let fname = document.getElementById("fname").value;
    let fname_display = document.getElementById("result1");
    fname_display.textContent = fname;
    let lname = document.getElementById("lname").value;
    let lname_display = document.getElementById("result2");
    lname_display.textContent = lname;
    let animal = document.getElementById("animal").value;
    let animal_display = document.getElementById("result3");
    animal_display.textContent = animal;
}
let submit_button = document.getElementById("showbtn");
submit_button.addEventListener("click", getusername);
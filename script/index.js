const loadLess = () => {
    fetch("https://openapi.programming-hero.com/api/plants") // promise of response
    .then((res) => res.json()) // promise for thr json data
    .then((json) => displayLesson(json.data));
};
const displayLesson = (lessons) => {
// 1. get the container & empty 
const levelContainer =document.getElementById("level-container");
levelContainer.innerHTML = "";
// 2. get into every lessons
for(let lesson of lessons) {
// 3. create Element
const btnDiv =document.createElement("div");
btnDiv.innerHTML = ``;
}
    
    // 4. append into container
};
loadLess();

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayLessons(json.categories))
};
const displayLessons = (lessons) => {
    // 1. get the container & empty 
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML + "";

    // 2. get into evey lessons 
    for (let lesson of lessons) {
       console.log(lesson);
        // 3. create Element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button class="btn btn-outline  ">
         ${lesson.category_name}
        </button>
        `;
    //    // 4. append into container 
       levelContainer.append(btnDiv);
    }
         
         
};
loadLessons();



//--- item 2----///




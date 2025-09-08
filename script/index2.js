const fruitTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayFruits(json.plants));
};
const displayFruits = (fruits) => {
    // 1. get the container & empty 
    const fruitsContainer = document.getElementById("title-design");
    fruitsContainer.innerHTML = "";

    // 2. get into evey lessons
    for(let fruit of fruits) {
        console.log(fruit);

        // 3. create Element 
        const divBtn = document.createElement("div");
        divBtn.innerHTML = `` ;
        //    // 4. append into container 
        fruitsContainer.append(divBtn);
    }
};
fruitTrees();
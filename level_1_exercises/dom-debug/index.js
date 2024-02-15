// debug dom project for v-school, menoko og, 1-5-24
// original code provided in case need to restart at some point during debugging.
// const colors = ["red", "blue", "green"]

// document.getElementById("add").addEventListener("onclick", function(e){
//     const subItem = createSubItem(e)
//     document.getElementById("list").appendChild(subItem)
// })

// function createDropDown(){
//     const dropDown = document.createElement("select")
//     for (let i = 0; i < colors; i++){
//         const option = createElement("option") 
//         option.innerHTML = colors[i]
//         option.value = colors[i]
//         dropDown.append(option)
//     }
//     dropDown.addEventListener("onchange", function(e){
//         e.target.parent.backgroundColor = e.target.value
//     })
//     return dropDown
// }

// function createSubItem(e){
//     const subItem = document.createElement("div")
//     var subItemValue = document.getElementById("input")
//     subItem.textContent = subItemValue
//     const dropDown = createDropDown()
//     subItem.appendChild(dropDown)
//     subItem.setAttribute("class", "subItem")
//     return subItem
// }


// new code for project after debugging it
const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function () {
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
});

function createDropDown() {
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option");
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.appendChild(option);
    }
    dropDown.addEventListener("change", function (e) {
        e.target.parentElement.style.backgroundColor = e.target.value;
    });
    return dropDown;
}

function createSubItem() {
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input").value;
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}




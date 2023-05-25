let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

burgerBtn.addEventListener("click", () => {
    console.log(CanSeeMenu);

    if(!CanSeeMenu){
        mainMenu.classList.add("show-menu");
        // canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        // canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
    mainMenu.classList.remove("show-menu");
    // canSeeMenu = false;
})
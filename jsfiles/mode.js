function toggleModeFunction() {
    // Change Body
    let bodyElement = document.body;
    bodyElement.classList.toggle("develop-body");

    //Change Banner
    let bannerElement = document.getElementById("banner");
    bannerElement.classList.toggle("develop-banner");
    
    //Change sidebar
    let sidebarElement = document.getElementById("sidebar");
    sidebarElement.classList.toggle("develop-left-sidebar");

    //Change sidebar header
    let sidebarHeaderElement = document.getElementById("sidebar-header");
    sidebarHeaderElement.classList.toggle("develop-left-sidebar-header");

    //Change sidebar name
    let sidebarNameElement = document.getElementById("sidebar-name");
    sidebarNameElement.classList.toggle("develop-left-sidebar-name");

    //Change color for svg design icon
    let svgDesignIcon = document.getElementById("design-mode-svg")
    svgDesignIcon.classList.toggle("design-mode-off")

    //Change color for svg design icon
    let svgDevelopIcon = document.getElementById("develop-mode-svg")
    svgDevelopIcon.classList.toggle("develop-mode-on")

    //Change label for mode
    let paragraphElement = document.getElementById("mode-name");
    if ( paragraphElement.textContent === "Design" ) {
        paragraphElement.textContent = "Develop";
        } else if ( paragraphElement.textContent === "Develop" ) {
            paragraphElement.textContent = "Design";
        }
}






document.addEventListener("DOMContentLoaded", getHeader);

//henter menu fra header.html ind på sidens header-tag

async function getHeader() {
    let header

    //header.html targetes, og indholdet fetches ind på værdien "let header"
    let headerUrl = "header.html";
    let headerData = await fetch(headerUrl);
    header = await headerData.text();

    //Header-tagget targetes, og indholdet heri bliver = html'en fra "let header"
    document.querySelector("header").innerHTML = header;

    //næste funktioner i rækken kaldes
    constructMenu();
    getFooter();
}



//konstruerer burgermenuen
function constructMenu() {

    const menuBtn = document.querySelector(".menu_btn");
    const menuNav = document.querySelector("#menu");
    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        if (menuOpen == false) {
            menuBtn.classList.add("open");
            menuNav.classList.remove("hidden");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuNav.classList.add("hidden");
            menuOpen = false;
        }
    })


}






//hent footer ind på alle sider//

async function getFooter() {
    let footer
    let footerUrl = "footer.html";
    let footerData = await fetch(footerUrl);
    footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;


}

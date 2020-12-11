document.addEventListener("DOMContentLoaded", getHeader);

//hent menu ind på alle sider//

async function getHeader() {
    let header
    let headerUrl = "header.html";
    let headerData = await fetch(headerUrl);
    header = await headerData.text();

    document.querySelector("header").innerHTML = header;
    console.log(getHeader);
    getFooter();


}

//hent footer ind på alle sider//

async function getFooter() {
    let footer
    let footerUrl = "footer.html";
    let footerData = await fetch(footerUrl);
    footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
    console.log(getFooter);

}

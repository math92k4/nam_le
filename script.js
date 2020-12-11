//hent footer ind på alle sider//

async function getFooter() {
    let footer
    let footerUrl = "footer.html";
    let footerData = await fetch(footerUrl);
    footer = await footerData.text();

    document.querySelector("footer").innerHTML = footer;

}

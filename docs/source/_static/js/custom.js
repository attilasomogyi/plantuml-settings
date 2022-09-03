const setFooter = () => {

    let footer = document.querySelector('footer');
    let navigation = footer.querySelector('[role="navigation"]');
    let contentinfo = footer.querySelector('[role="contentinfo"]');
    let hr = "<hr />";
    let footerValue = navigation + hr + contentinfo;
    footer.innerHTML = footerValue;

}

document.addEventListener("load", setFooter);
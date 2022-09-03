const setFooter = () => {

    let footer = document.querySelector('footer');
    let navigation = footer.querySelector('[role="navigation"]');
    let contentinfo = footer.querySelector('[role="contentinfo"]');
    let hr = "<hr />";
    footer.innerHTML = navigation + hr + contentinfo;

}

document.addEventListener("load", setFooter);
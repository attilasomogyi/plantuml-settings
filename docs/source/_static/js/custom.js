const setFooter = () => {

    let footer = document.querySelector('footer');
    let navigation = footer.querySelector('[role="navigation"]').outerHTML;
    let contentinfo = footer.querySelector('[role="contentinfo"]').outerHTML;
    let hr = "<hr />";
    footer.innerHTML = navigation + hr + contentinfo;

}

document.addEventListener("load", setFooter);
const setFooter = () => {

    let footer = document.querySelector('footer');
    let navigation = footer.querySelector('[role="navigation"]');
    let contentinfo = footer.querySelector('[role="contentinfo"]');
    footer.removeChild(footer.childNodes)
    footer.appendChild(navigation);
    footer.appendChild("<hr />");
    footer.appendChild(contentinfo);

}

document.addEventListener("load", setFooter);
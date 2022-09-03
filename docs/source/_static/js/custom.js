const setFooter = () => {

    let footer = document.querySelector('footer');
    let navigation = footer.querySelector('[role="navigation"]');
    let contentinfo = footer.querySelector('[role="contentinfo"]');
    footer.appendChild(navigation);
    footer.appendChild(contentinfo);

}

document.addEventListener("load", setFooter);
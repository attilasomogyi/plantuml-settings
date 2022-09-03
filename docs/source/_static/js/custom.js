const setFooter = () => {

    let footer = document.querySelector('footer');
    const navigation = footer.querySelector('[role="navigation"]');
    const contentinfo = footer.querySelector('[role="contentinfo"]');
    footer.innerHTML = '';
    footer.appendChild(navigation);
    const hr = document.createElement("hr");
    footer.appendChild(hr);
    footer.appendChild(contentinfo);

}

window.addEventListener('load', (event) => {
    window.setTimeout(setFooter(), 900);
  });
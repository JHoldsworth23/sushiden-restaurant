function footerComponent() {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.classList.add('footer-section');

    const date = new Date();
    footer.innerHTML = `
        <p>Copyright ©️ ${date.getFullYear()} JHoldsworth23</p>
        <a href="https://github.com/JHoldsworth23" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
    `;

    content.appendChild(footer);

    return content;
}

export default footerComponent;
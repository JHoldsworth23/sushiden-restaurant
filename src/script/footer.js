const footerComponent = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer-section');

    const date = new Date();
    footer.innerHTML = `
        <p>Copyright ©️ ${date.getFullYear()} JHoldsworth23</p>
        <a href="https://github.com/JHoldsworth23" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
    `;

    return footer;
}

export default footerComponent;
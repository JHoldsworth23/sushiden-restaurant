const source = (url) => {
    const source = document.createElement('a');
    source.classList.add('source');
    source.href = url;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = 'image source';

    return source;
}

export default source;
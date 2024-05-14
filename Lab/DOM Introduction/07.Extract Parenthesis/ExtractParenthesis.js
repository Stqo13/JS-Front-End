function extract(content) {
    let contentElement = document.getElementById('content');

    let matches = contentElement.textContent.matchAll(/\((?<text>[A-z ]+)\)/g);

    let text = Array
        .from(matches)
        .map(match => match[1])
        .join('; ');

    return text;
}
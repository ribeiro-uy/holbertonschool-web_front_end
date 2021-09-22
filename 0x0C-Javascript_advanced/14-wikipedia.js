function createElement(data) {
    let element = document.getElementsByTagName('body')[0];

    let p = document.createElement('p');
    let text = document.createTextNode(data);

    p.appendChild(text);
    element.appendChild(p);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    req.send();
}
queryWikipedia(createElement);

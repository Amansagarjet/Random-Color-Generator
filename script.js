let row = document.querySelector('.row');
let elem = document.createElement('div');
row.appendChild(elem);
let att = document.createAttribute('class');
att.value = "col";
elem.setAttributeNode(att);
let red = 0;
let green = 0;
let blue = 0;
for (let i = 0; i < 10000; i++) {
    let newDiv = elem.cloneNode(true);
    row.appendChild(newDiv);
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    newDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    newDiv.textContent = `RGB(${red}, ${green}, ${blue})`;
}
row.removeChild(elem);

let divs = document.querySelectorAll('.row .col');
divs.forEach((div) => {
    div.addEventListener('click', function () {
        let textToCopy = div.textContent;
        let textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
});

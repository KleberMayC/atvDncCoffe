function showButton(i) {

    var btnCardCSS = document.querySelector(`#btn-card-${i}`);

    if (i == 1) {
        btnCardCSS.style.visibility = 'visible';
    }
    else if (i == 2) {
        btnCardCSS.style.visibility = 'visible';
    }
    else if (i == 3) {
        btnCardCSS.style.visibility = 'visible';
    }
    else {
        btnCardCSS.style.visibility = 'visible';
    }
}

function hideButton(i) {

    var btnCardCSS = document.querySelector(`#btn-card-${i}`);

    if (i == 1) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else if (i == 2) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else if (i == 3) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else {
        btnCardCSS.style.visibility = 'hidden';
    }
}
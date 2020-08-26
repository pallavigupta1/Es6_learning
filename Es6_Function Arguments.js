function makeAjaxReq(url, method = 'GET') {
    return method;
}

makeAjaxReq('google.com', null);
makeAjaxReq('google.com', 'POST');


// Exmple 2 
function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
}

//   Exmple 3

function addOffset(style) {
    if (!style) {
        style = {};
    }

    style.offset = '10px';

    return style;
}
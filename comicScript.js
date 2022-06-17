var totalPages = 24; //it means 3 pages(2 on each leaf)
let n = 1;
let snd = new Audio('whoosh.mp3');
let iframe1, iframe2, iframe3;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setPage(num) { //sets the nth page
    snd.play();
    let leftpage = num;
    let rightpage = num + 1;
    if (leftpage == 1) {
        backBtn.style.display = "none";
    }
    else {
        backBtn.style.display = "block";
    }

    if (rightpage == totalPages) {
        nextBtn.style.display = "none";
    }
    else {
        nextBtn.style.display = "block";
    }
    hideallpages();
    let leftElem = document.getElementsByClassName("page")[num - 1];
    let rightElem = document.getElementsByClassName("page")[num]

    leftElem.style.display = "block";
    rightElem.style.display = "block";

    leftElem.classList.add("leftPage");
    rightElem.classList.add("rightPage");

    // leftPage.src = `./assets Pages/page ${num}.png`;
    // rightPage.src = `./assets Pages/page ${num + 1}.png`;

    if (num == 11) {

        playgame1id.style.display = "block";
    }
    else {
        playgame1id.style.display = "none";
        try {
            iframe1.remove();

        }
        catch (err) {
            console.log("iframe1 not found");
        }

        try {
            iframe2.remove();

        }
        catch (err) {
            console.log("iframe2 not found");
        }
        try {
            iframe3.remove();

        }
        catch (err) {
            console.log("iframe3 not found");
        }

    }
    if (num == 15) {
        playgame2id.style.display = "block";
    }
    else {
        playgame2id.style.display = "none";
        try {
            iframe1.remove();

        }
        catch (err) {
            console.log("iframe1 not found");
        }

        try {
            iframe2.remove();

        }
        catch (err) {
            console.log("iframe2 not found");
        }
        try {
            iframe3.remove();

        }
        catch (err) {
            console.log("iframe3 not found");
        }

    }
    if (num == 21) {

        playgame3id.style.display = "block";
    }
    else {
        playgame3id.style.display = "none";
        try {
            iframe1.remove();

        }
        catch (err) {
            console.log("iframe1 not found");
        }

        try {
            iframe2.remove();

        }
        catch (err) {
            console.log("iframe2 not found");
        }
        try {
            iframe3.remove();

        }
        catch (err) {
            console.log("iframe3 not found");
        }

    }
}

function hideallpages() {
    for (let i = 0; i < totalPages; i++) {
        let elem = document.getElementsByClassName("page")[i];
        elem.style.display = "none";
        elem.classList.remove("leftPage");
        elem.classList.remove("rightPage");

    }
}

function goBack() {
    n = n - 2; -
        setPage(n)
}

function goNext() {
    n = n + 2;
    setPage(n)
}

function playgame1() {
    //create iframe 1
    iframe1 = document.createElement("iframe");
    iframe1.setAttribute("src", "https://www.tynker.com/ide/v3?type=player&p=62a8538d375de85571586676&autoPlay=no%22%20frameborder%3D%220%22%20allowfullscreen");
    iframe1.style.height = "100%";
    iframe1.style.width = "100%";
    bodyid.appendChild(iframe1);
    iframe1.setAttribute("id", "inlineFrame1");
    finish.style.display = "block";
}

function playgame2() {
    //create iframe 2
    iframe2 = document.createElement("iframe");
    iframe2.setAttribute("src", "https://www.tynker.com/ide/v3?type=player&p=62a862d582db95756356f71b&autoPlay=no%22%20frameborder%3D%220%22%20allowfullscreen");
    iframe2.style.height = "100%";
    iframe2.style.width = "100%";
    bodyid.appendChild(iframe2);
    iframe2.setAttribute("id", "inlineFrame2");
    finish.style.display = "block";
}

function playgame3() {
    //create iframe 3
    iframe3 = document.createElement("iframe");
    iframe3.setAttribute("src", "https://www.tynker.com/ide/v3?type=player&p=62a86c476aace37c7d164e77&autoPlay=no%22%20frameborder%3D%220%22%20allowfullscreen");
    iframe3.style.height = "100%";
    iframe3.style.width = "100%";
    bodyid.appendChild(iframe3);
    iframe3.setAttribute("id", "inlineFrame3");
    // iframe3.innerHTML = "";.
    // iframe3.replaceChildren();
    finish.style.display = "block";
}
function finishIframe() {
    try {
        iframe1.remove();

    }
    catch (err) {
        console.log("iframe1 not found");
    }

    try {
        iframe2.remove();

    }
    catch (err) {
        console.log("iframe2 not found");
    }
    try {
        iframe3.remove();

    }
    catch (err) {
        console.log("iframe3 not found");
    }
    finish.style.display = "none";
}
window.onload = setPage(n);

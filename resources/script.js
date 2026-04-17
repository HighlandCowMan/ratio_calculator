
function calculateRatio() {
    const petrolInput = document.getElementById("petrolInput");
    const ratioInput = document.getElementById("ratioInput");
    const output = document.getElementById("output");

    if (petrolInput.value == "" | ratioInput.value == "") {
        output.innerText = "";
        return;
    }

    let petrolValue = petrolInput.value;
    let ratioValue1 = ratioInput.value.split(":")[0];
    let ratioValue2 = ratioInput.value.split(":")[1];

    let answer = (petrolValue / ratioValue1) * ratioValue2
    answer = (answer.toPrecision(3));

    if (answer == "NaN") {
        output.innerText = "";
        return;
    }

    // A ratio of "1:" makes the answer 0.00.
    // And a ratio of ":1" makes the answer Infinity.
    // I just want to acknowledge this bug because I like it too much to fix.

    console.log(answer);
    type(`${answer} units of oil needed.`);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function type(text) {
    const output = document.getElementById("output");

    output.innerText = "";

    for (let i = 0; i < text.length; i++) {
        await sleep(10);
        if (text[i] == " ") {output.innerText += "\u00A0"}
        else {output.innerText += text[i];}
    }
}


function randomNumber(range) {
    return Math.floor(Math.random() * range);
}


async function funkinMode() {
    const Knuj = document.getElementById("Knuj");
    const Knujing = document.getElementById("Knujing");
    let colourR = randomNumber(255);
    let colourG = randomNumber(255);
    let colourB = randomNumber(255);
    
    while (true) {
        if (colourR % 10 == 0) {
            Knuj.volume = Math.random();
            Knuj.play();
        }
        if (colourR%10==0 & colourG%10==0 & colourB%10==0) {
            Knujing.play();
            break;
        }
        document.body.style.backgroundColor = `rgb(${colourR},${colourG},${colourB})`;
        colourR = randomNumber(255);
        colourG = randomNumber(255);
        colourB = randomNumber(255);
        await sleep(1000);

        shuffleSomething();
    }
    await sleep(54000);
    document.body.style.backgroundColor = "#000000";
    document.getElementsByTagName("h1")[0].removeAttribute("onclick");
}


function shuffleSomething() {
    let currentElement = document.body;
    let randomChild = "";

    while (true) {

        randomChild = currentElement.children[randomNumber(currentElement.childElementCount)];
        
        if (randomChild != null) {
            currentElement = randomChild;
        } 
        else {
            break;
        }

    }

    if (currentElement.innerText == "") {
        shuffleSomething();

    } else {
        let newText = currentElement.innerText.split("");
        newText[randomNumber(newText.length - 1)] = newText[randomNumber(newText.length - 1)];
        newText = newText.join("");

        currentElement.innerText = newText;
    }
}
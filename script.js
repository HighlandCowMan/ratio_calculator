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

    type(`${answer} units of oil needed.`);
}


async function type(text) {
    const output = document.getElementById("output");
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    output.innerText = "";

    for (let i = 0; i < text.length; i++) {
        await sleep(10);
        if (text[i] == " ") {output.innerText += "\u00A0"}
        else {output.innerText += text[i];}
    }
}
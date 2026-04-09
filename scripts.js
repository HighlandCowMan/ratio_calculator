function calculateRatio() {
    const petrolInput = document.getElementById("petrolInput");
    const ratioInput = document.getElementById("ratioInput");
    const output = document.getElementById("output");

    let petrolValue = petrolInput.value;
    let ratioValue = ratioInput.value;

    output.innerText = petrolValue * ratioValue;
}
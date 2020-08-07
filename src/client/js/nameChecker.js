function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let justin = "Justin";
    let becca = "Becca";
    let nova = "Nova";

    if(justin.includes (inputText)) {
        alert("Welcome, Justin! Have an Oreo!")
    }

    if(becca.includes (inputText)) {
        alert("Welcome, Becca! Have a dragon sushi roll!")
    }

    if(nova.includes (inputText)) {
        alert("Welcome, Nova! Have some chicken!")
    }
}

export { checkForName }

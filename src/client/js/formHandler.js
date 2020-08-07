function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
//THis is the javascript fetch request!!//
//when the fetch request runs, it follows these steps//
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')

    .then(res => {
      console.log(res);
      console.log(res.json());
        return res.json()
    })//then is takes the data from the funtction and inputs it to run this function.
    .then(function(data) {
                                        //.message can be .title or .time, just to change and rebuild.
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }
}

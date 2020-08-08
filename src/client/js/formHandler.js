function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {

      console.log(data)

      if("Justin".includes (formText)){
        document.getElementById('results').innerHTML = data.message
      };
      if("Becca".includes (formText)){
        document.getElementById('results').innerHTML = data.title
      };

      if("Nova".includes (formText)){
        document.getElementById('results').innerHTML = data.time
      }

    })
}

export { handleSubmit }

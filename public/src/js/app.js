let button = document.querySelector('#start-button');
let buttonn = document.querySelector('#start-buttonn');
let output = document.querySelector('#output');

button.addEventListener('click', function() {

    setTimeout(function() {
        fetch("https://swapi.co/api/people/5/?format=json")
            .then((response) => {
                return response.json()
            })

            .then((data) => output.innerHTML = data.name)
    }, 3000);
});
buttonn.addEventListener('click', function() {
    fetch('https://httpbin.org/put', {
        method: 'PUT',
        body: JSON.stringify({person: {name: 'Max', age: 28}}),
        headers: {
            "ontent-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            return response.json()
        })

        .then(json => {
            return JSON.parse(json.data)
        })

        .then(data => output.innerHTML = data.person.name)
})
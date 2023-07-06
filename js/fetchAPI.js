//must run on server

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Contect-type': 'application/json'
    }
})
    .then(response => responce.json())
    .then(json => console.log(json))
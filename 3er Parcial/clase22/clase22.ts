async function mostrarDatos():Promise<void> {
    const dato = await llamadoHTTP();
    llamadoaBD();
    console.log(dato);
}

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.json()));
    
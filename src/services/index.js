export const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })
    .then(response => response.json())
    .then(json => { return json })
}

export const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
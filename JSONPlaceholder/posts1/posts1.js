const elItem = document.querySelector('.posts');

const getPosts = (posts) => {

    for(let i = 0; i < posts.length; i++){
        const post = document.createElement('li');
        const userId = document.createElement('h3');
        const  id = document.createElement('p');
        const  title = document.createElement('strong');
       
        userId.textContent = posts[i].userId;
        id.textContent = posts[i].id;
        title.textContent = posts[i].title;
        
         post.append(userId)
         post.append(id)
         post.append(title)

         elItem.append(post)
      }
}
async function getUsers () {
const response = await fetch('https://jsonplaceholder.typicode.com/albums')

        const result = await response.json();
       console.log(result)
        return result;
    } 
    getUsers().then((result, rejected) => {
        getPosts(result);

    });
const elItem = document.querySelector('.albums');

const getPosts = (albums) => {

    for(let i = 0; i < albums.length; i++){
        const album = document.createElement('li');
        const userId = document.createElement('h3');
        const  id = document.createElement('p');
        const  title = document.createElement('strong');
       
        userId.textContent = albums[i].userId;
        id.textContent = albums[i].id;
        title.textContent = albums[i].title;
        
        album.append(userId)
        album.append(id)
        album.append(title)

         elItem.append(album)
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
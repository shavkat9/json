const elItem = document.querySelector('.photos');

const getPosts = (photos) => {

    for(let i = 0; i < photos.length; i++){
        const photo = document.createElement('li');
        const albumId = document.createElement('h3');
        const  id = document.createElement('p');
        const  title = document.createElement('strong');
       
        albumId.textContent = photos[i].albumId;
        id.textContent = photos[i].id;
        title.textContent = photos[i].title;
        
        photo.append(albumId)
        photo.append(id)
        photo.append(title)

         elItem.append(photo)
      }
}
async function getUsers () {
const response = await fetch('https://jsonplaceholder.typicode.com/photos')

        const result = await response.json();
       console.log(result)
        return result;
    } 
    getUsers().then((result, rejected) => {
        getPosts(result);

    });
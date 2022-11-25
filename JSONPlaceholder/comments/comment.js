const elItem = document.querySelector('.comments');

const renderUsers = (comments) => {

    for(let i = 0; i < comments.length; i++){
        const comment = document.createElement('li');
        const postId = document.createElement('h3');
        const id = document.createElement('p');
        const name = document.createElement('p')
    
        


        postId.textContent = comments[i].postId;
        id.textContent = comments[i].id;
        name.textContent = comments[i].name;
        
         comment.append(postId)
         comment.append(id)
         comment.append(name)
       

         elItem.append(comment)
      }
}
async function getUsers () {
const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const result = await response.json();
        console.log(result)
        return result;
    } 
    getUsers().then((result, rejected) => {
        renderUsers(result);
    });
    
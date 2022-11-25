const elItem = document.querySelector('.users');

const renderUsers = (users) => {

    for(let i = 0; i < users.length; i++){
        const user = document.createElement('li');
        const name = document.createElement('h3');
        const userName = document.createElement('p');
        const email = document.createElement('p')
        const phone = document.createElement('span')
        const companyName = document.createElement('strong');

        user.classList.add('user')


        name.textContent = users[i].name;
        userName.textContent = users[i].username;
        email.textContent = users[i].email;
        phone.textContent = users[i].phone;
        companyName.textContent = users[i].company.name
         user.append(name)
         user.append(userName)
         user.append(email)
         user.append(phone)
         user.append(companyName)

         elItem.append(user)
      }
}
async function getUsers () {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json();
        console.log(result)
        return result;
    } 
    getUsers().then((result, rejected) => {
        renderUsers(result);
    });
    

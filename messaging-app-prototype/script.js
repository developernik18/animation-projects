const apiUrl = 'https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in';
const chatList = document.getElementById('chatList');
const searchInput = document.getElementById('searchInput');
const statusText = document.getElementById('statusText');

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const users = data.results;
    renderChatList(users);
  })
  .catch(error => console.error('Error fetching data:', error));

// Render the chat list with fetched users
function renderChatList(users) {
  chatList.innerHTML = '';
  statusText.style.display = 'none';

  if (users.length === 0) {
    statusText.style.display = 'block';
    statusText.innerText = 'No people found';
    return;
  }

  users.forEach(user => {
    const chatItem = document.createElement('div');
    chatItem.classList.add('chat--item');

    const leftPart = document.createElement('div');
    leftPart.classList.add('chat--item__left');
    const img = document.createElement('img');
    img.src = user.picture.thumbnail;
    leftPart.appendChild(img);

    const rightPart = document.createElement('div');
    rightPart.classList.add('chat--item__right');
    const name = document.createElement('p');
    name.innerText = `${user.name.first} ${user.name.last}`;
    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = user.cell;
    rightPart.appendChild(name);
    rightPart.appendChild(phoneNumber);

    chatItem.appendChild(leftPart);
    chatItem.appendChild(rightPart);

    // Log person's details to console on click
    chatItem.addEventListener('click', () => {
      console.log('Clicked on:', user);
    });

    chatList.appendChild(chatItem);
  });
}

// Search functionality
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const chatItems = chatList.getElementsByClassName('chat--item');

  for (const chatItem of chatItems) {
    const name = chatItem.querySelector('.chat--item__right p:first-child').innerText.toLowerCase();

    if (name.includes(searchTerm)) {
      chatItem.style.display = 'flex';
    } else {
      chatItem.style.display = 'none';
    }
  }
});

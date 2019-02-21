const cargar = document.querySelector('#cargar');
cargar.addEventListener('click', cargarAPI);

function cargarAPI() {
  console.log('Presionado ...');
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function () {
    const posts = JSON.parse(xhr.responseText);
    let content = '';
    posts.forEach(post => {
      content += `
      <h3>${post.title}</h3>
      <p><em>${post.body}</em></p>
      <hr/>
      `;
    });
    document.getElementById('postList').innerHTML = content;
  };

  xhr.send();
}

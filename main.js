function printFeed(posts, container) {
  // reset dell'eventuale contenuto
  container.innerHTML = '';

  // cicliamo all'ionterno dell'array di posts
  for (let i = 0; i < posts.length; i++) {
    const { id, author, profilePic, date, contentText, contentPic } = posts[i];

    //stampiamo i post
    container.innerHTML += `
    <div id="${id}" class="post">
      <div class="post__header">
          <div class="post-meta">                    
              <div class="post-meta__icon">
                  <img class="profile-pic" src="${profilePic}" alt="${author}">                    
              </div>
              <div class="post-meta__data">
                  <div class="post-meta__author">${author}</div>
                  <div class="post-meta__time">${date}</div>
              </div>                    
          </div>
      </div>
      <div class="post__text">${contentText}</div>
      <div class="post__image">
          <img src="${contentPic}" alt="">
      </div>
      <div class="post__footer">
          <div class="likes js-likes">
              <div class="likes__cta">
                  <a class="like-button  js-like-button" href="#" data-postid="1">
                      <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                      <span class="like-button__label">Mi Piace</span>
                  </a>
              </div>
              <div class="likes__counter">
                  Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
              </div>
          </div> 
      </div>            
    </div>
  `;
  }

  

};


const postsList = [
  {
    id: 1,
    author: 'Phil Mangione',
    profilePic: 'https://unsplash.it/300/300?image=',
    date: '10/21/2021',
    contentText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    contentPic: 'https://unsplash.it/600/300?image=',
  },
  {
    id: 2,
    author: 'Johnny Stecchino',
    profilePic: 'https://unsplash.it/300/300?image=',
    date: '10/27/2021',
    contentText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    contentPic: 'https://unsplash.it/600/300?image=',
  },
  {
    id: 3,
    author: 'Arnold Neronero',
    profilePic: 'https://unsplash.it/300/300?image=',
    date: '11/30/2021',
    contentText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    contentPic: 'https://unsplash.it/600/300?image=',
  },
];


const postContainerHtml = document.getElementById('container');

printFeed(postsList, postContainerHtml);
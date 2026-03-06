const loadSomething = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCart(data);
    });
};

const displayCart = (post) => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  post.forEach((posts) => {
    const postCards = document.createElement("div");
    postCards.innerHTML = `
          <div id="cards">
        <h1>${posts.name}</h1>
        <p>
         ${posts.email}
        </p>
      </div>
    `;

    //asign childs:
    mainContainer.append(postCards);
  });
};

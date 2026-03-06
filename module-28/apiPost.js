const loadSomething = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      display(json);
    });
};

const display = (posts) => {
  const postContainer = document.getElementById("ul-cont");
  postContainer.innerHTML ="";
  // console.log(postContainer);

  for (let post of posts) {
    console.log(post.title);
    //create html element:
    const li = document.createElement("li");
    li.innerText = post.title;
    console.log(li); //see them perfectly working or not

    //see them in container:
    postContainer.appendChild(li);
  }
};

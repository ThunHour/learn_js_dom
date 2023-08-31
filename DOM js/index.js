function jsExecute() {
  var parentContainer = document.getElementById("parent-container");
  //   document.all[9].innerHTML = "<h1>Hello cambodia to the world</h1>";

  // console.log(document.bgColor="red");

  parentContainer.style.backgroundColor = "white";
  parentContainer.children[0].children[0].innerHTML = "home";
}
function Color() {
  var parentContainer = document.getElementById("parent-container");
  //   document.all[9].innerHTML =
  //     ' <ul class="u-list"> <li class="list-items">home</li><li class="list-items">about</li><li class="list-items">contact</li><li class="list-items">services</li></ul>';
  // console.log( parentContainer.children[0].children[0].style.backgroundColor="red");
  parentContainer.children[0].children[0].innerHTML = "House";
  // parentContainer.classList.add("container-class-new-style")

  parentContainer.style.backgroundColor = "red";
  var child = parentContainer.children[0].children[0];
  // querySelectorAll is the function can use access by id class name and tagname

  console.log(
    child.parentElement.parentElement.parentElement.parentElement.parentElement
  );
}
function queryFunction() {
  console.log(document.querySelectorAll("#parent-container"));
  console.log(document.querySelectorAll(".u-list"));
  console.log(document.querySelectorAll("button"));
}

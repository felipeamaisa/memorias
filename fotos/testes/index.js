window.onload = function() {
  var container = document.querySelector(".container");
  var image = document.getElementById("myImage");
  var imageClone = document.getElementById("myImageClone");

  image.onclick = function() {
    imageClone.style.display = "block"; // Exibindo a cópia da imagem
    imageClone.classList.add("no-blur"); // Adicionando a classe para remover o desfoque
    container.classList.toggle("overlay");
    image.classList.toggle("overlay");
  };
};
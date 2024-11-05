function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#imagem");

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem amarela
    img.setAttribute("src", "./assets/avatar.png");
  } else {
    //se tiver sem a imagem amarela, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-azul.png");
  }
}

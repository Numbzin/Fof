function moveButton(button) {
  const container = document.querySelector(".container");
  const containerWH = container.getBoundingClientRect();

  const buttonNo = button.getBoundingClientRect();

  const newLeft = Math.random() * (containerWH.width - buttonNo.width);
  const newTop = Math.random() * (containerWH.height - buttonNo.height);

  button.style.position = "absolute";
  button.style.left = `${newLeft}px`;
  button.style.top = `${newTop}px`;
}

function BtnYes() {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  h1.textContent = "Eu tambem te gosto S2";
  p.textContent = "r u mine?";

  const img = document.querySelector("img");
  img.src = "love.gif";
}

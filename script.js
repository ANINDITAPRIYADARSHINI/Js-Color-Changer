document.getElementById('colorButton').addEventListener('click', function () {
  document.body.style.backgroundColor = Randcolorgen();
  let color = Randcolorgen();
  document.getElementById('colorCheck').textContent = color;
});

function Randcolorgen() {
  const letter = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + letter[Math.floor(Math.random() * 15)];
  }
  return color;
}
//when the btn is clicked it will generate gradients in place of color also tell which color it is

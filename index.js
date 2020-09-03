const calcVelocity = (e) => {
  // u2sin2theta/g
  // root(Rg/sin2theta)
  e.preventDefault();
  const range = parseInt(document.getElementsByTagName("input")[0].value);
  const angle = parseInt(document.getElementsByTagName("input")[1].value);
  const u =
    Math.round(
      (Math.sqrt((range * 9.8) / Math.sin(2 * angle * (Math.PI / 180))) +
        Number.EPSILON) *
        100
    ) / 100;
  console.log(Math.sin(angle * (Math.PI / 180)));
  const t =
    Math.round(
      ((2 * u * Math.sin(angle * (Math.PI / 180))) / 9.8 + Number.EPSILON) * 100
    ) / 100;
  document.getElementsByClassName("output")[0].style.display = "block";
  document.getElementsByClassName("output")[0].textContent = `If you
  throw it with a speed of 
  ${u}m/s it will reach in ${t}s at the right place
  `;
  document.getElementsByClassName("bg")[0].style.width = "100%";
  document.getElementsByClassName("bg")[0].style.height = "100%";
};
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", calcVelocity);

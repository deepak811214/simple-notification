import "./styles.css";
const app = document.getElementById("app");
const notification = document.getElementById("notification");

const showNotification = function () {
  let width = 100;

  let timer = setInterval(() => {
    if (width <= 1) {
      clearInterval(timer);
    }
    width--;
    updateDom(width);
  }, 50);
};

function updateDom(widthx = 0) {
  app.innerHTML = "";
  const content = `
  <div class="container" >
    <div class="content">Notification</div>
    <div class="progressbar">
      <div class="line" style="width:${widthx}%;"</div>
    </div>
  </div>
  `;
  if (widthx) {
    app.insertAdjacentHTML("beforeend", content);
  }
}
notification.addEventListener("click", showNotification);

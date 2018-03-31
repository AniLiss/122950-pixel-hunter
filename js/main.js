let templateIndex = 0;
const templates = [...document.querySelectorAll(`template`)].map((template) => template.id);
const containerNode = document.getElementsByClassName(`central`);


function showTemplateByNum(templateNum) {
  const tmpl = document.getElementById(templates[templateNum]);
  [...containerNode[0].childNodes].map((i) => i.remove());
  containerNode[0].appendChild(tmpl.content.cloneNode(true));
  templateIndex = templateNum;
}


document.addEventListener(`keydown`, function (event) {
  if ((event.which === 37 && event.altKey) && templateIndex !== 0) {
    showTemplateByNum(--templateIndex);
  } else if ((event.which === 39 && event.altKey) && templateIndex !== templates.length - 1) {
    showTemplateByNum(++templateIndex);
  }
});


showTemplateByNum(templateIndex);

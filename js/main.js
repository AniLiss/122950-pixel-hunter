let templateIndex = 0;
const templateList = [...document.querySelectorAll(`template`)].map((template) => template.id);
const containerNode = document.getElementsByClassName(`central`);


function showTemplateByNum(templateNum) {
  const template = document.getElementById(templateList[templateNum]);
  [...containerNode[0].childNodes].map((i) => i.remove());
  containerNode[0].appendChild(template.content.cloneNode(true));
  templateIndex = templateNum;
}


document.addEventListener(`keydown`, function (event) {
  if ((event.which === 37 && event.altKey) && templateIndex !== 0) {
    showTemplateByNum(--templateIndex);
  } else if ((event.which === 39 && event.altKey) && templateIndex !== templateList.length - 1) {
    showTemplateByNum(++templateIndex);
  }
});

showTemplateByNum(templateIndex);

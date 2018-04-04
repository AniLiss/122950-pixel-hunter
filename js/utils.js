export const createElement = (htmlString) => {
  let wrapper = document.createElement(`div`);
  wrapper.innerHTML = htmlString;
  return wrapper;
};

export const containerNode = document.getElementsByClassName(`central`);

export const showTemplate = (template) => {
  // containerNode.innerHTML = ``;
  [...containerNode[0].childNodes].map((i) => i.remove());
  containerNode[0].appendChild(template);
};

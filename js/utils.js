export const createElement = (htmlString) => {
  let wrapper = document.createElement(`div`);
  wrapper.innerHTML = htmlString;
  return wrapper;
};

export const containerNode = document.querySelector(`.central`);

export const showTemplate = (template) => {
  containerNode.innerHTML = ``;
  containerNode.appendChild(template);
};

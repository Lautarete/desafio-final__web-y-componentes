function mountComponentOnElement(domElToMount, componentHTml) {
  const componentContainerEl = document.createElement("div");
  componentContainerEl.innerHTML = componentHTml;
  domElToMount.appendChild(componentContainerEl);
}

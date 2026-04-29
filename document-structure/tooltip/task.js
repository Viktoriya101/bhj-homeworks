const hasTooltip = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

hasTooltip.forEach((element) => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  element.after(tooltip);

  element.addEventListener("click", (event) => {
    event.preventDefault();
    
    const tooltipText = element.title;
    
    // Если есть активный tooltip, но не тот, который выбираем, убираем его
    if (activeTooltip && activeTooltip !== tooltip) {
      activeTooltip.classList.remove("tooltip_active");
    }

    tooltip.textContent = tooltipText;
    tooltip.classList.toggle("tooltip_active");

    // data-position
    tooltip.setAttribute('data-position', 'bottom');

    // Позиционирование tooltip
    const position = tooltip.getAttribute('data-position');
    const targetElem = element.getBoundingClientRect();
    
    if (position === 'top') {
      tooltip.style.left = `${targetElem.left}px`;
      tooltip.style.top = `${targetElem.top - tooltip.offsetHeight}px`;
    } else if (position === 'left') {
      tooltip.style.left = `${targetElem.left - tooltip.offsetWidth}px`;
      tooltip.style.top = `${targetElem.top}px`;
    } else if (position === 'right') {
      tooltip.style.left = `${targetElem.right}px`;
      tooltip.style.top = `${targetElem.top}px`;
    } else if (position === 'bottom') {
      tooltip.style.left = `${targetElem.left}px`;
      tooltip.style.top = `${targetElem.bottom}px`;
    }

    // Обновляем активный tooltip, если его нет — null
    activeTooltip = tooltip.classList.contains("tooltip_active") ? tooltip : null;
  });
});

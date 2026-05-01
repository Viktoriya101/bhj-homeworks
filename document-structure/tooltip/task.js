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

    const { bottom, left, width } = element.getBoundingClientRect();
    tooltip.style.top = `${bottom}px`;
    tooltip.style.left = `${left}px`;

    // Обновляем активный tooltip, если его нет — null
    activeTooltip = tooltip.classList.contains("tooltip_active") ? tooltip : null;
  });
});



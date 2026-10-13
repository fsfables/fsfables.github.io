const ACCORDION_BUTTON = 'button[id^="accordion-button:"]';
const PANEL_PREFIX = "accordion-panel:";
const PLUS_ICON_CLASS = "plus-icon";
const MINUS_ICON_CLASS = "minus-icon";
const HIDDEN_CLASS = "hidden";

// Event delegation on the accordion container
const accordionContainer = document.querySelector(".accordion-container");

if (accordionContainer) {
  accordionContainer.addEventListener("click", (event) => {
    const button = event.target.closest(ACCORDION_BUTTON);
    if (!button) {
      return;
    }

    // Toggle the panel and icons
    toggleAccordion(button);
  });
}

function toggleAccordion(button) {
  const panelId = button.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  if (!panel) {
    return;
  }

  // Toggle expanded state
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
  panel.classList.toggle(HIDDEN_CLASS, isExpanded);

  // Toggle icons visibility
  const plusIcon = button.querySelector(`.${PLUS_ICON_CLASS}`);
  const minusIcon = button.querySelector(`.${MINUS_ICON_CLASS}`);

  if (plusIcon && minusIcon) {
    plusIcon.classList.toggle(HIDDEN_CLASS, !isExpanded);
    minusIcon.classList.toggle(HIDDEN_CLASS, isExpanded);
  }
}

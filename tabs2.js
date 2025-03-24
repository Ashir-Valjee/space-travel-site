const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
  changeTabFocus(e);
});
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    changeTabPanel(e);
  });
});

function changeTabFocus(e) {
  console.log(e.keyCode);
  const keyDownLeft = 37; // Arrow Left
  const keyDownRight = 39; // Arrow Right

  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === keyDownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      console.log(tabFocus);
    } else {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
      console.log(tabFocus);
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected = "true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, `#${targetPanel}`);

  mainContainer.querySelectorAll("section").forEach((picture) => {
    picture.style.display = "none";
  });

  mainContainer.querySelector([`.${targetImage}`]).style.display = "block";
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach((item) => {
    item.setAttribute("hidden", true);
  });
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}

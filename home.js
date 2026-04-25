document.addEventListener("DOMContentLoaded", () => {
  const tabControl = document.querySelector(".tab-control");
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panels = Array.from(document.querySelectorAll(".panel"));

  const updateHighlight = (tab) => {
    if (!tabControl || !tab) {
      return;
    }

    const containerRect = tabControl.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const left = tabRect.left - containerRect.left;

    tabControl.style.setProperty("--tab-left", `${left}px`);
    tabControl.style.setProperty("--tab-width", `${tabRect.width}px`);
  };

  const setActiveTab = (tab) => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === target);
    });

    updateHighlight(tab);
  };

  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => setActiveTab(tab));
    });

    const activeTab = document.querySelector(".tab.is-active") || tabs[0];
    setActiveTab(activeTab);
    window.addEventListener("resize", () => {
      updateHighlight(document.querySelector(".tab.is-active"));
    });
  }

  const skillsToggle = document.getElementById("skillsToggle");
  const skillsResults = document.getElementById("skillsResults");
  const skillsOutput = document.getElementById("skillsOutput");
  const skillsCategories = document.getElementById("skillsCategories");
  const skillsTotal = document.getElementById("skillsTotal");

  if (skillsOutput && skillsCategories && skillsTotal) {
    const skillLists = Array.from(document.querySelectorAll(".skill-card .skills-list"));
    const categoryCount = skillLists.length;
    const totalSkills = skillLists.reduce((total, list) => {
      const entries = list.textContent
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      return total + entries.length;
    }, 0);

    skillsOutput.textContent = `${categoryCount} categories | ${totalSkills} skills`;
    skillsCategories.textContent = String(categoryCount);
    skillsTotal.textContent = String(totalSkills);
  }

  if (skillsToggle && skillsResults) {
    skillsToggle.addEventListener("click", () => {
      const isHidden = skillsResults.hasAttribute("hidden");
      if (isHidden) {
        skillsResults.removeAttribute("hidden");
        skillsToggle.textContent = "Hide snapshot";
        skillsToggle.setAttribute("aria-expanded", "true");
      } else {
        skillsResults.setAttribute("hidden", "");
        skillsToggle.textContent = "Show snapshot";
        skillsToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});

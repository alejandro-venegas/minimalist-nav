let selectedElement;

const cities = [
  {
    section: "cupertino",
    label: "Cupertino",
    timeZone: "America/Los_Angeles",
  },
  {
    section: "new-york-city",
    label: "New York City",
    timeZone: "America/New_York",
  },
  {
    section: "london",
    label: "London",
    timeZone: "Europe/London",
  },
  {
    section: "amsterdam",
    label: "Amsterdam",
    timeZone: "Europe/Amsterdam",
  },
  {
    section: "tokyo",
    label: "Tokyo",
    timeZone: "Asia/Tokyo",
  },
  {
    section: "hong-kong",
    label: "Hong Kong",
    timeZone: "Asia/Hong_Kong",
  },
  {
    section: "sydney",
    label: "Sydney",
    timeZone: "Australia/Sydney",
  },
];

const navigationList = document.getElementById("navigation__list");

function addNavigationElements() {
  for (const city of cities) {
    const navItem = buildNavigationItem(city.label, city.section);
    city.element = navItem;

    navigationList.append(navItem);
  }
}

function buildNavigationItem(label, section) {
  const li = document.createElement("li");
  li.classList.add("navigation__item");

  const a = document.createElement("a");
  a.classList.add("navigation__link");
  a.textContent = label;
  a.id = section;

  a.addEventListener("click", navigationItemClickHandler);

  li.appendChild(a);

  return li;
}

function navigationItemClickHandler(event) {
  event.preventDefault();

  setActiveLink(event.target.id);
}

function setActiveLink(targetId) {
  for (const city of cities) {
    const anchorElement = city.element.firstElementChild;

    if (targetId === city.section) {
      anchorElement.classList.add("navigation__link--active");
      selectedElement = anchorElement;

      setTimezone(city.timeZone);
      setNavigationBar(anchorElement);

      continue;
    }

    anchorElement.classList.remove("navigation__link--active");
  }
}

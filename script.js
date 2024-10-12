let cardsList = [
  {
    id: 1,
    numberOfUnits: "1 Unit",
    unitPrice: "$10.00 USD",
    discountOffer: "10% Off",
    standardPriceText: "Standard Price",
    standardPrice: "$24.00USD",
    isChecked: false,
  },

  {
    id: 2,
    numberOfUnits: "2 Unit",
    unitPrice: "$18.00 USD",
    discountOffer: "20% Off",
    standardPriceText: "Standard Price",
    standardPrice: "$24.00USD",
    isChecked: false,
  },

  {
    id: 3,
    numberOfUnits: "3 Unit",
    unitPrice: "$24.00 USD",
    discountOffer: "30% Off",
    standardPriceText: "Standard Price",
    standardPrice: "$24.00USD",
    isChecked: false,
  },
];

const dropdownsHeadingList = ["  ", "Size", "Color"];

const dropdownsList = [
  {
    id: "1",
    sizesList: ["S", "M", "L", "XL", "XXL"],
    colorsList: ["Black", "Green", "Red", "Yellow", "White"],
  },
  {
    id: "2",
    sizesList: ["S", "M", "L", "XL", "XXL"],
    colorsList: ["Black", "Green", "Red", "Yellow", "White"],
  },
];

const appendChildHTML = (parentElement, childElement) => {
  parentElement.appendChild(childElement);
};

const createHTMLTag = (
  elementType,
  className,
  id,
  textContent,
  optionsList
) => {
  const htmlElement = document.createElement(elementType);

  if (elementType === "select" && optionsList) {
    optionsList?.forEach((eachOption) => {
      const optionEl = document.createElement("option");
      optionEl.textContent = eachOption;
      optionEl.value = eachOption;

      appendChildHTML(htmlElement, optionEl);
    });
  }

  if (className) {
    htmlElement.classList.add(className);
  }
  if (id) {
    htmlElement.id = id;
  }
  if (textContent) {
    htmlElement.textContent = textContent;
  }
  return htmlElement;
};

const handleChange = (event, selectedCard) => {
  const allCards = cardsList?.map((each) => {
    const priceCardContainerEl = document.getElementById(
      `priceCardContainer-${each?.id}`
    );

    const totalSizeContainerEl = document.getElementById(
      `totalSizeContainer-${each.id}`
    );

    const mostPopularDivEl = document.getElementById(
      `mostPopularDiv-${each?.id}`
    );

    if (each?.id === selectedCard?.id) {
      totalSizeContainerEl.style.display = "flex";
      priceCardContainerEl.style.border = "5px solid #FF6B82";
      priceCardContainerEl.style.padding = "1rem 0rem";

      mostPopularDivEl.style.display = "block";

      return { ...each, isChecked: event.target.checked };
    } else {
      totalSizeContainerEl.style.display = "none";
      mostPopularDivEl.style.display = "none";

      priceCardContainerEl.style.border = "1px solid grey";

      return { ...each, isChecked: false };
    }
  });

  cardsList = [...allCards];
};

const renderCards = () => {
  const cardsBlockContainerEl = document.getElementById(
    "#cards-block-container"
  );

  cardsList?.forEach((eachCard) => {
    const priceCardContainerEl = createHTMLTag(
      "div",
      "price-card-container",
      `priceCardContainer-${eachCard?.id}`
    );

    appendChildHTML(cardsBlockContainerEl, priceCardContainerEl);

    const cardContainerEl = createHTMLTag(
      "div",
      "card-container",
      `card-container-box-${eachCard?.id}`
    );

    appendChildHTML(priceCardContainerEl, cardContainerEl);

    const unitBlockContainerEl = createHTMLTag(
      "div",
      "",
      `unit-block-container-box-${eachCard?.id}`
    );

    appendChildHTML(cardContainerEl, unitBlockContainerEl);

    const totalUnitContainerEl = createHTMLTag(
      "div",
      "total-unit-container",
      `total-unit-${eachCard?.id}`
    );

    appendChildHTML(unitBlockContainerEl, totalUnitContainerEl);

    const radioEl = createHTMLTag("input", "radio-button-color");
    radioEl.type = "radio";
    radioEl.name = "cards-item-radio";
    radioEl.value = `${eachCard?.id}`;

    radioEl.addEventListener("change", (event) =>
      handleChange(event, eachCard)
    );

    appendChildHTML(totalUnitContainerEl, radioEl);

    const unitContainerEl = createHTMLTag("div", "unit-container");

    appendChildHTML(totalUnitContainerEl, unitContainerEl);

    const unitOfferContainerEl = createHTMLTag("div", "unit-offer-container");

    appendChildHTML(unitContainerEl, unitOfferContainerEl);

    const unitHeadingEl = createHTMLTag("h4", "", "", eachCard?.numberOfUnits);

    appendChildHTML(unitOfferContainerEl, unitHeadingEl);

    const offerBoxEl = createHTMLTag(
      "p",
      "offer-box",
      "",
      eachCard?.discountOffer
    );

    appendChildHTML(unitOfferContainerEl, offerBoxEl);

    const standardPriceEl = createHTMLTag(
      "p",
      "standard-price",
      "",
      eachCard?.standardPriceText
    );

    appendChildHTML(unitContainerEl, standardPriceEl);

    const prizeContainerEl = createHTMLTag("div", "prize-container");

    appendChildHTML(cardContainerEl, prizeContainerEl);

    const totalSizeContainerEl = createHTMLTag(
      "div",
      "total-size-container",
      `totalSizeContainer-${eachCard?.id}`
    );

    totalSizeContainerEl.style.display = "none";

    const sizeColorTextContainer = createHTMLTag(
      "div",
      "size-color-text-container"
    );

    dropdownsHeadingList?.forEach((each) => {
      const paraEl = createHTMLTag("p", "", "", each);
      appendChildHTML(sizeColorTextContainer, paraEl);
    });

    appendChildHTML(totalSizeContainerEl, sizeColorTextContainer);

    dropdownsList?.forEach((eachDropdown) => {
      const sizesBoxContainer = createHTMLTag("div", "sizes-box-container");

      const hashNumberEl = createHTMLTag("p", "", "", `#${eachDropdown?.id}`);
      appendChildHTML(sizesBoxContainer, hashNumberEl);

      const sizeSelectEl = createHTMLTag(
        "select",
        "",
        "",
        "",
        eachDropdown?.sizesList
      );

      appendChildHTML(sizesBoxContainer, sizeSelectEl);

      const colorSelectEl = createHTMLTag(
        "select",
        "",
        "",
        "",
        eachDropdown?.colorsList
      );
      appendChildHTML(sizesBoxContainer, colorSelectEl);

      appendChildHTML(totalSizeContainerEl, sizesBoxContainer);
    });

    priceCardContainerEl.appendChild(totalSizeContainerEl);

    const mostPopularEl = createHTMLTag(
      "div",
      "most-popular-div",
      `mostPopularDiv-${eachCard?.id}`,
      "MOST POPULAR"
    );

    priceCardContainerEl.appendChild(mostPopularEl);

    const priceHeadingEl = createHTMLTag("h4", "", "", eachCard?.unitPrice);

    appendChildHTML(prizeContainerEl, priceHeadingEl);

    const regularPriceEl = createHTMLTag(
      "p",
      "regular-price",
      "",
      eachCard?.standardPrice
    );

    appendChildHTML(prizeContainerEl, regularPriceEl);

    appendChildHTML(cardsBlockContainerEl, priceCardContainerEl);
  });
};

renderCards();

const handleAddtoCart = () => {
  const cartItemsList = cardsList?.filter((each) => {
    return each?.isChecked;
  });

  if (cartItemsList?.length) {
    alert(`${cartItemsList?.[0]?.numberOfUnits} Item added to card`);
  }
  else{
    alert("No Item Selected")
  }
};

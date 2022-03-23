const currencies = [
  {
    title: "US Dollar",
    sub: "$",
    text: "USD",
  },
  {
    title: "Euro",
    sub: "€",
    text: "EUR",
  },
  {
    title: "Chinese Yuan",
    sub: "¥",
    text: "CNY",
  },
  {
    title: "Thai Baht",
    sub: "฿",
    text: "THB",
  },
  {
    title: "British Pound Sterling",
    sub: "£",
    text: "GBP",
  },
  {
    title: "Ghanaian Cedi",
    sub: "₵",
    text: "GHS",
  },
  {
    title: "Japanese Yen",
    sub: "￥",
    text: "JPY",
  },
  {
    title: "Polish Zloty",
    sub: "zł",
    text: "PLN",
  },
];

const currencyCard = (currency) => {
  return `
    <article>
      <p class="sub">${currency.sub}</p>
      <h4 class="title">${currency.title}</h4>
      <p class="text">${currency.text}</p>
      <button>
        Save
        <span class="material-icons arrow-icon">arrow_forward</span>
      </button>
    </article>
  `;
};

function init() {
  const section = document.querySelector(".flexbox-container");

  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];
    section.insertAdjacentHTML("beforeend", currencyCard(currency));
  }
}

window.addEventListener("load", init);

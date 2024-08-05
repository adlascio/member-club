const { getClient } = require("../services/get-client");
const { loadClientInfo } = require("./load-client-info");

const form = document.querySelector("form");
const cardId = document.querySelector("#card-id");

form.onsubmit = async (event) => {
  event.preventDefault();
  console.log("Form submitted");
  const client = await getClient({ id: cardId.value });
  if (!client) {
    alert("Card ID invalid or not found. Please try again.");
    return;
  }
  loadClientInfo({ client });
};

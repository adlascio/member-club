import { getClient } from "../services/get-client";
import { loadClientInfo } from "./load-client-info";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Page loaded");
  const client = await getClient({ id: "124-537-835-230" });
  if (!client) {
    alert("Card ID invalid or not found. Please try again.");
    return;
  }
  loadClientInfo({ client });

  const cardId = document.getElementById("card-id");
  console.log("Card ID", cardId);
  const submitBtnImg = document.querySelector("#submit-btn-img");
  cardId.addEventListener("input", (event) => {
    if (!event.target.value) {
      submitBtnImg.src = "./src/assets/Btn-disabled.svg";
      return;
    } else {
      submitBtnImg.src = "./src/assets/Btn-default.svg";
    }
  });
  cardId.addEventListener("focus", (event) => {
    event.target.parentElement.classList.add("input-focus");
  });
  cardId.addEventListener("blur", (event) => {
    event.target.parentElement.classList.remove("input-focus");
  });
});

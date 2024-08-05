const userName = document.querySelector("#user-info h2");
const userMemberSince = document.querySelector("#user-info p");
const totalHaircuts = document.querySelector("#user-history-header p");
const historyList = document.querySelector("#history-list");
const membershipId = document.querySelector("#membership-id p");
const fidelityPoints = document.querySelector(".grid-points");
const haircutCountdownHeader = document.querySelector(
  "#haircut-count-header h2"
);
const haircutCountdown = document.querySelector("#haircut-count-bar p");
const barFill = document.querySelector("#bar-fill");

export function loadClientInfo({ client }) {
  console.log("Client", client);
  userName.textContent = client.name;
  userMemberSince.textContent = `Member since ${client.clientSince}`;
  const totalHaircutsNumber = client.appointmentHistory.length;
  totalHaircuts.textContent =
    totalHaircutsNumber !== 1 ? `${totalHaircutsNumber} haircuts` : "1 haircut";
  historyList.innerHTML = "";
  client.appointmentHistory.forEach((appointment) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<li class="flex space-between">
              <div>
                <h3>${appointment.date}</h3>
                <p>${appointment.time}</p>
              </div>
              <img src="./src/assets/icons/GreenCheck.svg" alt="" />
            </li>`;
    historyList.appendChild(listItem);
  });
  membershipId.textContent = `ID: ${client.id}`;

  fidelityPoints.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const point = document.createElement("div");
    point.classList.add("point");
    if (i !== 9 && i < totalHaircutsNumber) {
      point.appendChild(document.createElement("img")).src =
        "./src/assets/PinCheck.svg";
    } else if (i === 9 && totalHaircutsNumber >= 10) {
      const giftImg = document.createElement("img");
      giftImg.src = "./src/assets/PinGift.svg";
      giftImg.style.height = "4rem";
      point.appendChild(giftImg);
    } else if (i === 9 && totalHaircutsNumber < 10) {
      point.appendChild(document.createElement("img")).src =
        "./src/assets/GiftDisabled.svg";
    }
    fidelityPoints.appendChild(point);
  }
  haircutCountdownHeader.textContent = 10 - totalHaircutsNumber;
  haircutCountdown.textContent = `${totalHaircutsNumber} out of 10`;
  barFill.style.width = `${totalHaircutsNumber * 10}%`;
}

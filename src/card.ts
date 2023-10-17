const player = document.createElement("div");
player.classList.add("player1");
document.getElementById("GameBoard")!.appendChild(player);

class Card {
  public static cardCount = 0;
  public rank: string;
  public suit: string;
  public id?: string;
  public isVerso: boolean;

  constructor(rank: string, suit: string, isVerso: boolean = false) {
    this.rank = rank;
    this.suit = suit;
    this.isVerso = isVerso;
  }

  createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    if (this.id === undefined) {
      this.id = `card${Card.cardCount}`;
      Card.cardCount++;
    }

    if (this.id) {
      cardDiv.id = `${this.id}`;
    }

    const cardDonneesDiv = document.createElement("div");
    cardDonneesDiv.className = "card_Donnees";

    if (this.isVerso) {
      cardDonneesDiv.innerHTML = "Verso";
    } else {
      const topLeftDiv = document.createElement("div");
      topLeftDiv.className = "card_Donnees_top_left";

      if (this.suit === "hearts" || this.suit === "diams") {
        topLeftDiv.style.color = "red";
      }

      topLeftDiv.innerHTML = `${this.rank} <br> &${this.suit};`;

      const centerDiv = document.createElement("div");
      centerDiv.className = "card_Donnees_center";
      if (this.suit === "hearts" || this.suit === "diams") {
        centerDiv.style.color = "red";
      }

      centerDiv.innerHTML = `&${this.suit};`;

      const botRightDiv = document.createElement("div");
      botRightDiv.className = "card_Donnees_bot_right";

      if (this.suit === "hearts" || this.suit === "diams") {
        botRightDiv.style.color = "red";
      }

      botRightDiv.innerHTML = `${this.rank} <br> &${this.suit};`;

      cardDonneesDiv.appendChild(topLeftDiv);
      cardDonneesDiv.appendChild(centerDiv);
      cardDonneesDiv.appendChild(botRightDiv);
    }

    cardDiv.appendChild(cardDonneesDiv);

    player.appendChild(cardDiv);
  }
}

const suits: string[] = ["spades", "hearts", "clubs", "diams"];
const ranks: string[] = ["K", "Q", "J", "A", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

const allCards: { rank: string; suit: string }[] = [];
for (const suit of suits) {
  for (const rank of ranks) {
    allCards.push({ rank, suit });
    
  }
}

const shuffledCards = shuffleArray(allCards);
console.log("shuffledCards", shuffledCards);

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    const card = new Card(shuffledCards.pop()!.rank, shuffledCards.pop()!.suit);
    card.createCard();
  }
}

for (let k = 1; k <= 4; k++) {
  const defausseCard = new Card(shuffledCards.pop()!.rank, shuffledCards.pop()!.suit);
  defausseCard.id = `defausse${k}`;
  defausseCard.createCard();
}

for (let l = 1; l <= Card.cardCount - 24; l++) {
  const sidePileCard = new Card(shuffledCards.pop()!.rank, shuffledCards.pop()!.suit); // Adjust as needed
  sidePileCard.createCard();
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log("jkhkj,", array);
  
  return array;
}




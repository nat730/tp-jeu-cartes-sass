class Card {
  private static cardCount = 0;
  private rank: string;
  private suit: string;
  public id?: string;

  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }

  createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    
    cardDiv.id = `card${Card.cardCount}`;
    Card.cardCount++;

    if(this.id){
      cardDiv.id = `${this.id}`
    }

    const cardDonneesDiv = document.createElement("div");
    cardDonneesDiv.className = "card_Donnees";

    const topLeftDiv = document.createElement("div");
    topLeftDiv.className = "card_Donnees_top_left";
    topLeftDiv.innerHTML = `${this.rank} <br> &${this.suit};`;

    const centerDiv = document.createElement("div");
    centerDiv.className = "card_Donnees_center";
    centerDiv.innerHTML = `&${this.suit};`;

    const botRightDiv = document.createElement("div");
    botRightDiv.className = "card_Donnees_bot_right";
    botRightDiv.innerHTML = `${this.rank} <br> &${this.suit};`;

    cardDonneesDiv.appendChild(topLeftDiv);
    cardDonneesDiv.appendChild(centerDiv);
    cardDonneesDiv.appendChild(botRightDiv);

    cardDiv.appendChild(cardDonneesDiv);

    document.getElementById("GameBoard")!.appendChild(cardDiv);
  }
}

  const suits: string[] = ["spades"];
  const ranks: string[] = ["K", "Q", "J", "A", "C", "10"];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = new Card(ranks[j], suits[i]);
      card.createCard();
    }
  }

  for (let k = 1; k <= 3; k++) {
    const defausseCard = new Card("10", "spades");
    defausseCard.id = `defausse${k}`;
    defausseCard.createCard();
  };
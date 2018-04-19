


export class Game {
    

    Players: User[] = [
        { Name: 'Ramya Keerthana Potla', MyQuotes: [] },
        { Name: 'Lara Croft', MyQuotes: [] },
        { Name: 'Donald Trumo', MyQuotes: [] }
    ];
    Dealer: string = ' Ramya Keerthana Potla';
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [
        { Text: "Great minds think alike, but ...", PlayerName: 'Ramya Keerthana Potla', Chosen: false },
        { Text: "That's fake news", PlayerName: 'Donald Trump', Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[] = [];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}             
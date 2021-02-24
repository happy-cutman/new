interface Traders {
    trader: string,
    sellingAsset: string,
    exchangeAsset: string,
    rate: string,
    limits: string
}

interface Trades {
    contract: string,
    yourCounterparty: string,
    youSend: string,
    yourStatus: string,
    youReceive: string,
    counterpartyStatus: string,
    rate: string,
    deadline: string,
    tradeCreator: string,
    status: string
}

interface Chats {
    yourCounterparty: string,
    advert: string,
    lastMessagePreview: string,
    lastDate: string,
}



export const traders: Traders[] = [
    {
        trader: 'Nick',
        sellingAsset: 'WBTC',
        exchangeAsset: 'ETH',
        rate: '42.4564 WBTC/ETH',
        limits: '0.01.-2 WBTC'
    },
    {
        trader: 'Frank',
        sellingAsset: 'WBTC',
        exchangeAsset: 'TOKEN A',
        rate: '5644.1 WBTC/TOKEN A',
        limits: '0.01.- 2 WBTC'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
];

export const trades: Trades[] = [
    {
        contract: '0x54f2Ae..',
        yourCounterparty: 'Trader Nick 4',
        youSend: '0.01 WBTC',
        yourStatus: 'sent',
        youReceive: '10 ETH',
        counterpartyStatus: 'pending',
        rate: '42.4564 WBTC/ETH',
        deadline: '13/01/21',
        tradeCreator: 'Your Username',
        status: 'Successful'
    },
    {
        contract: '0x54f2Ae..',
        yourCounterparty: 'Trader Nick 1',
        youSend: '0.1 DAI',
        yourStatus: 'pending',
        youReceive: '0.2 TOKEN A',
        counterpartyStatus: 'pending',
        rate: '5644.1 WBTC/TOKEN A',
        deadline: '17/02/21',
        tradeCreator: 'Trader Nick 2',
        status: 'Canceled by you'
    },
    {
        contract: '0x54f2Ae..',
        yourCounterparty: 'Trader Nick 15',
        youSend: '10 LINK',
        yourStatus: 'pending',
        youReceive: '13.54 TOKEN D',
        counterpartyStatus: 'sent',
        rate: '312.1 TOKEN C/TOKEN D',
        deadline: '03/03/21',
        tradeCreator: 'Trader Nick 12',
        status: 'Not completed by deadline'
    },
    {
        contract: '0x54f2Ae..',
        yourCounterparty: 'Trader Nick 7',
        youSend: 'TOKEN E',
        yourStatus: 'sent',
        youReceive: '12.32 ETH',
        counterpartyStatus: 'not sent',
        rate: '0.014 TOKEN E/ETH',
        deadline: '21/03/19',
        tradeCreator: 'Your Username',
        status: 'Successful'
    },
];

export const chats: Chats[] = [
    {
        yourCounterparty: 'Trader Nick 1',
        advert: 'WBTC/ETH | 55.1 ETH/WBTC 0.1 - 100 ETH',
        lastMessagePreview: 'Hello sirs! I would like to know whether you can change the price',
        lastDate: '13/01/21',
    },
    {
        yourCounterparty: 'Trader Nick 12',
        advert: 'LINK/DAI | 14.2 LINK/DAYI 1 - 100 LINK',
        lastMessagePreview: 'Thats a very good deal, thank you. And one more question.... How ,uch would you like to take?',
        lastDate: '17/02/21',
    },
    {
        yourCounterparty: 'Trader Nick 22',
        advert: 'WBTC/DAI | 550.1 DAI/WBTC 1 - 230 DAI',
        lastMessagePreview: 'Are you sure? Maybe you can change your mind?',
        lastDate: '03/03/21',
    },
    {
        yourCounterparty:'Trader Nick 4',
        advert: 'WBTC/ETH | 57.1 ETH/WBTC 0.1 - 100 ETH',
        lastMessagePreview: 'thnks',
        lastDate: '21/03/19',
    },
];


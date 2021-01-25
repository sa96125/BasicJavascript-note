//데이터파일
const warriorsGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 126,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 85,
        isWinner: false
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 92,
        isWinner: false
    },
    awayTeam: {
        team: 'Houston',
        points: 95,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 115,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 86,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
}
]


//컨테이너 생성
const ulParent = document.createElement('ul');

//각 요소를 동적으로 생성
for (let game of warriorsGames) {
    const {
        homeTeam,
        awayTeam
    } = game;

    const gameLi = document.createElement('li');

    //홈팀과 어웨이 팀의 디스트럭쳐 (데이터를 세분화하여 사용하기 위함.)
    const {
        team: hTeam,
        points: hPoints
    } = homeTeam;
    const {
        team: aTeam,
        points: aPoints
    } = awayTeam;


    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }

    const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

    //scoreLine 변수에 HTML태그요소가 들어가 있어서 그대로 표현하기 위해서 innerText대신에 사용됨.
    gameLi.innerHTML = `${teamNames} ${scoreLine}`

    //부모에 각리스트를 추가한다.
    ulParent.appendChild(gameLi);
}

//바디의 최상단에 삽입!
document.body.prepend(ulParent);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const createList = (({ homeTeam, awayTeam }) => {
    const {
        team: hTeam,
        points: hPoints
    } = homeTeam;
    const {
        team: aTeam,
        points: aPoints
    } = awayTeam;

    const gameLi = document.createElement('li');
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    gameLi.innerHTML = `${teamNames} ${scoreLine}`

    return gameLi;
});

const getHomeGameColor = (({ homeTeam, awayTeam }, homeTeamName) => {
    const warriors = homeTeamName === 'Golden State' ? homeTeam : awayTeam;
    return warriors.isWinner;
});


const makeChart = (data, team) => {
    const ulParent = document.createElement('ul');

    for (let game of data) {
        const gameLi = createList(game);
        gameLi.classList.add(getHomeGameColor(game, team) ? 'win' : 'loss');
        ulParent.appendChild(gameLi);
    }
    return ulParent;
};

const chart = makeChart(warriorsGames, 'Golden State');
document.body.prepend(chart)
// const chart2 = makeChart(warriorsGames, 'Houston');
// document.body.prepend(chart2)

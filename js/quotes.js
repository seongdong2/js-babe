const quotes =[
    {
        quote: "공학(엔지니어링)은 세상에 존재하는 마술에 가장 가까운 것이다.",
        author: "Elon Reeve Musk",
    },
    {
        quote: "우리 업계는 전통을 존중하지 않고 혁신만을 존중한다.",
        author: "Satya Narayana Nadella",
    },
    {
        quote: "가장 큰 위험은 어떤 위험도 감수하지 않는 것이다.",
        author: "Mark Elliot Zuckerberg",
    },
    {
        quote: "먼저 개척해라. 그리고 고독해져라.",
        author: "Viginia Rometty",
    },
    {
        quote: "실패는 옵션이다. 실패하지 않는다면, 당신은 충분한 혁신을 이룰 수 없다.",
        author: "Elon Reeve Musk",
    },
    {
        quote: "리더십이란, 리더가 없는 상황에서도 그 영향력이 지속되도록 하는 것.",
        author: "Sheryl Sandberg",
    },
    {
        quote: "무엇이 당신을 앞으로 나아가게 하는지 기억하고, 그 목적 의식에 집중하라. 그것이 일과 경력의 차이를 만든다.",
        author: "Timothy Donald Cook",
    },
    {
        quote: "나는 평범한 사람이 비범해지기로 결정할 수 있다고 생각한다.",
        author: "Elon Reeve Musk",
    },
    {
        quote: "끈기는 매우 중요하다. 당신은 포기를 강요받기 전에는 절대 포기해선 안된다.",
        author: "Elon Reeve Musk",
    },
    {
        quote: "부정적인 의견을 잘 듣고 정말로 원하세요. 특히나 주변 친구들에게요. 사람들은 거의 그렇게 하지 않는데, 이건 정말로 도움이 됩니다.",
        author: "Elon Reeve Musk",
    },
    {
        quote: "좋은 것과 잘하는 것 중 하나를 선택할 필요는 없다. 그건 잘못된 선택이다. 오늘이 그 어느 때보다도 중요하다.",
        author: "Timothy Donald Cook",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
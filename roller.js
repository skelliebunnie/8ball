const rollBtn = document.querySelector("#roll-btn");
const resultsCont = document.querySelector("#results");
const emojiCont = document.querySelector("#emoji");

const results = [
	"My reply is ... 'no'", 
	"Don't count on it", 
	"My sources say 'nope'", 
	"very doubtful", 
	"outlook not so good", 
	"better not think about it", 
	"prediction reliability ... uncertain", 
	"ask again later", 
	"reply hazy, try again", 
	"non-zero chance", 
	"getting there", 
	"outlook good", 
	"signs point to 'yes'", 
	"closing in on a 'yes'", 
	"Sure", 
	"You may rely on it", 
	"Without a doubt", 
	"Yes, definitely", 
	"It is decidely so", 
	"It is certain"
];

const emojiResults = [
	"( ͒˃̩̩⌂˂̩̩ ͒)", // reply is 'no' 
	"(;•͈́༚•͈̀)", // don't count on it
	"(੭ ˃̣̣̥ ㅂ˂̣̣̥)੭ु", // sources say 'nope'
	"‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚", // very doubtful
	"(　ﾟдﾟ)", // outlook not so good
	"(๏д๏)", // better not think about it
	"(ꐦ°᷄д°᷅)", // prediction reliability uncertain
	"¯\\(◉‿◉)/¯", // ask again later
	"¯\\_(⊙︿⊙)_/¯", // reply hazy, try again
	"∑(ﾟﾛﾟ〃)", // non-zero chance
	"( ͡° ͜ʖ ͡°)", // getting there
	"(゜▽゜;)",
	"☜(˚▽˚)☞", 
	"(ノ*゜▽゜*)", 
	"d=(´▽｀)=b", 
	"ヾ（〃＾∇＾）ﾉ♪", 
	"W(╯✧∇✧)╯", 
	"°˖✧◝(⁰▿⁰)◜✧˖°", 
	"˭̡̞(◞⁎˃ᆺ˂)◞*✰", 
	"(ﾉ^ヮ^)ﾉ*:・ﾟ✧"
];

function rollButton() {
	let resNum = Math.floor(Math.random() * (19 - 0 + 1) + 0);
	// resultsCont.innerHTML = `(${resNum}) ${results[resNum]}`;
	resultsCont.innerHTML = `${results[resNum]}`;
	emojiCont.innerHTML = emojiResults[resNum];
}

rollBtn.addEventListener('click', function() {
	rollButton();
});
rollButton();
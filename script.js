const makeChange = (c) => {
  // your name here
	const q=Math.floor(c/25);
	const remainingCentsAfterQuarters=c%25;
	const d=Math.floor(remainingCentsQuarters/10);
	const remainingCentsAfterDimes=remainingCentsAfterQuarters%10;
	const n=Math.floor(remainingCentsAfterDimes/5);
	const remainingCentsAfterNickels=remainingCentsAfterDimes%5;
	const p=remainingCentsAfterNickels;
	return{"q":q,"d":}d,"n":n,"p":p};
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));

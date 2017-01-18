function tweakSonnet() {
	var target = document.getElementById('sonnet');
	console.log(target);
	var sonnet = target.textContent;

	var charCount = sonnet.length;
	console.log(charCount);

	var orphansIndex = sonnet.indexOf('orphans');
	console.log('position of \'orphans\': ', orphansIndex);

	sonnet = sonnet.replace(/winter/gi, 'yuletide');
	sonnet = sonnet.replace(/the /gi, 'a large ');
	console.log(sonnet);

	target.innerHTML = sonnet;
}

var elemToHear = document.getElementById('sonnet');
elemToHear.addEventListener("click", tweakSonnet);
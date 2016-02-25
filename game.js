//our variables

var wordbank = ['Sayreville', 'Iselin', 'Manalapan', 'Woodbridge', 'Hoboken', 'Atlantic City'];
var computerChoice = "";
var lettersInWord = [];
var blankLines = [];
var correctblanks=[];
var guess=false; 
var attempts=0;

start();
	function start(){
		
		computerChoice = wordbank[Math.floor(Math.random() * wordbank.length)];

		lettersInWord = computerChoice.split("");
		alert(lettersInWord);
		for (var i=0; i<lettersInWord.length; i++){
			blankLines.push("_");

		}
			checkLetter();
	}

	function checkLetter(userLetter){
		alert("called");
			for(var i=0;i<lettersInWord.length;i++){
				if(lettersInWord[i]==userLetter){
					alert("good job");
					guess=true;
					attempts++;
					//checkLetter(userLetter);

				}
					else{
						("letter not in word");
						attempts++;
					}
				if(guess){
					for(var i=0;i<lettersInWord.length;i++){
						if(userLetter==lettersInWord[i]){
							blankLines[i]=userLetter;
							console.log(blankLines)
						}
					}
				}
				
			}
	



	}



	document.onkeyup=function(event){
		var userLetter=String.fromCharCode(event.keyCode).toLowerCase();
		checkLetter(userLetter);

	}
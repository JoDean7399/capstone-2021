//These global variables will be used throughout in various functions. I am using many of these variables in numerous functions and that's why I have chosen to make them Global. 
const beginnerQuestions = [
    {
        hint: 'What is the correct definition for position Absolute?',
        choices: [
            'static: default value in the order as they appear',
            'relative: positioned relative to its normal position',
            'absolute: positioned absolutely to its first positioned parent',
            'fixed: related to browser window'
        ],
        correct: 'absolute: positioned absolutely to its first positioned parent'
    },
    {
        hint: 'Which type of positioning would best be used to place an element in a permanent position on an HTML page?',
        choices: [
            'fixed: related to the browser window',
            'static: default value in order as they appear',
            'absolute: positioned absolutely to its first positioned parent',
            'relative: positioned relative to its normal position'
        ],
        correct: 'fixed: related to the browser window'
    },
    {
        hint: 'What type of image reduces the image quality slightly to improve loading time?',
        choices: [
            'jpg',
            'png',
            'jpeg',
            'mov'
        ],
        correct: 'jpg'
    },
    {
        hint: 'What is not an image file format extention?',
        choices: [
            'jpeg',
            'png',
            'jpg',
            'mov'
        ],
        correct: 'mov'
    },
    {
        hint: "Which of the following properties of an anchor element shows that the element currently has the user's mouse over it?",
        choices: [
            ':link',
            ':hover',
            ':visited',
            ':active'
        ],
        correct: ':hover'
    },
    {
        hint: "What will this code produce <p></p>?",
        choices: [
            'a paragraph',
            'a link to another page',
            'an alert',
            'all the above'
        ],
        correct: 'a paragraph'
    },
    {
        hint: "What does this code do? <p>What do I do?</p><hr/><p>What did I do?</p>",
        choices: [
            'deletes the first paragraph',
            'makes all the text bold',
            'puts a horizontal line between the two paragraphs',
            'none of the above'
        ],
        correct: 'puts a horizontal line between the two paragraphs'
    },
    {
        hint: '<strong> and <em> are not HTML elements',
        choices: [
            'True',
            'False'
        ],
        correct: 'False'
    },
    {
        hint: 'You can make an image a background image using CSS',
        choices: [
            'True',
            'False'
        ],
        correct: 'True'
    },
    {
        hint: 'Which code would you use to underline a word?',
        choices: [
            'text-transform',
            'text-formation',
            'text-decoration',
            'none of the above'
        ],
        correct: 'text-decoration'
    }
];
const intermediateQuestions = [
    {
        hint: 'javaScript runs where it is found in the HTML',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'javaScript is case sensitive',
        choices: ['True', 'False'],
        correct: 'False'
    },
    {
        hint: 'Which code would change the hotel name to Park?',
        choices: ['hotel.name = "Park"', 'hotel.changeName = Park', 'hotel$name = "Park"', '$(hotel).name = Park'],
        correct: 'hotel.name = "Park"'
    },
    {
        hint: 'What will $(li.hot) do?',
        choices: ['Find first <li> with a class of hot', 'Give one <li> the class of hot', 'Find all <li> elements with the class of hot', 'Find a <ul> with the class of hot'],
        correct: 'Find all <li> elements with the class of hot'
    },
    {
        hint: '[attribute != "value"] will find elements that carry the specified attribute with the specified value',
        choices: ['True', 'False'],
        correct: 'False'
    },
    {
        hint: 'You can chain methods in javaSript',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'You can nest if statements inside for loops',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'You can not make a timer in javaScript',
        choices: ['True', 'False'],
        correct: 'False'
    },
    {
        hint: 'You can have a function inside a function',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'You can use the "debugger" to check javaScript',
        choices: ['True', 'False'],
        correct: 'True'
    }
];
const expertQuestions = [
    {
        hint: 'What does a recursive function do?',
        choices: ['Calls itself', 'Changes multiple classes in one step', 'Slows things down', 'Speeds things up'],
        correct: 'Calls itself'
    },
    {
        hint: 'You need a server to use localStorage',
        choices: ['True', 'False'],
        correct: 'False'
    },
    {
        hint: 'What does the S stand for in HTTPS?',
        choices: ['Security', 'Safe', 'Second', 'Saved'],
        correct: 'Security'
    },
    {
        hint: 'The scale method causes anything drawn after it to be scaled',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'You can use Object.create to create an object with a specific prototype',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: "In Marijn Haverbeke's opinion asynchronicity is a sensible choice in javaScript",
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'What does an abstraction in javaScript do?',
        choices: ['Makes all images opaque', 'Reverses all images',
            'Hides details and give us the ability to discuss problems at a higher (or more abstract) level', 'None of the above'],
        correct: 'Hides details and give us the ability to discuss problems at a higher (or more abstract) level'
    },
    {
        hint: 'Replace is a RegExp method',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'Console.log is a function',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        hint: 'Checkboxes and radio buttons act in the exact same way',
        choices: ['True', 'False'],
        correct: 'False'
    }
];
const homeElement = document.getElementById('home');
const homeContainer = document.createElement('div');
const goToQuizBtn = createBtn('goToQuiz', 'Go To The Quiz', listenerForGoToQuizBtn);
const goodLuck = goodLuckMessage();
const nextBtn = createBtn('nextBtn', 'Go To Next Question', goToNextQuestion);
const timesUpDiv = document.createElement('div');
const timesUpMessage = document.createElement('h5');
const tallyDiv = document.createElement('div');
const tallyMessage = document.createElement('h4');
let correct, incorrect, timedOut, userChoice, correctAnswer, incorrectAnswer, timedOutAnswer;
correct = 0;
incorrect = 0;
timedOut = 0;
//This initializes the varibale for the setInterval to allow for clearInterval when clicking on the answer button
let countDown;  
goToQuizBtn.id = 'goToQuizBtn';
goToQuizBtn.classList.add('mx-auto', 'col-5', 'mt-5');
goodLuck.classList.add('text-center');
nextBtn.classList.add('col-4', 'mt-3', 'mx-auto', 'hidden');
homeContainer.id = 'homeContainer';
homeContainer.classList.add('container');
homeContainer.appendChild(goToQuizBtn);
homeElement.appendChild(goodLuck);
timesUpDiv.id = 'timesUpDiv';
timesUpDiv.classList.add('text-center', 'hidden');
tallyDiv.classList.add('text-center');
//This function creates the timer that gives the user 20 seconds to answer the question. If they don't it will give time's up message
function timer() {
    var counter = 20;   // start count at 20 since user has 20 seconds to answer       
    countDown = setInterval(function () {  //  timer     
        counter--;
        if (counter > 0) {   // as long as there is time remaining to answer
            timesUpDiv.innerHTML = "";
            // advise user of time remaining to answer question    
            timesUpDiv.innerHTML = `<div>You have <b class='text-danger'>${counter}</b> seconds remaining</div>`;
            timesUpDiv.appendChild(timesUpMessage);
        }
        if (counter === 0) { // if user fails to answer question in time
            clearInterval(countDown);
            timesUpDiv.innerHTML = "";
            timesUpDiv.innerHTML = "Time's Up";
            //This increments the timedOut answers for tallying
            timedOut++
            timesUpDiv.appendChild(timesUpMessage);
            nextBtn.classList.remove('hidden');
        };
    }, 1000);   // one second intervals    
};
//This function stops the timer
function stopTimer() {
    clearInterval(countDown);
    return;
};
//This IFFE creates the page layout 
(() => {
    homeElement.appendChild(homeContainer);
    if (home) {
        const createdLinks = createAllLinks();
        const homePageForm = Form('homePageForm', 'Click To Continue');
        const createChoiceDiv = createChoicesDiv();
        goToQuizBtn.remove();
        goodLuck.remove();
        nextBtn.remove();
        homeContainer.appendChild(homePageForm);
        homeContainer.appendChild(createdLinks);
        homeContainer.appendChild(createChoiceDiv);
    } else if (beginner) {
        const createdBeginnerQuestion = drawQuestions(beginnerQuestions, 'beginner');
        const createdBeginnerLinks = createAllLinks();
        homeContainer.appendChild(createdBeginnerQuestion);
        homeElement.appendChild(nextBtn);
        homeElement.appendChild(createdBeginnerLinks);
    } else if (intermediate) {
        const createdIntermediateQuestion = drawQuestions(intermediateQuestions, 'intermediate');
        const createdIntermediateLinks = createAllLinks();
        homeContainer.appendChild(createdIntermediateQuestion);
        homeElement.appendChild(nextBtn);
        homeElement.appendChild(createdIntermediateLinks);
    } else if (expert) {
        const createdExpertQuestion = drawQuestions(expertQuestions, 'expert');
        const createdExpertLinks = createAllLinks();
        homeContainer.appendChild(createdExpertQuestion);
        homeElement.appendChild(nextBtn);
        homeElement.appendChild(createdExpertLinks);
    };
})();
//This function makes buttons
function createBtn(id, btnText, listener) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.onclick = listener;
    btn.classList.add('d-block', 'bdr', 'bg-color', 'btn-border');
    btn.type = 'button';
    btn.innerText = btnText;
    return btn;
};
//This function creates the form for the home page
function Form(id) {
    const form = document.createElement('form');
    const userNameInput = document.createElement('input');
    //This variable will be used in the goodLuck message to the user when they go to the quiz page. It makes their name appear in their favorite color
    const favoriteColorInput = document.createElement('input');
    let btn = createBtn('submit', 'Click Me To Continue');
    form.id = id;
    form.classList.add('row', 'justify-content-center');
    userNameInput.id = 'userName';
    userNameInput.name = 'userName';
    userNameInput.type = 'text';
    userNameInput.classList.add('d-block', 'form-group', 'form-control', 'col-12', 'bg-color');
    userNameInput.placeholder = 'Enter Your First Name';
    userNameInput.required = true;
    favoriteColorInput.id = 'favoriteColor';
    favoriteColorInput.name = 'favoriteColor';
    favoriteColorInput.type = 'favoriteColor';
    favoriteColorInput.classList.add('d-block', 'form-group', 'form-control', 'col-12', 'mt-3', 'bg-color');
    favoriteColorInput.placeholder = 'Enter Your Favorite Color';
    favoriteColorInput.required = true;
    btn.type = 'submit';
    btn.classList.add('col-4', 'mt-3');
    form.addEventListener('submit', getInputInfo);
    form.appendChild(userNameInput);
    form.appendChild(favoriteColorInput);
    form.appendChild(btn);
    return form;
};
//This function captures the info from the form and sets the info in localStorage to later be gotten in the goodLuckMessage function
function getInputInfo(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const favColor = document.getElementById('favoriteColor').value;
    console.log(name);
    document.getElementById('homePageForm').classList.add('hidden');
    document.getElementById('choiceDiv').classList.remove('hidden');
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('color', favColor);
    return;
};
//This function gives the user a personalized Good Luck message
function goodLuckMessage() {
    let goodLuckDiv = document.createElement('div');
    const userName = window.localStorage.getItem('name');
    const color = window.localStorage.getItem('color');
    goodLuckDiv.innerHTML = `<h1>Good Luck</h1><h1 style = 'color:${color}'>${userName}</h1>`
    goodLuckDiv.id = 'goodLuckDiv';
    homeContainer.appendChild(goodLuckDiv);
    return goodLuckDiv;
};
//This fucntion creates the links for all the readings for all 3 quizzes repsectivlely and puts all the readings on the home page and puts the respective readings on the repective pages
function createAllLinks() {
    const anchorTags = [
        [
            {
                href: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TLIwLLawTE4yYPRSyyjJzVFIzEtRSC4uVkhJLc5MzwNzk0ozc1IUylOTijNLUosB2vkSaA&q=html+and+css+design+and+build+websites&rlz=1C5CHFA_enUS1024US1024&oq=&aqs=chrome.0.46i39i362j35i39i362l7.190374j0j7&sourceid=chrome&ie=UTF-8",
                innerText: 'HTML & CSS Design and Build Websites'
            },
            {
                href: "https://www.google.com/search?q=pro+html5+and+css3+design+patterns&rlz=1C5CHFA_enUS1024US1024&oq=pro+html5&aqs=chrome.7.69i57j46i512j0i512l3j46i20i263i512j0i512j0i22i30l2.13428j0j7&sourceid=chrome&ie=UTF-8",
                innerText: 'Pro HTML5 and CSS3 Design Patterns'
            }
        ],
        [
            {
                href: 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TM41tTDMNcwzYPRSTFQozk0sKkktUihPrFQoyVfISU0sylPISixLLE4uyiwoAQCHTBDR&q=a+smarter+way+to+learn+javascript&rlz=1C5CHFA_enUS1024US1024&oq=a+smarter&aqs=chrome.3.0i20i263i355i512j46i20i263i512j69i57j46i512l2j0i512l5.14068j0j7&sourceid=chrome&ie=UTF-8',
                innerText: 'A Smarter Way To Learn JavaScript'
            },
            {
                href: 'https://www.google.com/search?gs_ssp=eJzj4tLP1TcwzTKJzy00YPSSzEosSyxOLsosKFEoyUhVSM_PT1EoSCwqKQYA-WgNXw&q=javascript+the+good+parts&rlz=1C5CHFA_enUS1024US1024&oq=javascript+the&aqs=chrome.2.69i57j0i131i433i512j46i512l2j0i512l2j69i61j69i60.17222j0j9&sourceid=chrome&ie=UTF-8',
                innerText: 'JavaScript: The Good Parts'
            }
        ],
        [
            {
                href: 'https://www.google.com/search?gs_ssp=eJzj4tLP1TcwzTKJzy00YPSSzEosSyxOLsosKFEoyUhVSM_PT1EoSCwqKQYA-WgNXw&q=javascript+the+good+parts&rlz=1C5CHFA_enUS1024US1024&oq=javascript+the&aqs=chrome.2.69i57j0i131i433i512j46i512l2j0i512l2j69i61j69i60.17222j0j9&sourceid=chrome&ie=UTF-8',
                innerText: 'ELOQUENT JAVASCRIPT 3rd edition'
            }
        ]
    ];
    const allLinksDiv = document.createElement('div');
    const allLinksMessage = document.createElement('h4');
    const allLinksMessagePara = document.createElement('p');
    allLinksDiv.id = 'allLinksDiv'
    allLinksDiv.classList.add('container');
    allLinksMessage.classList.add('link-text-color', 'mt-5');
    allLinksMessage.innerText = 'BRUSH UP BEFORE QUIZZING';
    allLinksMessagePara.classList.add('link-text-color');
    allLinksMessagePara.innerText = 'Click on the links below for acces to study material';
    allLinksDiv.appendChild(allLinksMessage);
    allLinksDiv.appendChild(allLinksMessagePara);
    //These for loops create the tags for each page respectively. There is one array with an array inside the original array for each page so that they can be iterated over and placed on the correct page
    if (home) {
        for (let i = 0; i < anchorTags.length; i++) {
            for (let j = 0; j < anchorTags[i].length; j++) {
                let aTag = document.createElement('a');
                aTag.href = anchorTags[i][j].href;
                aTag.innerText = anchorTags[i][j].innerText;
                aTag.classList.add('link-text-color', 'link-display');
                allLinksDiv.appendChild(aTag);
            };
        };
    } else if (beginner) {
        for (let i = 0; i < anchorTags[0].length; i++) {
            let beginnerATag = document.createElement('a');
            beginnerATag.href = anchorTags[0][i].href;
            beginnerATag.innerText = anchorTags[0][i].innerText;
            beginnerATag.classList.add('link-text-color', 'link-display');
            allLinksDiv.appendChild(beginnerATag)
        };
    } else if (intermediate) {
        for (let i = 0; i < anchorTags[1].length; i++) {
            let intermediateATag = document.createElement('a');
            intermediateATag.href = anchorTags[1][i].href;
            intermediateATag.innerText = anchorTags[1][i].innerText;
            intermediateATag.classList.add('link-text-color', 'link-display');
            allLinksDiv.appendChild(intermediateATag)
        };
    } else if (expert) {
        for (let i = 0; i < anchorTags[2].length; i++) {
            let expertATag = document.createElement('a');
            expertATag.href = anchorTags[2][i].href;
            expertATag.innerText = anchorTags[2][i].innerText;
            expertATag.classList.add('link-text-color', 'link-display');
            allLinksMessagePara.innerText = 'Click the link below for access to study material';
            allLinksDiv.appendChild(expertATag)
        };
    };
    return allLinksDiv;
};
//This function creates the buttons for your choice of quiz
function createChoicesDiv() {
    const choiceDiv = document.createElement('div');
    const choiceMessage = document.createElement('h4');
    const beginnerBtn = createBtn('beginnerBtn', '');
    const intermediateBtn = createBtn('intermediateBtn', '');
    const expertBtn = createBtn('expertBtn', '');
    const beginnerATag = document.createElement('a');
    const intermediateATag = document.createElement('a');
    const expertATag = document.createElement('a');
    choiceDiv.id = 'choiceDiv';
    choiceMessage.id = 'choiceMessage';
    choiceDiv.classList.add('container', 'hidden');
    beginnerBtn.classList.add('col-4', 'mt-5', 'mx-auto');
    intermediateBtn.classList.add('col-4', 'mt-2', 'mx-auto');
    expertBtn.classList.add('col-4', 'mt-2', 'mx-auto');
    beginnerATag.innerText = 'Beginner';
    intermediateATag.innerText = 'Intermediate';
    expertATag.innerText = 'Expert';
    beginnerATag.href = './html/beginner.html';
    intermediateATag.href = './html/intermediate.html';
    expertATag.href = './html/expert.html';
    choiceMessage.innerText = 'Click Your Choice';
    choiceDiv.appendChild(choiceMessage);
    beginnerBtn.appendChild(beginnerATag);
    intermediateBtn.appendChild(intermediateATag);
    expertBtn.appendChild(expertATag);
    choiceDiv.appendChild(beginnerBtn);
    choiceDiv.appendChild(intermediateBtn);
    choiceDiv.appendChild(expertBtn);
    return choiceDiv;
};
//This function creates the listener for the goToQuizBtn
function listenerForGoToQuizBtn(e) {
    if (home) {
        return;
    } else {
        document.getElementById('questionDiv').classList.remove('hidden');
        timer();
        timesUpDiv.classList.remove('hidden');
        goToQuizBtn.remove();
        goodLuck.remove();
    };
};
//This function creates the questions and answers for the quiz
function drawQuestions(arr) {
    if (home) {
        return;
    };
    //Here I am creating a div to hold the random question which will be an h4, the answers and the correctNumber for the correctAnswer for each question
    const questionDiv = document.createElement('div');
    const question = document.createElement('h4');
    const randomQuestionNumber = Math.floor(Math.random() * arr.length);
    const currentQuestion = arr[randomQuestionNumber].hint;
    const answers = arr[randomQuestionNumber].choices;
    const correctNumber = arr[randomQuestionNumber].correct;
    questionDiv.id = 'questionDiv';
    questionDiv.classList.add('questionDiv', 'hidden');
    question.classList.add('text-center');
    question.innerText = currentQuestion;
    homeContainer.appendChild(timesUpDiv);
    questionDiv.appendChild(question);
    //Here I am creating the buttons for each of the answer choices
    for (let i = 0; i < answers.length; i++) {
        let createdButton = createBtn(`createdButton${i}`, answers[i]);
        createdButton.classList.add('col-8', 'mt-3', 'mx-auto', 'createdButton');
        questionDiv.appendChild(createdButton);
        createdButton.dataset.correct = correctNumber;
        //This is the eventListener for the buttons created for the answers using the greeting function letting them know if they're correct or telling them the correct ansser if they're incorrect.
        createdButton.addEventListener('click', greeting)
    };
    //This is where the finished quiz, thank you and refresh messages are made
    if (arr.length === 5) {
        const finishedQuizDiv = document.createElement('div');
        const finishedQuizMessage = document.createElement('h4');
        const thankYouForQuizzingMsg = document.createElement('h4');
        const refreshPageMessage = document.createElement('h4');
        let doesExist;
        let userArray;
        const scoreSheet = {
            name: localStorage.getItem('name'),
            correct: correct
        };
        finishedQuizMessage.innerText = 'You have finished the quiz';
        thankYouForQuizzingMsg.innerText = 'Thank you for taking the quiz';
        refreshPageMessage.innerText = 'Refresh the page to retake the quiz';
        finishedQuizDiv.classList.add('text-center');
        thankYouForQuizzingMsg.classList.add('text-center');
        refreshPageMessage.classList.add('text-center');
        //This makes the message for how many the user gets correct
        if (correct === 1) {
            correctAnswer = `${correct} correct answer`;
        } else {
            correctAnswer = `${correct} correct answers`;
        };
        //This makes the message for how many the user gets incorrect
        if (incorrect === 1) {
            incorrectAnswer = `${incorrect} incorrect answer`;
        } else {
            incorrectAnswer = `${incorrect} incorrect answers`;
        };
        //This makes the message for how many answers the user times out on
        if (timedOut === 1) {
            timedOutAnswer = `timed out on ${timedOut} answer`;
        } else {
            timedOutAnswer = `timed out on ${timedOut} answers`;
        };
        //This checks for existing information in localStorage in respective arrays for each page and if it doesn't exist assigns it a value so it can be created. I have made it an array so that several names and scores can be saved to be placed in the highScores table 
        if (beginner) {
            doesExist = localStorage.getItem('beginnerUserName');
            if (doesExist) {
                userArray = JSON.parse(doesExist);
            } else {
                userArray = [];
            };
        } else if (intermediate) {
            doesExist = localStorage.getItem('intermediateUserName');
            if (doesExist) {
                userArray = JSON.parse(doesExist);
            } else {
                userArray = [];
            };
        } else if (expert) {
            doesExist = localStorage.getItem('expertUserName');
            if (doesExist) {
                userArray = JSON.parse(doesExist);
            } else {
                userArray = [];
            };
        };
        userArray.push(scoreSheet);
        if (beginner) {
            window.localStorage.setItem('beginnerUserName', JSON.stringify(userArray));
        } else if (intermediate) {
            window.localStorage.setItem('intermediateUserName', JSON.stringify(userArray));
        } else if (expert) {
            window.localStorage.setItem('expertUserName', JSON.stringify(userArray));
        };
        highScoreUserInfo()
        tallyMessage.innerText = `You had ${correctAnswer}, ${incorrectAnswer} and ${timedOutAnswer}`;
        finishedQuizDiv.appendChild(finishedQuizMessage);
        finishedQuizDiv.appendChild(tallyDiv);
        finishedQuizDiv.appendChild(thankYouForQuizzingMsg);
        finishedQuizDiv.appendChild(refreshPageMessage);
        homeElement.appendChild(finishedQuizDiv);
        document.getElementById('allLinksDiv').classList.add('hidden');
        homeContainer.remove();
        nextBtn.remove();
        goodDay(name);
        document.getElementById('viewBtn').classList.remove('hidden');
    };
    arr.splice(randomQuestionNumber, 1);
    return questionDiv;
};
//This function creates the greeting letting the person know that they are correct or gives them the correct answer if they're wrong to be called in the drawQuestion function
function greeting(e) {
    e.preventDefault();
    stopTimer();
    const greeting = document.createElement('h1');
    const clicked = e.target.innerText;
    const correctNumber = e.target.dataset.correct;
    let animatedBtn = e.target
    let disableBtn = document.getElementsByClassName('createdButton');
    //This disables the buttons so that when the user clicks on any of them the user can't click on any of them again stopping the user from answering the question more than once.
    for (let i = 0; i < disableBtn.length; i++) {
        disableBtn[i].disabled = true;   
    }
    greeting.classList.add('text-center');
    if (clicked === correctNumber) {
        $(greeting).text('YOU GOT IT');
        nextBtn.classList.remove('hidden');
        //This animates the button to change to light green with black text when the button is clicked
        $(animatedBtn).animate().css({
            color: 'black',
            backgroundColor: 'lightGreen'
        });
        //This increments the correct answers for tallying
        correct++;
        goodLuck.remove();
    } else {
        $(greeting).text(`The Correct Answer is ${correctNumber}`);
        nextBtn.classList.remove('hidden');
        //This animates the button to change to red with black text when the button is clicked
        $(animatedBtn).animate().css({
            color: 'black',
            backgroundColor: 'red'
        });
        //This increments the incorrect answers for tallying
        incorrect++;
        goodLuck.remove();
    };
    tallyDiv.appendChild(tallyMessage);
    timesUpDiv.remove();
    questionDiv.appendChild(greeting);
    return;
};
//This function creates the listener for the go to the next question button
function goToNextQuestion(e) {
    e.preventDefault();
    homeContainer.innerHTML = '';
    if (home) {
        return;
    } else if (beginner) {
        const beginQuest = drawQuestions(beginnerQuestions, 'beginner');
        beginQuest.classList.remove('hidden');
        homeContainer.appendChild(beginQuest);
    } else if (intermediate) {
        const interQuest = drawQuestions(intermediateQuestions, 'intermediate');
        interQuest.classList.remove('hidden');
        homeContainer.appendChild(interQuest);
    } else if (expert) {
        const expertQuest = drawQuestions(expertQuestions, 'expert');
        expertQuest.classList.remove('hidden');
        homeContainer.appendChild(expertQuest);
    };
    timesUpDiv.innerHTML = '';
    nextBtn.classList.add('hidden');
    timer();
    return correctAnswer;
};
//This gets the user information from localStorage and sorts it so that the user can be placed in the highScores table automatically when they've finished the quiz
// function highScoreUserInfo(){
//     let userInfo;
//     let newUserInfo;
//     if (beginner) {
//         userInfo = localStorage.getItem('beginnerUserName');
//     } else if (intermediate) {
//         userInfo = localStorage.getItem('intermediateUserName');
//     } else if (expert) {
//         userInfo = localStorage.getItem('expertUserName');
//     };
//     newUserInfo = JSON.parse(userInfo);
//     newUserInfo.sort(function (a, b) {
//         return b.correct - a.correct;
//     });
//     for (let i = 0; i < 5; i++) {
//         let tdCell = document.getElementById(`highScore${i}`);
//         console.log(tdCell);    
//         if(newUserInfo[i]){
//             let userHighScore = newUserInfo[i].name;
//             tdCell.innerText = userHighScore;
//         };
//     };
// };
//This function creates a message for the user to have a good morning, afternoon or evening when they have finished their quiz
function goodDay(name) {
    const time = new Date();
    const hour = time.getHours();
    const haveAGoodDay = document.createElement('h4');
    name = window.localStorage.getItem('name');
    haveAGoodDay.classList.add('text-center')
    switch (true) {
        case hour < 12: {
            haveAGoodDay.innerText = `Have a good morning ${name}`;
            break;
        };
        case hour < 18: {
            haveAGoodDay.innerText = `Have a good afternoon ${name}`;
            break;
        };
        case hour <= 23: {
            haveAGoodDay.innerText = `Have a good evening ${name}`;
            break;
        };
        default:
            break;
    };
    homeElement.appendChild(haveAGoodDay);
};
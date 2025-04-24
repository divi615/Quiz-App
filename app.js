const quizData = {
    science: [
      { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], answer: "H2O" },
      { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
      { question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
      { question: "What is the hardest natural substance?", options: ["Diamond", "Gold", "Iron", "Quartz"], answer: "Diamond" },
      { question: "Which organ pumps blood?", options: ["Lungs", "Heart", "Liver", "Kidney"], answer: "Heart" },
      { question: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
      { question: "Which gas is essential for respiration?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"], answer: "Oxygen" },
      { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
      { question: "What is the basic unit of life?", options: ["Atom", "Cell", "Tissue", "Organ"], answer: "Cell" },
      { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" }
    ],
    history: [
      { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Vasco da Gama", "Magellan"], answer: "Christopher Columbus" },
      { question: "In which year did World War II end?", options: ["1942", "1945", "1948", "1950"], answer: "1945" },
      { question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel", "Golda Meir"], answer: "Margaret Thatcher" },
      { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Tesla", "Marconi"], answer: "Alexander Graham Bell" },
      { question: "When was the Declaration of Independence signed?", options: ["1776", "1789", "1804", "1812"], answer: "1776" },
      { question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Byzantine", "Ottoman"], answer: "Roman" },
      { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Kublai Khan", "Sun Tzu", "Confucius"], answer: "Qin Shi Huang" },
      { question: "Where was Napoleon Bonaparte born?", options: ["France", "Corsica", "Italy", "Spain"], answer: "Corsica" },
      { question: "Who wrote 'The Republic'?", options: ["Plato", "Aristotle", "Socrates", "Confucius"], answer: "Plato" },
      { question: "Which war ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Napoleonic Wars", "Cold War"], answer: "World War I" }
    ],
    mathematics: [
      { question: "What is 7 + 8?", options: ["14", "15", "16", "17"], answer: "15" },
      { question: "What is the square root of 81?", options: ["9", "8", "7", "6"], answer: "9" },
      { question: "What is 12 x 12?", options: ["144", "124", "132", "150"], answer: "144" },
      { question: "What is 100 divided by 4?", options: ["20", "25", "30", "40"], answer: "25" },
      { question: "What is the value of pi (approx)?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
      { question: "What is 15% of 200?", options: ["30", "25", "35", "40"], answer: "30" },
      { question: "Solve: 5x = 20. What is x?", options: ["2", "3", "4", "5"], answer: "4" },
      { question: "What is 2 cubed?", options: ["6", "8", "10", "12"], answer: "8" },
      { question: "What is 0 factorial (0!)?", options: ["0", "1", "2", "Undefined"], answer: "1" },
      { question: "What is the next prime number after 7?", options: ["9", "10", "11", "12"], answer: "11" }
    ],
    geography: [
      { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: "Asia" },
      { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
      { question: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" },
      { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
      { question: "Mount Everest is located in which country?", options: ["India", "Nepal", "China", "Bhutan"], answer: "Nepal" },
      { question: "Which desert is the largest?", options: ["Sahara", "Gobi", "Kalahari", "Arctic"], answer: "Sahara" },
      { question: "Which country has the largest population?", options: ["USA", "India", "China", "Russia"], answer: "China" },
      { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
      { question: "Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: "Australia" },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "Thailand", "Vietnam"], answer: "Japan" }
    ],
    technology: [
      { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"], answer: "Bill Gates" },
      { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Power Unit", "Control Processing Unit", "Central Program Unit"], answer: "Central Processing Unit" },
      { question: "Which company developed the iPhone?", options: ["Google", "Microsoft", "Apple", "Samsung"], answer: "Apple" },
      { question: "What does AI stand for?", options: ["Artificial Information", "Artificial Intelligence", "Automated Interface", "Advanced Intelligence"], answer: "Artificial Intelligence" },
      { question: "Which language is used for web development?", options: ["Python", "HTML", "Java", "C++"], answer: "HTML" },
      { question: "What is the main function of RAM?", options: ["Storage", "Processing", "Temporary Memory", "Data Backup"], answer: "Temporary Memory" },
      { question: "Which browser is developed by Google?", options: ["Firefox", "Safari", "Chrome", "Opera"], answer: "Chrome" },
      { question: "What is the full form of HTTP?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transfer Path", "High Technology Transfer Protocol"], answer: "HyperText Transfer Protocol" },
      { question: "Which is a popular cloud service?", options: ["AWS", "MySQL", "MongoDB", "Linux"], answer: "AWS" },
      { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Required Locator", "Universal Required Locator"], answer: "Uniform Resource Locator" }
    ]
  };
let currentQuestion = 0;
let score = 0;
let selectedDomain = '';
let currentQuiz = [];
let selectedOption = '';
let confirmed = false;
let domainScores = [];

const domainSelect = document.getElementById('domain-select');
const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const confirmBtn = document.getElementById('confirm');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');
const summaryEl = document.getElementById('summary');
const returnBtn = document.getElementById('return');

domainSelect.onchange = () => {
    selectedDomain = domainSelect.value;
    fetchQuestions(selectedDomain);
};

function fetchQuestions(domain) {
    if (!domain) return;

    currentQuiz = quizData[domain] || [];
    currentQuestion = 0;
    score = 0;

    if (currentQuiz.length > 0) {
        quizContainer.style.display = 'block';
        returnBtn.style.display = "none";
        summaryEl.innerHTML = "";
        loadQuestion();
    } else {
        quizContainer.innerHTML = '<p>No questions available for this domain.</p>';
    }
}

function loadQuestion() {
    confirmed = false;
    selectedOption = '';

    if (currentQuestion >= currentQuiz.length) {
        displaySummary();
        return;
    }

    const current = currentQuiz[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';
    resultEl.textContent = '';
    confirmBtn.disabled = true;
    submitBtn.disabled = true;
    updateProgressBar();

    current.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => selectOption(button, option);
        optionsEl.appendChild(button);
    });
}

function selectOption(button, option) {
    if (!confirmed) {
        selectedOption = option;
        document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        confirmBtn.disabled = false;
    }
}

confirmBtn.onclick = () => {
    if (selectedOption) {
        confirmed = true;
        const correct = currentQuiz[currentQuestion].answer;
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedOption) {
                btn.classList.add('incorrect');
            }
        });

        if (selectedOption === correct) {
            score++;
            resultEl.textContent = 'Correct!';
        } else {
            resultEl.textContent = `Wrong! The correct answer was ${correct}.`;
        }

        submitBtn.disabled = false;
        confirmBtn.disabled = true;
    }
};

submitBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        domainScores.push({ domain: selectedDomain, score });
        displaySummary();
    }
};

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / currentQuiz.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function displaySummary() {
    quizContainer.style.display = "none";
    returnBtn.style.display = "block";
    summaryEl.innerHTML = domainScores.map(d => `<p>Domain: ${d.domain}, Score: ${d.score}/10</p>`).join('');
}

returnBtn.onclick = () => {
    quizContainer.style.display = "none";
    domainSelect.value = "";
    returnBtn.style.display = "none";
};
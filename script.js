const createQuizButton = document.querySelector(".create-quiz-button");
const quizTitle = document.querySelector(".header");
const quizHelper = document.querySelector(".quiz-helper");
const quizBody = document.querySelector(".quiz-body");


createQuizButton.addEventListener('click', () => {
    quizBody.removeChild(createQuizButton);

    quizTitle.textContent = "Создание квиза";
    quizHelper.innerHTML = `
    <p>Для создания квиза введите следующее:</p>
    <ol>
        <li>Вопрос, на который необходимо отвечать пользователю</li>
        <li>Варианты ответов (Необходимо указать какие правильные, а какие нет)</li>
    </ol>
    `;

    const creatingQuizDiv = document.createElement("div");
    creatingQuizDiv.className = "new-quiz-form";

    const creatingQuizForm = document.createElement("form");
    const inputQuizTitle = document.createElement("input")
    inputQuizTitle.type = "text";
    inputQuizTitle.placeholder = "Введите вопрос";

    creatingQuizForm.appendChild(inputQuizTitle);
    creatingQuizDiv.appendChild(creatingQuizForm);

    quizHelper.parentNode.insertBefore(creatingQuizDiv, quizHelper.nextSibling);
})
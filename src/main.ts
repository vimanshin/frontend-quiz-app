import '@/style.scss';
import quizData from '@/data/data.json';
import htmlIconUrl from '@/assets/images/icon-html.svg';
import cssIconUrl from '@/assets/images/icon-css.svg';
import javascriptIconUrl from '@/assets/images/icon-js.svg';
import accessibilityIconUrl from '@/assets/images/icon-accessibility.svg';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

type AnswerResult = {
  selectedIndex: number;
  isCorrect: boolean;
};

type QuestionState = {
  question: Question;
  totalQuestions: number;
  selectedIndex: number | null;
  hasSelectionError: boolean;
  result: AnswerResult | null;
};

const ANSWER_VALUES = ['a', 'b', 'c', 'd'];
let currentQuestionState: QuestionState | null = null;

const quizzes: Quiz[] = quizData.quizzes;

const subjects = [
  {
    id: 'html',
    title: 'HTML',
    iconUrl: htmlIconUrl,
  },
  {
    id: 'css',
    title: 'CSS',
    iconUrl: cssIconUrl,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    iconUrl: javascriptIconUrl,
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    iconUrl: accessibilityIconUrl,
  },
];

type Subject = (typeof subjects)[number];

// Функция: подставляет текст вопроса и вариантов в готовую разметку
// Принимает: вопрос из данных квиза
// Возвращает: ничего
function renderQuestion(question: Question): void {
  const questionTitle = document.querySelector<HTMLElement>(
    '[data-js="question-title"]'
  );
  const answerTexts = document.querySelectorAll<HTMLElement>(
    '[data-js="answer-text"]'
  );

  if (!questionTitle) {
    throw new Error('Не найден заголовок вопроса');
  }

  if (answerTexts.length !== question.options.length) {
    throw new Error('Количество карточек не совпадает с количеством вариантов');
  }

  for (const [index, answerText] of answerTexts.entries()) {
    const option = question.options[index];

    if (option === undefined) {
      throw new Error('Не найден текст варианта ответа');
    }

    answerText.textContent = option;
  }

  questionTitle.textContent = question.question;
}

// Функция: готовит первый вопрос квиза без выбранного ответа
// Принимает: квиз, первый вопрос которого нужно подготовить
// Возвращает: ничего
function prepareFirstQuestion(quiz: Quiz): void {
  const firstQuestion = quiz.questions[0];

  if (!firstQuestion) {
    throw new Error('В выбранном квизе нет вопросов');
  }

  const questionNumber = document.querySelector<HTMLElement>(
    '[data-js="question-number"]'
  );
  const progress = document.querySelector<HTMLProgressElement>(
    '[data-js="quiz-progress"]'
  );
  const answerInputs = document.querySelectorAll<HTMLInputElement>(
    '[data-js="answer-input"]'
  );

  if (!questionNumber || !progress) {
    throw new Error('Не найден счётчик вопроса или индикатор прогресса');
  }

  if (answerInputs.length !== firstQuestion.options.length) {
    throw new Error('Количество radio не совпадает с количеством вариантов');
  }

  renderQuestion(firstQuestion);

  for (const answerInput of answerInputs) {
    answerInput.checked = false;
  }

  const totalQuestions = quiz.questions.length;
  const progressText = `0 of ${totalQuestions} answers submitted`;

  questionNumber.textContent = `Question 1 of ${totalQuestions}`;

  progress.max = totalQuestions;
  progress.value = 0;
  progress.textContent = progressText;
  progress.setAttribute('aria-label', `Quiz progress: ${progressText}`);

  currentQuestionState = {
    question: firstQuestion,
    totalQuestions,
    selectedIndex: null,
    hasSelectionError: false,
    result: null,
  };

  renderSelectionError(currentQuestionState.hasSelectionError);
  renderAnswerStates(currentQuestionState);
}

// Функция: обновляет название, иконку и тему оформления подписи в шапке
// Принимает: конфигурацию выбранной темы
// Возвращает: ничего
function renderSubject(subject: Subject): void {
  const subjectElement = document.querySelector<HTMLElement>(
    '[data-js="subject"]'
  );

  if (!subjectElement) {
    throw new Error('Не найдена подпись темы в шапке');
  }

  const subjectImage = subjectElement.querySelector<HTMLImageElement>(
    '[data-js="subject-image"]'
  );
  const subjectName = subjectElement.querySelector<HTMLElement>(
    '[data-js="subject-name"]'
  );

  if (!subjectImage || !subjectName) {
    throw new Error('Не найдена иконка или название темы в шапке');
  }

  subjectImage.src = subject.iconUrl;
  subjectName.textContent = subject.title;
  subjectElement.dataset.subject = subject.id;
}

// Функция: открывает первый вопрос темы и переводит фокус в видимый экран
// Принимает: идентификатор темы из кнопки
// Возвращает: ничего
function startQuiz(subjectId: string): void {
  const subject = subjects.find(
    // Функция: находит конфигурацию по устойчивому идентификатору
    // Принимает: очередную конфигурацию темы
    // Возвращает: совпадает ли её идентификатор с выбранным
    (subject) => subject.id === subjectId
  );

  if (!subject) {
    throw new Error(`Не найдена конфигурация темы: ${subjectId}`);
  }

  const quiz = quizzes.find(
    // Функция: находит данные квиза для выбранной конфигурации
    // Принимает: очередной квиз
    // Возвращает: совпадает ли его название с названием темы
    (quiz) => quiz.title === subject.title
  );

  if (!quiz) {
    throw new Error(`Не найдены данные квиза: ${subject.title}`);
  }

  const startScreen = document.querySelector<HTMLElement>(
    '[data-js="start-screen"]'
  );
  const questionScreen = document.querySelector<HTMLElement>(
    '[data-js="question-screen"]'
  );
  const subjectElement = document.querySelector<HTMLElement>(
    '[data-js="subject"]'
  );
  const questionTitle = document.querySelector<HTMLElement>(
    '[data-js="question-title"]'
  );

  if (!startScreen || !questionScreen || !subjectElement || !questionTitle) {
    throw new Error('Не найдены элементы для переключения экранов');
  }

  prepareFirstQuestion(quiz);
  renderSubject(subject);

  questionScreen.hidden = false;
  subjectElement.hidden = false;
  startScreen.hidden = true;

  questionTitle.focus();
}

// Функция: запускает тему, указанную на нажатой кнопке
// Принимает: событие активации кнопки темы
// Возвращает: ничего
function handleSubjectClick(event: MouseEvent): void {
  const button = event.currentTarget;

  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  const subjectId = button.dataset.subject;

  if (!subjectId) {
    throw new Error('У кнопки не указан идентификатор темы');
  }

  startQuiz(subjectId);
}

const subjectButtons = document.querySelectorAll<HTMLButtonElement>(
  '[data-js="subject-button"]'
);

for (const button of subjectButtons) {
  button.addEventListener('click', handleSubjectClick);
}

// Функция: назначает карточкам оформление по подтверждённому результату
// Принимает: состояние текущего вопроса
// Возвращает: ничего
function renderAnswerStates(state: QuestionState): void {
  const answerOptions = document.querySelectorAll<HTMLElement>(
    '[data-js="answer-option"]'
  );

  if (answerOptions.length !== state.question.options.length) {
    throw new Error('Количество карточек не совпадает с количеством вариантов');
  }

  const correctIndex = state.question.options.indexOf(state.question.answer);

  if (correctIndex === -1) {
    throw new Error('Правильный ответ отсутствует среди вариантов');
  }

  const result = state.result;

  for (const [index, answerOption] of answerOptions.entries()) {
    answerOption.classList.remove(
      'answer-option--correct',
      'answer-option--wrong',
      'answer-option--revealed'
    );

    if (result === null) {
      continue;
    }

    if (index === result.selectedIndex) {
      answerOption.classList.add(
        result.isCorrect ? 'answer-option--correct' : 'answer-option--wrong'
      );
    } else if (!result.isCorrect && index === correctIndex) {
      answerOption.classList.add('answer-option--revealed');
    }
  }
}

// Функция: отменяет попытку изменить уже подтверждённый ответ
// Принимает: событие клика или нажатия клавиши на radio
// Возвращает: ничего
function preventConfirmedAnswerChange(event: Event): void {
  const state = currentQuestionState;

  if (!state || state.result === null) {
    return;
  }

  if (event.type === 'click') {
    event.preventDefault();
    return;
  }

  if (!(event instanceof KeyboardEvent)) {
    return;
  }

  const selectionKeys = [
    ' ',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
  ];

  if (selectionKeys.includes(event.key)) {
    event.preventDefault();
  }
}

// Функция: сохраняет выбранный вариант в состоянии текущего вопроса
// Принимает: событие изменения radio
// Возвращает: ничего
function handleAnswerChange(event: Event): void {
  const input = event.currentTarget;
  const state = currentQuestionState;

  if (!(input instanceof HTMLInputElement) || !state) {
    return;
  }

  if (state.result !== null) {
    const confirmedValue = ANSWER_VALUES[state.result.selectedIndex];

    if (confirmedValue === undefined) {
      throw new Error('Не найден подтверждённый вариант ответа');
    }

    for (const answerInput of answerInputs) {
      answerInput.checked = answerInput.value === confirmedValue;
    }

    return;
  }

  if (!input.checked) {
    return;
  }

  const selectedIndex = ANSWER_VALUES.indexOf(input.value);

  if (
    selectedIndex === -1 ||
    state.question.options[selectedIndex] === undefined
  ) {
    throw new Error('Не найден вариант ответа для выбранного radio');
  }

  state.selectedIndex = selectedIndex;
  state.hasSelectionError = false;
  renderSelectionError(state.hasSelectionError);
}

const answerInputs = document.querySelectorAll<HTMLInputElement>(
  '[data-js="answer-input"]'
);

for (const input of answerInputs) {
  input.addEventListener('change', handleAnswerChange);
  input.addEventListener('click', preventConfirmedAnswerChange);
  input.addEventListener('keydown', preventConfirmedAnswerChange);
}

// Функция: показывает или очищает сообщение об отсутствии выбора
// Принимает: нужно ли показывать ошибку
// Возвращает: ничего
function renderSelectionError(hasError: boolean): void {
  const errorMessage = document.querySelector<HTMLElement>(
    '[data-js="answer-error"]'
  );

  if (!errorMessage) {
    throw new Error('Не найден контейнер ошибки выбора');
  }

  errorMessage.textContent = hasError ? 'Please select an answer' : '';
}

// Функция: проверяет ответ и фиксирует результат текущего вопроса
// Принимает: ничего
// Возвращает: ничего
function handleSubmitAnswer(): void {
  const state = currentQuestionState;

  if (!state || state.result !== null) {
    return;
  }

  state.hasSelectionError = state.selectedIndex === null;
  renderSelectionError(state.hasSelectionError);

  if (state.selectedIndex === null) {
    return;
  }

  const selectedOption = state.question.options[state.selectedIndex];

  if (selectedOption === undefined) {
    throw new Error('Не найден выбранный вариант ответа');
  }

  const button = document.querySelector<HTMLButtonElement>(
    '[data-js="submit-answer"]'
  );
  const feedback = document.querySelector<HTMLElement>(
    '[data-js="answer-feedback"]'
  );
  const progress = document.querySelector<HTMLProgressElement>(
    '[data-js="quiz-progress"]'
  );

  if (!button || !feedback || !progress) {
    throw new Error('Не найдены элементы для отображения результата');
  }

  state.result = {
    selectedIndex: state.selectedIndex,
    isCorrect: selectedOption === state.question.answer,
  };

  renderAnswerStates(state);

  for (const input of answerInputs) {
    input.setAttribute('aria-disabled', 'true');
  }

  button.setAttribute('aria-disabled', 'true');
  button.textContent = 'Answer submitted';

  const progressText = `1 of ${state.totalQuestions} answers submitted`;
  progress.value = 1;
  progress.textContent = progressText;
  progress.setAttribute('aria-label', `Quiz progress: ${progressText}`);

  const outcome = state.result.isCorrect
    ? 'Correct answer.'
    : 'Incorrect answer.';
  feedback.textContent = `${outcome} Correct answer: ${state.question.answer}. ${progressText}.`;
}

const submitButton = document.querySelector<HTMLButtonElement>(
  '[data-js="submit-answer"]'
);

if (!submitButton) {
  throw new Error('Не найдена кнопка подтверждения ответа');
}

submitButton.addEventListener('click', handleSubmitAnswer);

import '@/style.scss';
import '@/theme';
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

  selectedIndex: number | null;
  hasSelectionError: boolean;
  result: AnswerResult | null;
};

type QuizRun = {
  quiz: Quiz;
  subject: Subject;
  questionIndex: number;
  score: number;
};

const ANSWER_VALUES = ['a', 'b', 'c', 'd'];
let currentRun: QuizRun | null = null;
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
// Возвращает: заголовок для перевода фокуса
function renderQuestion(question: Question): HTMLElement {
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
  return questionTitle;
}

// Функция: синхронизирует индикатор с числом подтверждённых ответов
// Принимает: прохождение и состояние открытого вопроса
// Возвращает: описание прогресса для сообщения о результате
function renderProgress(run: QuizRun, state: QuestionState): string {
  const progress = document.querySelector<HTMLProgressElement>(
    '[data-js="quiz-progress"]'
  );
  if (!progress) {
    throw new Error('Не найден индикатор прогресса');
  }

  const total = run.quiz.questions.length;
  const submitted = run.questionIndex + (state.result === null ? 0 : 1);
  const text = `${submitted} of ${total} answers submitted`;
  progress.max = total;
  progress.value = submitted;
  progress.textContent = text;
  progress.setAttribute('aria-label', `Quiz progress: ${text}`);
  return text;
}

// Функция: открывает вопрос с чистыми вариантами и переводит фокус на заголовок
// Принимает: текущее прохождение с индексом открываемого вопроса
// Возвращает: ничего
function openQuestion(run: QuizRun): void {
  const question = run.quiz.questions[run.questionIndex];
  if (!question) {
    throw new Error('Вопрос не найден в выбранном квизе');
  }
  const questionNumber = document.querySelector<HTMLElement>(
    '[data-js="question-number"]'
  );
  if (!questionNumber || !submitButton || !feedback) {
    throw new Error('Не найдены элементы экрана вопроса');
  }

  if (answerInputs.length !== question.options.length) {
    throw new Error('Количество radio не совпадает с количеством вариантов');
  }

  const title = renderQuestion(question);

  for (const answerInput of answerInputs) {
    answerInput.checked = false;
    answerInput.removeAttribute('aria-disabled');
  }

  questionNumber.textContent = `Question ${run.questionIndex + 1} of ${run.quiz.questions.length}`;
  submitButton.textContent = 'Submit Answer';
  feedback.textContent = '';

  currentQuestionState = {
    question,
    selectedIndex: null,
    hasSelectionError: false,
    result: null,
  };

  renderSelectionError(currentQuestionState.hasSelectionError);
  renderAnswerStates(currentQuestionState);
  renderProgress(run, currentQuestionState);
  title.focus();
}

// Функция: обновляет название, иконку и подложку значка выбранной темы
// Принимает: конфигурацию темы и контейнер подписи
// Возвращает: ничего
function renderSubject(subject: Subject, subjectElement: HTMLElement): void {
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

const startScreen = document.querySelector<HTMLElement>(
  '[data-js="start-screen"]'
);
const questionScreen = document.querySelector<HTMLElement>(
  '[data-js="question-screen"]'
);
const resultScreen = document.querySelector<HTMLElement>(
  '[data-js="result-screen"]'
);
const headerSubject = document.querySelector<HTMLElement>(
  '[data-js="subject"]'
);

// Функция: оставляет видимым только нужный экран и скрывает тему в меню
// Принимает: экран, который нужно показать
// Возвращает: ничего
function showScreen(screen: 'start' | 'question' | 'result'): void {
  if (!startScreen || !questionScreen || !resultScreen || !headerSubject) {
    throw new Error('Не найдены элементы для переключения экранов');
  }

  startScreen.hidden = screen !== 'start';
  questionScreen.hidden = screen !== 'question';
  resultScreen.hidden = screen !== 'result';
  headerSubject.hidden = screen === 'start';
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

  if (!headerSubject) {
    throw new Error('Не найдена подпись темы в шапке');
  }

  currentRun = { quiz, subject, questionIndex: 0, score: 0 };
  renderSubject(subject, headerSubject);
  showScreen('question');
  openQuestion(currentRun);
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

// Функция: показывает итог завершённого прохождения и фокусирует его заголовок
// Принимает: завершённое прохождение
// Возвращает: ничего
function showResults(run: QuizRun): void {
  const title = resultScreen?.querySelector<HTMLElement>(
    '[data-js="result-title"]'
  );
  const subject = resultScreen?.querySelector<HTMLElement>(
    '[data-js="result-subject"]'
  );
  const score = resultScreen?.querySelector<HTMLElement>(
    '[data-js="result-value"]'
  );
  const total = resultScreen?.querySelector<HTMLElement>(
    '[data-js="result-total"]'
  );
  if (!title || !subject || !score || !total) {
    throw new Error('Не найдены элементы экрана результата');
  }

  renderSubject(run.subject, subject);
  score.textContent = String(run.score);
  total.textContent = `out of ${run.quiz.questions.length}`;
  currentQuestionState = null;
  showScreen('result');
  title.focus();
}

// Функция: сбрасывает завершённую попытку и возвращает к выбору темы
// Принимает: ничего
// Возвращает: ничего
function handlePlayAgain(): void {
  const title = startScreen?.querySelector<HTMLElement>(
    '[data-js="start-title"]'
  );
  if (!title) {
    throw new Error('Не найден заголовок меню');
  }

  currentRun = null;
  showScreen('start');
  title.focus();
}

// Функция: подтверждает ответ или открывает следующий вопрос либо результат
// Принимает: активацию кнопки мышью или клавиатурой
// Возвращает: ничего
function handleQuizAction(event: MouseEvent): void {
  const state = currentQuestionState;
  const run = currentRun;

  if (!state || !run || !submitButton || !feedback || event.detail > 1) {
    return;
  }

  const hasNext = run.questionIndex + 1 < run.quiz.questions.length;
  if (state.result !== null) {
    if (hasNext) {
      run.questionIndex += 1;
      openQuestion(run);
    } else {
      showResults(run);
    }
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

  state.result = {
    selectedIndex: state.selectedIndex,
    isCorrect: selectedOption === state.question.answer,
  };

  if (state.result.isCorrect) {
    run.score += 1;
  }

  renderAnswerStates(state);

  for (const input of answerInputs) {
    input.setAttribute('aria-disabled', 'true');
  }

  submitButton.textContent = hasNext ? 'Next Question' : 'Show Results';
  // Повторный Enter не должен активировать новое действие до перехода Tab.
  if (event.detail === 0) {
    answerInputs[state.selectedIndex]?.focus({ preventScroll: true });
  }

  const progressText = renderProgress(run, state);
  const outcome = state.result.isCorrect
    ? 'Correct answer.'
    : 'Incorrect answer.';
  feedback.textContent = `${outcome} Correct answer: ${state.question.answer}. ${progressText}.`;
}

const submitButton = document.querySelector<HTMLButtonElement>(
  '[data-js="submit-answer"]'
);

const feedback = document.querySelector<HTMLElement>(
  '[data-js="answer-feedback"]'
);
const playAgainButton = document.querySelector<HTMLButtonElement>(
  '[data-js="play-again"]'
);

if (!submitButton || !feedback || !playAgainButton) {
  throw new Error('Не найдены действия квиза или сообщение об ответе');
}

submitButton.addEventListener('click', handleQuizAction);
playAgainButton.addEventListener('click', handlePlayAgain);

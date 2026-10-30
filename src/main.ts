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

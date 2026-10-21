---
version: 'alpha'
name: 'Frontend Quiz App'
description: 'Основа — Figma Design System 2:2; отдельно документированы светлые экраны меню и вопроса со страницы 1:3 и согласованные решения этапов 00–02.'
colors:
  white: '#FFFFFF'
  black: '#000000'
  grey-500: '#626C7F'
  grey-50: '#F4F6FA'
  blue-950: '#2D3949'
  blue-900: '#313E51'
  blue-850: '#3B4D66'
  blue-500: '#306AFF'
  blue-300: '#ABC1E1'
  blue-100: '#EDF1F9'
  blue-50: '#EBF0FF'
  green-500: '#2FD887'
  green-100: '#E0FDEF'
  purple-600: '#A729F5'
  purple-100: '#F6E7FF'
  orange-400: '#FF7E35'
  orange-50: '#FFF5ED'
  red-500: '#EE5454'
  primary: '{colors.purple-600}'
  submit-hover-composite: '#D394FA'
  # Экранные роли desktop-меню страницы 1:3, не новые цвета палитры стенда.
  screen-light-page: '{colors.grey-50}'
  screen-light-surface: '{colors.white}'
  screen-light-text: '{colors.blue-900}'
  screen-light-text-muted: '{colors.grey-500}'
  screen-dark-page: '{colors.blue-900}'
  screen-dark-surface: '{colors.blue-850}'
  screen-dark-text: '{colors.white}'
  screen-dark-text-muted: '{colors.blue-300}'
  # Экранное дополнение этапа 01; исходная палитра стенда не изменена.
  screen-light-pattern: '{colors.blue-100}'
  screen-subject-html-badge: '{colors.orange-50}'
  screen-subject-css-badge: '{colors.green-100}'
  screen-subject-javascript-badge: '{colors.blue-50}'
  screen-subject-accessibility-badge: '{colors.purple-100}'
  # Согласованные роли реализации этапа 02, не новые цвета Figma.
  impl-question-focus: '{colors.blue-900}'
  impl-answer-hover-badge: '{colors.purple-100}'
typography:
  preset-1:
    fontFamily: 'Rubik'
    fontSize: '9rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-2-medium:
    fontFamily: 'Rubik'
    fontSize: '4rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-2-light:
    fontFamily: 'Rubik'
    fontSize: '4rem'
    fontWeight: 300
    lineHeight: 1
    letterSpacing: '0px'
  preset-3:
    fontFamily: 'Rubik'
    fontSize: '2.25rem'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: '0px'
  preset-4:
    fontFamily: 'Rubik'
    fontSize: '1.75rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-5-medium:
    fontFamily: 'Rubik'
    fontSize: '1.5rem'
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: '0px'
  preset-5-regular:
    fontFamily: 'Rubik'
    fontSize: '1.5rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0px'
  preset-6-italic:
    fontFamily: 'Rubik'
    fontSize: '1.25rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0px'
  preset-1-mobile:
    fontFamily: 'Rubik'
    fontSize: '5.5rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-2-mobile-medium:
    fontFamily: 'Rubik'
    fontSize: '2.5rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-2-mobile-light:
    fontFamily: 'Rubik'
    fontSize: '2.5rem'
    fontWeight: 300
    lineHeight: 1
    letterSpacing: '0px'
  preset-3-mobile:
    fontFamily: 'Rubik'
    fontSize: '1.25rem'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: '0px'
  preset-4-mobile:
    fontFamily: 'Rubik'
    fontSize: '1.125rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0px'
  preset-5-mobile-italic:
    fontFamily: 'Rubik'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0px'
rounded:
  badge: '8px'
  card: '24px'
  pill: '999px'
  progress-fill: '104px'
spacing:
  space-100: '0.5rem'
  space-200: '1rem'
  space-300: '1.5rem'
  space-400: '2rem'
  space-500: '2.5rem'
  space-600: '3rem'
  space-800: '4rem'
  space-1600: '8rem'
  space-1800: '9rem'
  space-2300: '11.5rem'
components:
  submit-default:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '2rem'
    width: '564px'
    height: '92px'
  submit-hover-active:
    backgroundColor: '{colors.submit-hover-composite}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '2rem'
    width: '564px'
    height: '92px'
  subject-light-default:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  subject-dark-default:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-default:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-default-badge:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-light-hover-active:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-hover-active-badge:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-light-correct:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-correct-badge:
    backgroundColor: '{colors.green-500}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-light-selection:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-selection-badge:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-light-wrong:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-light-wrong-badge:
    backgroundColor: '{colors.red-500}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-dark-default:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-dark-default-badge:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-dark-hover-active:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-dark-hover-active-badge:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.blue-850}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-dark-correct:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-dark-correct-badge:
    backgroundColor: '{colors.green-500}'
    textColor: '{colors.blue-850}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-dark-selection:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-dark-selection-badge:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  answer-dark-wrong:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  answer-dark-wrong-badge:
    backgroundColor: '{colors.red-500}'
    textColor: '{colors.blue-850}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  score-light-total:
    backgroundColor: '{colors.white}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-5-regular}'
  score-light:
    backgroundColor: '{colors.white}'
    rounded: '{rounded.card}'
    padding: '3rem'
    width: '564px'
    height: '388px'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-1}'
  progress-light:
    backgroundColor: '{colors.white}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '465px'
    height: '16px'
  logo-light:
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    width: '253px'
    height: '56px'
  score-dark-total:
    backgroundColor: '{colors.blue-850}'
    textColor: '{colors.blue-300}'
    typography: '{typography.preset-5-regular}'
  score-dark:
    backgroundColor: '{colors.blue-850}'
    rounded: '{rounded.card}'
    padding: '3rem'
    width: '564px'
    height: '388px'
    textColor: '{colors.white}'
    typography: '{typography.preset-1}'
  progress-dark:
    backgroundColor: '{colors.blue-850}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '465px'
    height: '16px'
  logo-dark:
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    width: '253px'
    height: '56px'
  progress-fill:
    backgroundColor: '{colors.purple-600}'
    rounded: '{rounded.progress-fill}'
    height: '8px'
  theme-switch-track:
    backgroundColor: '{colors.purple-600}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '48px'
    height: '28px'
  theme-switch-thumb:
    backgroundColor: '{colors.white}'
    width: '20px'
    height: '20px'
  selection-error:
    textColor: '{colors.red-500}'
    typography: '{typography.preset-5-regular}'
    height: '40px'
  # Размеры образцов экранов, не фиксированные CSS-размеры приложения.
  screen-start-subject-mobile:
    backgroundColor: '{colors.screen-light-surface}'
    textColor: '{colors.screen-light-text}'
    typography: '{typography.preset-4-mobile}'
    rounded: '12px'
    padding: '1rem'
    width: '327px'
    height: '72px'
  screen-start-subject-tablet:
    backgroundColor: '{colors.screen-light-surface}'
    textColor: '{colors.screen-light-text}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1rem'
    width: '640px'
    height: '88px'
  screen-start-subject-desktop:
    backgroundColor: '{colors.screen-light-surface}'
    textColor: '{colors.screen-light-text}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  screen-start-badge-mobile:
    rounded: '6px'
    size: '40px'
  screen-start-badge-tablet:
    rounded: '12px'
    size: '56px'
  screen-start-badge-desktop:
    rounded: '{rounded.badge}'
    size: '56px'
  screen-start-theme-track-mobile:
    backgroundColor: '{colors.purple-600}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '32px'
    height: '20px'
  screen-start-theme-thumb-mobile:
    backgroundColor: '{colors.white}'
    width: '12px'
    height: '12px'
  # Образцы вопроса: размеры источника, не фиксированные размеры CSS.
  screen-question-answer-mobile:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4-mobile}'
    rounded: '12px'
    padding: '1rem'
    width: '327px'
    height: '72px'
  screen-question-answer-tablet:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1rem'
    width: '640px'
    height: '88px'
  screen-question-answer-desktop:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue-900}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '1.5rem'
    width: '564px'
    height: '104px'
  screen-question-letter-mobile:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4-mobile}'
    rounded: '6px'
    size: '40px'
  screen-question-letter-tablet:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '12px'
    size: '56px'
  screen-question-letter-desktop:
    backgroundColor: '{colors.grey-50}'
    textColor: '{colors.grey-500}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.badge}'
    size: '56px'
  screen-question-status-mobile:
    size: '32px'
  screen-question-status-tablet:
    size: '40px'
  screen-question-status-desktop:
    size: '40px'
  screen-question-submit-mobile:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4-mobile}'
    rounded: '12px'
    padding: '1rem'
    width: '327px'
    height: '56px'
  screen-question-submit-tablet:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '2rem'
    width: '640px'
    height: '92px'
  screen-question-submit-desktop:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
    typography: '{typography.preset-4}'
    rounded: '{rounded.card}'
    padding: '2rem'
    width: '564px'
    height: '92px'
  screen-question-progress-mobile:
    backgroundColor: '{colors.white}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '327px'
    height: '16px'
  screen-question-progress-tablet:
    backgroundColor: '{colors.white}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '640px'
    height: '16px'
  screen-question-progress-desktop:
    backgroundColor: '{colors.white}'
    rounded: '{rounded.pill}'
    padding: '0.25rem'
    width: '465px'
    height: '16px'
  # Реализация: не переопределяет исходные варианты стенда.
  impl-question-answer-hover-badge:
    backgroundColor: '{colors.impl-answer-hover-badge}'
    textColor: '{colors.blue-900}'
  impl-question-answer-selected-badge:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
  impl-question-submit-hover:
    backgroundColor: '{colors.purple-600}'
    textColor: '{colors.white}'
---

# Frontend Quiz App — дизайн-система

## Overview

Основной источник: [Figma — Design System](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2-2), страница `2:2`. Базовые цветовые роли, светлые стартовый экран и экран вопроса со страницы `1:3` описаны отдельно от стенда. Согласованные решения реализации помечены отдельно от измерений. Это спецификация, а не исходники интерфейса или учебный план.

Палитра, типографика и шкала отступов извлечены из Figma; значения компонентов относятся к показанным экземплярам. `src/`, `starter-code/`, зависимости и Git не изменяются этой задачей.

### Область и происхождение

| Раздел      | Узел                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| Цвета       | [`22:124`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-124)       |
| Типографика | [`2056:534`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-534)   |
| Отступы     | [`2056:1568`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-1568) |
| Компоненты  | [`22:366`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-366)       |

Учтены 18 цветов палитры, 14 пресетов, 10 ступеней spacing и все 23 исходных варианта в 8 группах компонентов. Дополнительные записи `components` в YAML описывают вложенные части (badge, track, thumb), а не новые варианты Figma.

Машинные токены — YAML выше; `tokens.json` — производный DTCG-экспорт. Точные измерения, состояния, происхождение и слои сохранены в `docs/design-system/source-tokens.json`. Проверки — `docs/design-system/validation.md`.

Значения `rem` вычислены как `px / 16`. Это соглашение перевода единиц, а не извлечённое значение корневого размера шрифта. Hex нормализованы к 8-битному sRGB; оригинальные float-компоненты тени сохранены в JSON.

## Colors

`primary` — ссылочный alias `purple-600`, не дополнительный цвет палитры. `submit-hover-composite` вычислен из белого слоя 50% поверх purple-600; слои источника остаются в JSON.

| Токен Figma  | HEX       | Источник                                                                                               |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------ |
| `white`      | `#FFFFFF` | [`22:137`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-137)       |
| `black`      | `#000000` | [`2012:544`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-544)   |
| `grey/500`   | `#626C7F` | [`22:154`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-154)       |
| `grey/50`    | `#F4F6FA` | [`22:167`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-167)       |
| `blue/950`   | `#2D3949` | [`2033:2679`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-2679) |
| `blue/900`   | `#313E51` | [`2012:14`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-14)     |
| `blue/850`   | `#3B4D66` | [`2012:27`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-27)     |
| `blue/500`   | `#306AFF` | [`2033:2694`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-2694) |
| `blue/300`   | `#ABC1E1` | [`2033:2665`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-2665) |
| `blue/100`   | `#EDF1F9` | [`2033:2635`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-2635) |
| `blue/50`    | `#EBF0FF` | [`2033:2648`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-2648) |
| `green/500`  | `#2FD887` | [`2012:62`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-62)     |
| `green/100`  | `#E0FDEF` | [`2012:88`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-88)     |
| `purple/600` | `#A729F5` | [`2012:123`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-123)   |
| `purple/100` | `#F6E7FF` | [`2012:212`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-212)   |
| `orange/400` | `#FF7E35` | [`2012:154`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-154)   |
| `orange/50`  | `#FFF5ED` | [`2012:167`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-167)   |
| `red/500`    | `#EE5454` | [`2012:185`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2012-185)   |

### Семантика подтверждённых компонентов

| Роль                                            | Light      | Dark       |
| ----------------------------------------------- | ---------- | ---------- |
| Поверхность option / subject / score / progress | white      | blue-850   |
| Основной текст option / subject / score         | blue-900   | white      |
| Подпись итогового счёта                         | grey-500   | blue-300   |
| Track переключателя / прогресс                  | purple-600 | purple-600 |

На странице стенда `2:2` фон всей страницы приложения не утверждается: `blue-950` подтверждён у демонстрационных dark-обёрток toggle/logo. Отдельная экранная сверка фонов desktop-меню приведена ниже; она не меняет исходные значения стенда. Фоновые паттерны требуют отдельной проверки. Не выдавать геометрию стенда Style Guide за layout приложения.

Цвета `color/slate-*` и шрифт Plus Jakarta Sans обслуживают подписи стенда. Они не включены в палитру и пресеты квиза.

### Экранные уточнения: базовые цветовые роли

Источники: [Desktop Start Menu Light, `2009:1375`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2009-1375) и [Desktop Start Menu Dark, `2033:1296`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2033-1296), страница экранов `1:3`. Значения получены через Figma MCP `get_design_context`; это отдельное согласованное дополнение, не свойства страницы стенда `2:2`.

| Роль                        | Light: alias → палитра                 | Источник Light                 | Dark: alias → палитра                 | Источник Dark                  |
| --------------------------- | -------------------------------------- | ------------------------------ | ------------------------------------- | ------------------------------ |
| Фон страницы                | `screen-light-page` → `grey-50`        | `2009:1375`, background        | `screen-dark-page` → `blue-900`       | `2033:1296`, background        |
| Поверхность карточки темы   | `screen-light-surface` → `white`       | `2009:1386`, background        | `screen-dark-surface` → `blue-850`    | `2033:1307`, background        |
| Основной текст              | `screen-light-text` → `blue-900`       | `2009:1382`, `2009:1391`, text | `screen-dark-text` → `white`          | `2033:1303`, `2033:1312`, text |
| Вторичный текст: инструкция | `screen-light-text-muted` → `grey-500` | `2009:1384`, text              | `screen-dark-text-muted` → `blue-300` | `2033:1305`, text              |

Восемь alias-токенов объявлены в YAML `colors` и экспортируются как `color.screen-*`; новых HEX-значений нет. HEX определяются существующей палитрой, а имена ролей — соглашение проекта, не названия стилей Figma. В экспорте каждый alias содержит ссылку на палитру и `$extensions` с fileKey, страницей `1:3`, frame/node ID и свойством источника. Происхождение экранных ролей хранится здесь и в экспорте, не приписывается `source-tokens.json` стенда.

Тёмный фон страницы — `blue-900`, не `blue-950`. Поверхности и основной текст карточек совпадают с ролями стенда; экранная инструкция подтверждает роль вторичного текста вне карточки. Эти выводы относятся к двум проверенным desktop-экранам: mobile/tablet, остальные экраны, паттерны, геометрия, focus и состояния ответов этим дополнением не проверены. Результаты контраста однотонных пар приведены отдельно в `docs/design-system/validation.md`; проблемные цвета состояний не исправлены и не согласованы этим дополнением.

## Typography

Шрифт приложения — **Rubik**. Letter spacing всех приведённых пресетов — `0px`. Имена ниже сохраняют различия исходных пресетов, а не назначают автоматически HTML-теги.

| Пресет                   | px / rem   | Weight | Line height | Style  | Узел образца                                                                                         |
| ------------------------ | ---------- | ------ | ----------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `preset-1`               | 144 / 9    | 500    | 1           | normal | [`2056:823`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-823) |
| `preset-2-medium`        | 64 / 4     | 500    | 1           | normal | [`2056:834`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-834) |
| `preset-2-light`         | 64 / 4     | 300    | 1           | normal | [`2056:845`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-845) |
| `preset-3`               | 36 / 2.25  | 500    | 1.2         | normal | [`2056:856`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-856) |
| `preset-4`               | 28 / 1.75  | 500    | 1           | normal | [`2056:867`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-867) |
| `preset-5-medium`        | 24 / 1.5   | 500    | 1.5         | normal | [`2056:878`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-878) |
| `preset-5-regular`       | 24 / 1.5   | 400    | 1.5         | normal | [`2056:889`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-889) |
| `preset-6-italic`        | 20 / 1.25  | 400    | 1.5         | italic | [`2056:900`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-900) |
| `preset-1-mobile`        | 88 / 5.5   | 500    | 1           | normal | [`2056:912`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-912) |
| `preset-2-mobile-medium` | 40 / 2.5   | 500    | 1           | normal | [`2056:923`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-923) |
| `preset-2-mobile-light`  | 40 / 2.5   | 300    | 1           | normal | [`2056:934`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-934) |
| `preset-3-mobile`        | 20 / 1.25  | 500    | 1.2         | normal | [`2056:945`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-945) |
| `preset-4-mobile`        | 18 / 1.125 | 500    | 1           | normal | [`2056:956`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-956) |
| `preset-5-mobile-italic` | 14 / 0.875 | 400    | 1.5         | italic | [`2056:967`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-967) |

**Расхождение источника:** имя стиля Preset 5 Medium содержит «100%», но фактический style и видимая подпись задают 150%; используется `lineHeight: 1.5`. Название мобильного italic-пресета в Figma — Preset 5, а не Preset 6: не создавать автоматическое соответствие только по номеру.

**Курсив:** формат DESIGN.md alpha не содержит `fontStyle` в typography. Поэтому italic явно отмечен именем/таблицей, сохранён в source JSON и в `$extensions` соответствующего DTCG-токена. При подключении к CSS требуется `font-style: italic`; экспорт не должен превратить курсив в обычный текст.

В `src/assets/fonts/` есть variable Rubik normal/italic; они подключены в `src/scss/base/_fonts.scss` на этапе 00. Для Light 300 используется соответствующее начертание variable-файла, а не искусственное облегчение Regular. Изменение этой спецификации само по себе не изменяет стили приложения.

## Layout

| Figma spacing  | px  | rem  | Источник                                                                                               |
| -------------- | --- | ---- | ------------------------------------------------------------------------------------------------------ |
| `spacing-100`  | 8   | 0.5  | [`2056:2018`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2018) |
| `spacing-200`  | 16  | 1    | [`2056:2025`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2025) |
| `spacing-300`  | 24  | 1.5  | [`2056:2032`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2032) |
| `spacing-400`  | 32  | 2    | [`2056:2039`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2039) |
| `spacing-500`  | 40  | 2.5  | [`2056:2046`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2046) |
| `spacing-600`  | 48  | 3    | [`2056:2053`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2053) |
| `spacing-800`  | 64  | 4    | [`2056:2060`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2060) |
| `spacing-1600` | 128 | 8    | [`2056:2067`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2067) |
| `spacing-1800` | 144 | 9    | [`2056:2074`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2074) |
| `spacing-2300` | 184 | 11.5 | [`2056:2081`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2081) |

Локальный inset `4px` у progress/toggle извлечён из компонентов и не добавлен вымышленной ступенью глобальной шкалы. Размеры ниже — размеры образцов, не обязательные фиксированные CSS-ширины на всех экранах.

**Не определено страницей стенда:** ширина контейнера приложения, отступы экранов, breakpoint-переходы и mobile/tablet-геометрия компонентов. Прежние `768px` и `1024px` были шаблонными значениями SCSS, не токенами Figma. Экранные измерения и отдельно согласованные переходы этапа 01 приведены ниже.

### Экранное дополнение этапа 01: источник и композиция

Проверены свойства через Figma MCP `use_figma` и скриншоты трёх светлых стартовых экранов страницы `1:3`. Это не повторное извлечение стенда `2:2`; его `source-tokens.json` и исходные варианты сохранены.

| Экран   | Frame ID  | Размер фрейма, px | Основной контент: x / y / width, px | Узел контента | Индикатор темы: x / y / width / height, px | Узел индикатора |
| ------- | --------- | ----------------- | ----------------------------------- | ------------- | ------------------------------------------ | --------------- |
| Mobile  | 2022:358  | 375 / 812         | 24 / 104 / 327                      | 2022:376      | 271 / 26 / 80 / 20                         | 2022:367        |
| Tablet  | 2019:287  | 768 / 1024        | 64 / 129 / 640                      | 2019:343      | 576 / 54 / 128 / 28                        | 2019:374        |
| Desktop | 2009:1375 | 1440 / 960        | 140 / 224 / 1157                    | 2009:2641     | 1172 / 97 / 128 / 28                       | 2009:1410       |

Координаты в таблице — относительно внешнего фрейма, для сравнения рендера; они не предписывают `position: absolute`. У mobile внешняя группа `2022:375` начинается на y=72 и имеет padding-top=32 / padding-inline=24; фактическое приветствие начинается на y=104. На desktop колонки источника: 465 / 564 px, gap 128 px.

### Экранное дополнение этапа 01: измерения компонентов

Все численные размеры этой таблицы в px. Формат `a / b` обозначает перечисленные в названии строки параметры, не математическое деление.

| Параметр                                                             | Mobile                | Tablet                 | Desktop                     |
| -------------------------------------------------------------------- | --------------------- | ---------------------- | --------------------------- |
| Узел первой карточки                                                 | 2022:382              | 2019:350               | 2009:1386                   |
| Карточка: width / height                                             | 327 / 72              | 640 / 88               | 564 / 104                   |
| Карточка: padding / внутренний gap / radius                          | 16 / 16 / 12          | 16 / 32 / 24           | 24 / 32 / 24                |
| Список: gap                                                          | 16                    | 24                     | 16                          |
| Узел подложки HTML                                                   | 2022:384              | 2019:352               | 2009:1388                   |
| Подложка: size / radius                                              | 40 / 6                | 56 / 12                | 56 / 8                      |
| Иконка: size                                                         | 28.5714283            | 40                     | 40                          |
| Заголовок: font-size / line-height / промежуток частей               | 40 / 40 / 8           | 64 / 64 / 8            | 64 / 64 / 8                 |
| Инструкция: font-size / line-height / отступ сверху                  | 14 / 21 / 16          | 20 / 30 / 16           | 20 / 30 / 48                |
| Название карточки: font-size / line-height                           | 18 / 18               | 28 / 28                | 28 / 28                     |
| Приветствие → список: вертикальный gap                               | 40                    | 64                     | не применяется: две колонки |
| Индикатор: icon-size / gap / track-width / track-height / thumb-size | 16 / 8 / 32 / 20 / 12 | 24 / 16 / 48 / 28 / 20 | 24 / 16 / 48 / 28 / 20      |

У заголовка веса Rubik 300 и 500; инструкция — italic 400; названия карточек — 500. Текстовые источники: mobile `2022:378–380`, `2022:387`; tablet `2019:346–348`, `2019:355`; desktop `2009:1382–1384`, `2009:1391`. Геометрия mobile-иконки соответствует масштабу 5/7 от подложки; субпиксельное округление браузера допустимо. Все карточки имеют light-тень стенда, белый фон и текст blue-900; видимой рамки в default нет.

### Экранное дополнение этапа 01: решения реализации

Следующее согласовано пользователем; это не извлечённые breakpoint-токены Figma:

- Mobile-first: переход к крупным компонентам от 640 px, к двум колонкам от 1200 px. Пробы с Rubik и последующая проверка полного экрана выполнены около обеих границ.
- Защита при увеличении шрифта: две колонки от 1200 px дополнительно требуют ширины контейнера `quiz-layout` не менее 67rem. Порог получен из минимальной desktop-ширины контента при базовых 16 px: (1200 − 128) / 16. При нехватке места сохраняются одна колонка и gap 4rem. Заголовку разрешён аварийный перенос длинных слов через `overflow-wrap: anywhere`. При обычном размере шрифта согласованная геометрия не меняется; это исправление адаптивности, не новый токен Figma.
- Общий контейнер до 1160 px: боковые поля 24 px, от 640 px — 64 px. На 1440 px карточка имеет ширину 567 px вместо исходных 564 px: согласованное отклонение +3 px ради общего правого края шапки и контента. Левая колонка до 465 px, промежуток 128 px, правая занимает остаток.
- Обычный поток: mobile-шапка min-height=72 px, после неё 32 px; tablet padding-top=54 px, высота индикатора 28 px и промежуток до main 47 px; desktop padding-top=97 px, индикатор 28 px, промежуток 99 px. Высота страницы и карточек не фиксирована по фрейму; нет общего `overflow-x: hidden`.
- Карточки — `button type="button"`, пока без обработчиков: промежуточная статическая вёрстка, не функционирующее меню. Текст JavaScript соответствует заданию пользователя и JSON; в макетах написано Javascript.
- Hover: внутренний контур 2 px цвета purple-600, реализованный inset-тенью; только при `(hover: hover) and (pointer: fine)`. Focus-visible: внешний outline 3 px purple-600, offset 4 px. Нет анимации; геометрия не меняется. Отдельных таких состояний Subject в осмотренном источнике не найдено; это утверждённое дополнение, не перенос состояний Option.
- Индикатор темы — статическое изображение `role="img"` с описанием фиксированной светлой темы и недоступности переключения. Нет фокуса, `role="switch"`, курсора действия и обработчиков. Mobile-слой Accessibility `2022:361` имеет opacity=0 и не переносится в HTML. Рабочее переключение относится к этапу 07.

### Экранное дополнение этапа 01: ресурсы и цветовые роли

| Роль                   | Alias → палитра                                 | Mobile / Tablet / Desktop: узлы подложек или паттернов |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Фоновые кольца         | screen-light-pattern → blue-100                 | 2022:359 / 2019:288 / 2009:1377,2009:1378              |
| Подложка HTML          | screen-subject-html-badge → orange-50           | 2022:384 / 2019:352 / 2009:1388                        |
| Подложка CSS           | screen-subject-css-badge → green-100            | 2022:390 / 2019:358 / 2009:1394                        |
| Подложка JavaScript    | screen-subject-javascript-badge → blue-50       | 2022:396 / 2019:364 / 2009:1400                        |
| Подложка Accessibility | screen-subject-accessibility-badge → purple-100 | 2022:402 / 2019:370 / 2009:1406                        |

Локальные `icon-html.svg`, `icon-css.svg`, `icon-js.svg`, `icon-accessibility.svg` имеют viewport 40×40 и не содержат подложки. Их цвета соответственно orange-400 / green-500 / blue-500 / purple-600; сверены с glyph-узлами `2009:1390`, `2009:1396`, `2009:1402`, `2009:1408`. Декоративные изображения имеют пустой alt; доступное имя задаёт видимый текст кнопки. В светлой шапке используются `icon-sun-dark.svg` / `icon-moon-dark.svg`: рисунок grey-500, исходный размер 24×24.

Паттерны `pattern-background-{mobile,tablet,desktop}-light.svg` имеют размеры 375×812 / 438×531 / 1440×960. Цвет колец blue-100, толщина 144 px. Геометрия локальных SVG соответствует Figma-эллипсам с внешними габаритами 977×977: mobile origin −602/−165, tablet −539/−446, desktop −539/−413 и 900/352. В SVG окружность описана по средней линии радиусом 416.5 px, внешняя граница учитывает половину stroke. Рендер без повторения и без `cover`; mobile/tablet привязаны к левому верхнему углу, desktop центрируется сверху. Масштаб паттернов остаётся исходным.

В YAML добавлены только пять цветовых alias и восемь `screen-start-*` компонентов: три образца карточек, три подложки и mobile track/thumb. Остальные значения и решения находятся в таблицах и тексте выше. Desktop YAML сохраняет исходную ширину 564 px; согласованная CSS-ширина 567 px не подменяет источник.

### Экранное дополнение этапа 02: источники и измерения

Область: светлый статический экран вопроса. Источники Figma файла `aFFGy8jexuex9L72SFQYPV`, страница `1:3`: default desktop `2009:1646`, tablet `2019:472`, mobile `2022:441`; Active `2009:2220`, `2019:672`, `2022:539`. Свойства и скриншоты проверены через Figma MCP в рабочей сессии; при независимой приёмке повторно проверены mobile/desktop default, tablet Active и области статуса. Полная тёмная тема и состояния после подтверждения не входят в это дополнение.

Значения ниже — размеры экземпляров источника в px; порядок колонок mobile/tablet/desktop. Это не обязательные фиксированные размеры CSS. Дробные значения высоты текста зависят от переноса; line-height описывается отдельно.

| Параметр                                  | Mobile             | Tablet             | Desktop            |
| ----------------------------------------- | ------------------ | ------------------ | ------------------ |
| Default frame                             | `2022:441`         | `2019:472`         | `2009:1646`        |
| Ширина фрейма                             | 375                | 768                | 1440               |
| Контент: x / y / width                    | 24 / 104 / 327     | 64 / 145 / 640     | 140 / 224 / 1157   |
| Первая карточка                           | `2022:700`         | `2019:537`         | `2009:1658`        |
| Карточка: width / height                  | 327 / 72           | 640 / 88           | 564 / 104          |
| Карточка: padding / gap / radius          | 16 / 16 / 12       | 16 / 32 / 24       | 24 / 32 / 24       |
| Буквенная подложка: size / radius         | 40 / 6             | 56 / 12            | 56 / 8             |
| Gap списка / перед Submit                 | 16 / 16            | 24 / 32            | 16 / 32            |
| Submit: узел                              | `2022:720`         | `2019:553`         | `2009:1674`        |
| Submit: width / height / padding / radius | 327 / 56 / 16 / 12 | 640 / 92 / 32 / 24 | 564 / 92 / 32 / 24 |
| Progress: узел                            | `2022:697`         | `2019:533`         | `2009:1654`        |
| Progress: width / height / inset          | 327 / 16 / 4       | 640 / 16 / 4       | 465 / 16 / 4       |
| Высота заполнения progress                | 8                  | 8                  | 8                  |
| Номер вопроса: размер / line-height       | 14 / 1.5           | 20 / 1.5           | 20 / 1.5           |
| Вопрос: размер / line-height              | 20 / 1.2           | 36 / 1.2           | 36 / 1.2           |
| Ответ и Submit: размер / line-height      | 18 / 1             | 28 / 1             | 28 / 1             |
| Подпись темы: узел группы                 | `2022:444`         | `2019:556`         | `2009:1677`        |
| Подпись темы: badge / gap / текст         | 40 / 16 / 18       | 56 / 24 / 28       | 56 / 24 / 28       |

Вопрос, ответы, Submit и подпись темы используют Rubik 500; номер вопроса — italic 400. Источники текста вопроса: `2022:696`, `2019:532`, `2009:1653`. В mobile между номером и вопросом 16 px, перед progress 24 px; tablet — 24 и 40 px. На desktop левый контейнер `2009:1650` имеет высоту 469 px, progress расположен на локальном y=453. Это геометрия образца, не требование фиксировать расстояние от любого вопроса до полосы. Radius progress track/fill сохраняются 999/104 px.

Область значка проверена отдельно на карточках результата: mobile `2022:611` → slot `2022:616` размером 32×32; tablet `2019:835` → `2019:838` размером 40×40; desktop `2009:1944` → `2009:1947` размером 40×40. Источники подтверждают размеры, но постоянное пустое место в default — решение реализации. Цвета, графика и логика correct/wrong этим не утверждаются.

### Экранное дополнение этапа 02: согласованная реализация

- Светлая схема фиксирована. Один `main` содержит взаимоисключающие секции меню и вопроса. Видимость секций и подписи темы временно управляется `hidden`; правило скрытия не переопределяется Grid/Flex. Индикатор темы остаётся статическим.
- Шапка вопроса в обычном размере шрифта начинается на y=0/40/83 px, контент на y=104/145/224 px. Верхний отступ оболочки меняется через `:has()` только при видимом вопросе. Подпись темы использует локальную декоративную иконку Accessibility; геометрия не задаёт фиксированную ширину текста для будущих тем.
- Сохранены переходы 640/1200 px. Две колонки требуют также `quiz-layout` шириной от 67rem. Сетка: левая колонка до 29.0625rem, gap 8rem, правая занимает остаток. На viewport 1440 px она равна 567 px вместо 564 px источника. Это согласованное отклонение ради общего правого края оболочки, а не новое измерение Figma.
- На desktop слева flex-column с gap 2.5rem, min-height 29.3125rem и автоматическим отступом progress. При росте вопроса блок растёт. Высота карточек не фиксируется: значения YAML — только образцы.
- Пустой `aria-hidden`-slot присутствует в каждом label постоянно: 2rem на mobile, 2.5rem от tablet. Заполнение внутри слота не отнимает новую ширину у текста. Flex-wrap и минимум текста `min(4rem, 100%)` допускают перенос элементов при узком контейнере и крупном шрифте. Это не гарантия для произвольного пятого flex-элемента за пределами слота.
- Выбор выполняется нативной radio-группой без прикладного JavaScript; визуальные буквы и пустые слоты не дублируют доступное имя. Кнопка Submit имеет `type="button"` до реализации подтверждения.
- Статический пример берётся из JSON: вопрос 5 Accessibility, варианты `3:1`, `4.5:1`, `7:1`, `2:1`. Progress `value=4, max=10` обозначает уже подтверждённые ответы; текущий ещё не отправлен. Это согласованная демонстрация, не алгоритм и не копия случайной длины полосы Figma.

### Экранное дополнение этапа 02: состояния и контраст

| Состояние                | Принятое оформление                                              | Происхождение                                            |
| ------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------- |
| Default                  | Белая карточка, blue-900 текст; grey-50 badge, grey-500 буква    | Светлые default-экраны                                   |
| Hover невыбранного radio | Только badge purple-100, буква blue-900                          | Согласованное дополнение, не отдельный Figma-вариант     |
| Selected до отправки     | Внутренний контур 3 px purple-600, badge purple-600, буква white | Active экранов; inset-тень вместо изменения размеров     |
| Focus radio и Submit     | Внешний outline 3 px blue-900, offset 4 px                       | Согласованное дополнение, независимо от selected         |
| Submit default           | Purple-600 фон, white текст                                      | Светлые default-экраны                                   |
| Submit hover             | Тот же фон и текст, внутренний белый контур 2 px                 | Согласованная замена низкоконтрастного осветления стенда |

Hover действует только при `(hover: hover) and (pointer: fine)`; выбранный вариант не меняется от hover. Анимации отсутствуют. Контуры не меняют геометрию. Selection стенда — раскрытый правильный вариант после ошибочного выбора другого ответа, не `checked` до отправки. Исходный `submit-hover-active` сохранён как свойство стенда и не переименован в фактический hover приложения.

Контраст пересчитан из исходных sRGB-пар без изменения HEX. Для перечисленного текста применяется консервативный порог 4.5:1; для контура — 3:1. Отношения округлены только для таблицы, сравнение выполняется до округления.

| Пара                                          | Ratio    | Результат в указанной области |
| --------------------------------------------- | -------- | ----------------------------- |
| White / purple-600: selected-буква и Submit   | 4.908:1  | PASS                          |
| Grey-500 / grey-50: default-буква             | 4.888:1  | PASS                          |
| Blue-900 / purple-100: hover-буква            | 9.179:1  | PASS                          |
| Blue-900 / grey-50: внешний focus на странице | 10.013:1 | PASS                          |
| Blue-900 / blue-100: focus на паттерне        | 9.570:1  | PASS                          |
| Blue-900 / white: focus рядом с карточкой     | 10.833:1 | PASS                          |

Это проверка указанных пар, не сертификация доступности приложения. Проблемы correct/wrong и dark badge остаются открытыми. Новые `impl-*` роли и компоненты имеют в экспорте provenance типа `implementation-decision`, без фиктивных Figma node ID. Измерения `screen-question-*` ссылаются на реальные узлы страницы `1:3`, а не на source JSON стенда.

## Elevation & Depth

Option, subject и score: `0 16px 40px 0 rgba(143,160,193,0.14)` в light, `0 16px 40px 0 rgba(49,62,81,0.14)` в dark. Submit использует light-тень в обоих показанных состояниях. Это CSS-округление ответа design context; точный исходный float светлой тени сохранён в JSON.

Progress, toggle, logo и notification не имеют видимой тени. Пустой массив strokes не означает видимую рамку даже при сохранённом Figma strokeWeight.

## Shapes

| Элемент                           | Радиус           |
| --------------------------------- | ---------------- |
| Option / subject / submit / score | 24px             |
| Badge 56×56                       | 8px              |
| Toggle track и progress track     | 999px            |
| Progress fill                     | 104px            |
| Toggle thumb                      | Ellipse, 20×20px |

Радиусы `999` и `104` сохранены как в источнике, а не заменены условным `9999`. Цветные границы состояний option — `3px`, выравнивание inside в Figma. При реализации предусмотреть отсутствие скачка геометрии, но не считать CSS border-модель уже утверждённой.

## Components

### Основные размеры

| Группа            | Геометрия образца           | Внутренние параметры                             | Источник                                                                                               |
| ----------------- | --------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Submit            | 564×92                      | padding 32; radius 24; gap 8; текст 28/28 Medium | [`2050:2327`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2327) |
| Option            | 564×104                     | padding 24; gap 32; badge 56; status icon 40     | [`2050:2624`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2624) |
| Subject with Icon | 564×104                     | padding 24; gap 32; badge 56, icon 40, inset 8   | [`2050:3190`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-3190) |
| Score             | 564×388                     | padding 48; gap 40; внутренний gap результата 16 | [`2050:2422`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2422) |
| Progress          | 465×16                      | padding 4; fill height 8; radius 999 / 104       | [`2050:2282`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2282) |
| Theme control     | контент 128×28; track 48×28 | gap 16; иконки 24; padding track 4; thumb 20     | [`22:445`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=22-445)       |
| Subject logo      | контент 253×56              | gap 24; badge 56; icon 40                        | [`2056:2093`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2056-2093) |
| Selection error   | 316×40                      | gap 8; icon 40; текст 24/36 Regular              | [`2050:3028`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-3028) |

Dark toggle 160×60 и dark logo 285×88 содержат демонстрационный padding 16px со всех сторон. Это не увеличение самого переключателя или logo относительно light. Название Accessibility задаёт ширину образца logo, а не фиксированную ширину для любой темы.

### Option — исходные состояния

| Тема / состояние     | Border      | Badge     | Буква     | Status           | Узел                                                                                                   |
| -------------------- | ----------- | --------- | --------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| light / default      | нет         | `#F4F6FA` | `#626C7F` | нет              | [`2050:2640`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2640) |
| light / hover/active | 3px #A729F5 | `#A729F5` | `#FFFFFF` | нет              | [`2050:2647`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2647) |
| light / correct      | 3px #2FD887 | `#2FD887` | `#FFFFFF` | checkmark-circle | [`2050:2662`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2662) |
| light / selection    | нет         | `#F4F6FA` | `#626C7F` | checkmark-circle | [`2050:2678`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2678) |
| light / wrong        | 3px #EE5454 | `#EE5454` | `#FFFFFF` | dismiss-circle   | [`2050:2670`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2670) |
| dark / default       | нет         | `#F4F6FA` | `#626C7F` | нет              | [`2059:711`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-711)   |
| dark / hover/active  | 3px #A729F5 | `#A729F5` | `#3B4D66` | нет              | [`2059:724`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-724)   |
| dark / correct       | 3px #2FD887 | `#2FD887` | `#3B4D66` | checkmark-circle | [`2059:737`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-737)   |
| dark / selection     | нет         | `#F4F6FA` | `#626C7F` | checkmark-circle | [`2059:756`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-756)   |
| dark / wrong         | 3px #EE5454 | `#EE5454` | `#3B4D66` | dismiss-circle   | [`2059:775`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-775)   |

**Selection в этом макете:** без border, нейтральный badge, справа зелёная галочка. Не переименовывать его автоматически в «выбранный ответ до отправки». Названия Figma не задают полную машину состояний: смысл и связь с логикой квиза нужно согласовать на этапе планирования.

**Submit hover/active:** белый слой 50% поверх `#A729F5`; вычисленный итог `#D394FA`. Текст остаётся белым. Focus и disabled отдельно не показаны.

### Остальные компоненты

- Subject with Icon: на стенде представлен HTML, badge `orange-50`, glyph `orange-400`. Назначения цветов остальных тем и адаптивная геометрия подтверждены отдельно в экранном дополнении этапа 01 выше; это не новые варианты исходного стенда.
- Logo/Score: показана Accessibility — badge `purple-100`, glyph `purple-600`. Заголовок 28/28 Medium; счёт 144/144 Medium; подпись 24/36 Regular.
- Progress: fill в примере равен 300px. Это образец, не заданный процент и не алгоритм прогресса.
- Theme toggle: thumb слева при light, справа при dark; иконки grey-500 / white. Длительность перехода, сохранение выбора и реакция на системную тему не заданы этой страницей.
- Группа Wrong Answer Notification фактически содержит «Please select an answer»: это сообщение об отсутствии выбора, не об ошибочном отправленном ответе.

### Иконки и локальные ресурсы

Изображения и Rubik уже находятся в `src/assets/`; для этой спецификации ничего не скачивается и не заменяется. На стенде slot status icon — 40×40, внутренний glyph — 30×30. Экранное дополнение этапа 02 отдельно подтверждает mobile slot 32×32 и tablet/desktop slot 40×40. Строки JSON с иконками ещё требуют корректного подключения на этапе реализации. Не использовать screenshot макета как готовый интерфейс.

## Do's and Don'ts

- Использовать токены вместо повторяющихся чисел; для свойств, не поддержанных DESIGN.md alpha, читать source JSON и таблицы.
- Не копировать Plus Jakarta Sans и служебные slate-цвета из оформления Style Guide в приложение.
- Не подменять Figma-палитру цветами знакомой версии Frontend Mentor: исходные SVG могут отличаться от этой версии макета; сравнить перед использованием.
- Не переносить размеры showcase-обёрток и координаты стенда в layout приложения.
- Не считать 4.5 : 1 и 2.5 : 1 внутри answer-текста измеренным контрастом: это варианты ответов в примере.
- Проверить доступность и согласовать изменения проблемных цветов отдельно. В этой спецификации исходные значения не исправлены молча.
- Не приписывать источнику придуманные focus/disabled, геометрию, анимации или breakpoint-переходы. Согласованные дополнения этапа 01 явно отделены выше; остальные неизвестные состояния остаются открытыми.

### Проверка контрастности

Численные результаты для текстов, badge и внутренних границ находятся в `docs/design-system/validation.md`. Это анализ пар цветов статического макета, не полный аудит WCAG готового приложения. Порог крупного текста учитывается отдельно от упрощённого предупреждения CLI для всех пар ниже 4.5:1.

### Использование экспорта

`tokens.json` получен из CLI @google/design.md 0.4.0 с проверенной постобработкой. В текущем экспортере отсутствовали числовой `lineHeight` и вся группа компонентов, а RGB округлялись до трёх знаков. В итоговом JSON восстановлены lineHeight, типизированные свойства компонентов и точные нормализованные RGB; сохранён ссылочный alias primary. Дополнительно включены подтверждённые gap, border и shadow. `$extensions` хранит курсив и происхождение; полные свойства лежат в source JSON. CSS/SCSS из tokens не подключены автоматически. При изменении DESIGN.md экспорт нужно пересоздать с теми же проверками и дополнениями, а не заменять сырым выводом CLI.

При экспорте экранного дополнения восстанавливаются также восемь ссылочных `color.screen-*` из YAML вместо разрешённых CLI литералов. Их provenance берётся из таблицы экранных ролей выше, отдельно от стенда. Проверить все прежние значения, типы, ссылки, lineHeight, курсив, компоненты, gap/border/shadow и provenance на сохранность; затем проверить новые alias и их источники. Старые `cli-lint.json` и `verification.json` относятся к исходному извлечению стенда; результаты повторной проверки дополнения описаны в `validation.md`.

Для этапа 01 эта же процедура дополняется пятью новыми цветовыми alias и восемью `components.screen-start-*` из YAML. Provenance ссылается на страницу `1:3` и узлы таблиц, не на `source-tokens.json` стенда. Карточкам добавляются typed gap и ссылочная light-тень из измерений выше. Корневое `$extensions.org.frontend-quiz-app.start-screen` содержит отдельные таблицы измерений и согласованные решения; их источник — этот раздел DESIGN.md. Сырой CLI-экспорт хранится отдельно и сравнивается после восстановления прежних lineHeight, RGB, ссылок, компонентов и extensions. Исходные токены и их provenance должны сохраниться; изменение описания области охвата допустимо и проверяется отдельно.

Для этапа 02 дополнительно экспортируются новые YAML-записи `components.screen-question-*`, `components.impl-question-*` и `color.impl-*`. На карточках восстанавливаются typed gap и ссылочная light-тень; у Submit — light-тень; группа `interaction` содержит отдельные typed color/width/offset контуров по таблице состояний без подмены фоновой тени. Геометрия источника не заменяется CSS-отклонениями. `$extensions.org.frontend-quiz-app.question-screen` хранит ссылки на фреймы и решения по сетке, скрытию, резерву и статическому примеру. Это производное представление данного раздела, не новый независимый источник токенов. Проверять все прежние записи на неизменность, новые значения — против YAML/таблиц, а каждый alias — на цель, тип и отсутствие циклов. Результаты рабочих сессий и приёмки сохраняются в локальном плане, не дописываются как отчёт в validation.md.

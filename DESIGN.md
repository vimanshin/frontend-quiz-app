---
version: 'alpha'
name: 'Frontend Quiz App'
description: 'Извлечено из Figma Design System 2:2; значения источника сохранены, реализация отдельно.'
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
---

# Frontend Quiz App — дизайн-система

## Overview

Источник: [Figma — Design System](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2-2). Спецификация страницы `2:2`, а не реализация интерфейса и не учебный план.

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

Фон всей страницы приложения здесь не утверждается: `blue-950` подтверждён у демонстрационных dark-обёрток toggle/logo. Фоны экранов и фоновые паттерны нужно сверить на странице экранов. Не выдавать геометрию стенда Style Guide за layout приложения.

Цвета `color/slate-*` и шрифт Plus Jakarta Sans обслуживают подписи стенда. Они не включены в палитру и пресеты квиза.

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

В `src/assets/fonts/` уже есть variable Rubik normal/italic. Для Light 300 использовать соответствующее начертание variable-файла, а не искусственно облегчать Regular. Подключение `@font-face` — последующий этап, сейчас стили приложения не изменяются.

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

**Не определено выбранной страницей:** ширина контейнера приложения, отступы экранов, breakpoint-переходы и mobile/tablet-геометрия компонентов. `768px` и `1024px` в существующем SCSS — шаблон, не токены Figma. Мобильная типографика есть; адаптивный layout из неё не следует.

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

- Subject with Icon: представлен HTML, badge `orange-50`, glyph `orange-400`. Для остальных тем палитра существует, но их назначения и геометрию надо подтвердить на экранах, а не придумать новые варианты.
- Logo/Score: показана Accessibility — badge `purple-100`, glyph `purple-600`. Заголовок 28/28 Medium; счёт 144/144 Medium; подпись 24/36 Regular.
- Progress: fill в примере равен 300px. Это образец, не заданный процент и не алгоритм прогресса.
- Theme toggle: thumb слева при light, справа при dark; иконки grey-500 / white. Длительность перехода, сохранение выбора и реакция на системную тему не заданы этой страницей.
- Группа Wrong Answer Notification фактически содержит «Please select an answer»: это сообщение об отсутствии выбора, не об ошибочном отправленном ответе.

### Иконки и локальные ресурсы

Изображения и Rubik уже находятся в `src/assets/`; для этой спецификации ничего не скачивается и не заменяется. Slot status icon — 40×40, внутренний glyph — 30×30. Строки JSON с иконками ещё требуют корректного подключения на этапе реализации. Не использовать screenshot макета как готовый интерфейс.

## Do's and Don'ts

- Использовать токены вместо повторяющихся чисел; для свойств, не поддержанных DESIGN.md alpha, читать source JSON и таблицы.
- Не копировать Plus Jakarta Sans и служебные slate-цвета из оформления Style Guide в приложение.
- Не подменять Figma-палитру цветами знакомой версии Frontend Mentor: исходные SVG могут отличаться от этой версии макета; сравнить перед использованием.
- Не переносить размеры showcase-обёрток и координаты стенда в layout приложения.
- Не считать 4.5 : 1 и 2.5 : 1 внутри answer-текста измеренным контрастом: это варианты ответов в примере.
- Проверить доступность и согласовать изменения проблемных цветов отдельно. В этой спецификации исходные значения не исправлены молча.
- Не придумывать focus/disabled, mobile/tablet-геометрию, длительности анимаций и breakpoint-переходы. Неизвестное остаётся открытым до следующего этапа.

### Проверка контрастности

Численные результаты для текстов, badge и внутренних границ находятся в `docs/design-system/validation.md`. Это анализ пар цветов статического макета, не полный аудит WCAG готового приложения. Порог крупного текста учитывается отдельно от упрощённого предупреждения CLI для всех пар ниже 4.5:1.

### Использование экспорта

`tokens.json` получен из CLI @google/design.md 0.4.0 с проверенной постобработкой. В текущем экспортере отсутствовали числовой `lineHeight` и вся группа компонентов, а RGB округлялись до трёх знаков. В итоговом JSON восстановлены lineHeight, типизированные свойства компонентов и точные нормализованные RGB; сохранён ссылочный alias primary. Дополнительно включены подтверждённые gap, border и shadow. `$extensions` хранит курсив и происхождение; полные свойства лежат в source JSON. CSS/SCSS из tokens не подключены автоматически. При изменении DESIGN.md экспорт нужно пересоздать с теми же проверками и дополнениями, а не заменять сырым выводом CLI.

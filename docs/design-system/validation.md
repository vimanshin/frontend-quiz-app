# Проверки дизайн-системы

## Источник и полнота

Палитра: 18; typography: 14; spacing: 10; группы: 8; исходные варианты: 23. Идентификаторы вариантов из двух извлечений сопоставлены с XML metadata страницы 2:2: пропусков и лишних вариантов нет.

## Контрастность

Расчёт: sRGB → linear RGB → относительная яркость (0.2126 R + 0.7152 G + 0.0722 B); `(Lmax + 0.05) / (Lmin + 0.05)`. Решение принимается по неокруглённому результату; таблица округлена только для чтения.

Для текста ≥24 CSS px использован порог 3:1; для меньшего текста без подтверждённого bold — 4.5:1. Для значимых icon/border-пар — 3:1. Это проверка конкретных смежных цветов; применимость non-text требования зависит от роли элемента в готовом UI.

Источники критериев: [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [W3C — Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

| Элемент                                                  | Foreground / background | Ratio    | Порог | Результат | Узел                                                                                                   |
| -------------------------------------------------------- | ----------------------- | -------- | ----- | --------- | ------------------------------------------------------------------------------------------------------ |
| submit-default                                           | `#FFFFFF` / `#A729F5`   | 4.908:1  | 3:1   | PASS      | [`2050:2325`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2325) |
| submit-hover-active                                      | `#FFFFFF` / `#D394FA`   | 2.237:1  | 3:1   | REVIEW    | [`2050:2338`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2338) |
| subject-light-default                                    | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:3076`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-3076) |
| subject-dark-default                                     | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:807`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-807)   |
| answer-light-default                                     | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:2637`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2637) |
| answer-light-default-badge                               | `#626C7F` / `#F4F6FA`   | 4.888:1  | 3:1   | PASS      | [`2050:2638`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2638) |
| answer-light-hover-active                                | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:2644`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2644) |
| answer-light-hover-active-badge                          | `#FFFFFF` / `#A729F5`   | 4.908:1  | 3:1   | PASS      | [`2050:2645`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2645) |
| answer-light-hover-active state border (inner adjacency) | `#A729F5` / `#FFFFFF`   | 4.908:1  | 3:1   | PASS      | [`2050:2647`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2647) |
| answer-light-correct                                     | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:2657`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2657) |
| answer-light-correct-badge                               | `#FFFFFF` / `#2FD887`   | 1.860:1  | 3:1   | REVIEW    | [`2050:2660`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2660) |
| answer-light-correct status icon                         | `#2FD887` / `#FFFFFF`   | 1.860:1  | 3:1   | REVIEW    | [`2050:2658`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2658) |
| answer-light-correct state border (inner adjacency)      | `#2FD887` / `#FFFFFF`   | 1.860:1  | 3:1   | REVIEW    | [`2050:2662`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2662) |
| answer-light-selection                                   | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:2673`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2673) |
| answer-light-selection-badge                             | `#626C7F` / `#F4F6FA`   | 4.888:1  | 3:1   | PASS      | [`2050:2676`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2676) |
| answer-light-selection status icon                       | `#2FD887` / `#FFFFFF`   | 1.860:1  | 3:1   | REVIEW    | [`2050:2674`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2674) |
| answer-light-wrong                                       | `#313E51` / `#FFFFFF`   | 10.833:1 | 3:1   | PASS      | [`2050:2665`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2665) |
| answer-light-wrong-badge                                 | `#FFFFFF` / `#EE5454`   | 3.482:1  | 3:1   | PASS      | [`2050:2668`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2668) |
| answer-light-wrong status icon                           | `#EE5454` / `#FFFFFF`   | 3.482:1  | 3:1   | PASS      | [`2050:2666`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2666) |
| answer-light-wrong state border (inner adjacency)        | `#EE5454` / `#FFFFFF`   | 3.482:1  | 3:1   | PASS      | [`2050:2670`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2670) |
| answer-dark-default                                      | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:713`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-713)   |
| answer-dark-default-badge                                | `#626C7F` / `#F4F6FA`   | 4.888:1  | 3:1   | PASS      | [`2059:714`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-714)   |
| answer-dark-hover-active                                 | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:726`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-726)   |
| answer-dark-hover-active-badge                           | `#3B4D66` / `#A729F5`   | 1.754:1  | 3:1   | REVIEW    | [`2059:727`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-727)   |
| answer-dark-hover-active state border (inner adjacency)  | `#A729F5` / `#3B4D66`   | 1.754:1  | 3:1   | REVIEW    | [`2059:724`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-724)   |
| answer-dark-correct                                      | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:739`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-739)   |
| answer-dark-correct-badge                                | `#3B4D66` / `#2FD887`   | 4.629:1  | 3:1   | PASS      | [`2059:742`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-742)   |
| answer-dark-correct status icon                          | `#2FD887` / `#3B4D66`   | 4.629:1  | 3:1   | PASS      | [`2059:740`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-740)   |
| answer-dark-correct state border (inner adjacency)       | `#2FD887` / `#3B4D66`   | 4.629:1  | 3:1   | PASS      | [`2059:737`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-737)   |
| answer-dark-selection                                    | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:758`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-758)   |
| answer-dark-selection-badge                              | `#626C7F` / `#F4F6FA`   | 4.888:1  | 3:1   | PASS      | [`2059:761`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-761)   |
| answer-dark-selection status icon                        | `#2FD887` / `#3B4D66`   | 4.629:1  | 3:1   | PASS      | [`2059:759`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-759)   |
| answer-dark-wrong                                        | `#FFFFFF` / `#3B4D66`   | 8.609:1  | 3:1   | PASS      | [`2059:777`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-777)   |
| answer-dark-wrong-badge                                  | `#3B4D66` / `#EE5454`   | 2.473:1  | 3:1   | REVIEW    | [`2059:780`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-780)   |
| answer-dark-wrong status icon                            | `#EE5454` / `#3B4D66`   | 2.473:1  | 3:1   | REVIEW    | [`2059:778`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-778)   |
| answer-dark-wrong state border (inner adjacency)         | `#EE5454` / `#3B4D66`   | 2.473:1  | 3:1   | REVIEW    | [`2059:775`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-775)   |
| score-light total                                        | `#626C7F` / `#FFFFFF`   | 5.289:1  | 3:1   | PASS      | [`2050:2442`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2050-2442) |
| score-dark total                                         | `#ABC1E1` / `#3B4D66`   | 4.693:1  | 3:1   | PASS      | [`2059:664`](https://www.figma.com/design/aFFGy8jexuex9L72SFQYPV/frontend-quiz-app?node-id=2059-664)   |

Цвета с REVIEW не изменены: требуется отдельное решение о коррекции источника/реализации. Focus, клавиатура, screen reader, динамические ошибки и реальные адаптивные экраны здесь не тестировались.

## Ограничения и расхождения

- Название style Preset 5 Medium говорит 100%, фактическая высота строки и подпись образца — 150%. Использована фактическая 1.5.
- Имена Selection и Wrong Answer Notification не достаточны для вывода о логике. Визуальные свойства и фактический текст сохранены.
- Цвета исходных ассетов не объявлены автоматически совпадающими с Figma; это отдельная проверка при вёрстке.
- Нет утверждённых breakpoint-токенов, page layout или mobile-геометрии компонентов на выбранной странице. Это не пропуск существующего извлечения, а граница источника.
- CLI 0.4.0 не экспортировал числовой lineHeight и компоненты, а RGB округлил до трёх знаков. Итоговый tokens.json дополнен и проверен против DESIGN.md и source-tokens.json: lineHeight и typed components восстановлены, RGB приведены к точным значениям channel/255; alias primary сохранён. Курсив и source provenance дополняются через extensions. Полная геометрия доступна в source-tokens.json.

## Проверка инструментами

CLI lint завершился с кодом 0: 0 ошибок, 14 предупреждений (5 о контрасте и 9 о цветах полной палитры, не использованных в компактных описаниях компонентов). Неиспользованные цвета не удаляются из спецификации источника. Из 5 текстовых предупреждений CLI белая буква на красном фоне проходит порог 3:1 для показанного размера 28px, но не 4.5:1; остальные 4 требуют рассмотрения даже при крупном тексте. Дополнительная таблица выше учитывает значимые icon/border-пары отдельно.

Результаты CLI lint и дополнительной проверки exports сохраняются рядом в `cli-lint.json` и `verification.json`. Дополнительная проверка — локальные проверки типов, значений, ссылок и полноты экспорта, не заявление о сертификации официальной DTCG-схемой. Отсутствие структурных ошибок не означает отсутствие замечаний по исходному дизайну.

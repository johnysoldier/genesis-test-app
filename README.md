# genesis-test-app

Тестовое задание

В выпадающем списке пользователь выбирает одну из трех сущностей, которую нужно создать: Сделка, Контакт, Компания.
По нажатию на кнопку “Создать” с фронтенда уходит POST-запрос (contenttype=application/json) на API, создается выбранная сущность, в теле ответа API присылает ID созданной сущности и http код ответа 200, либо текст ошибки и соответствующий http-код ответа.
В случае успешного создания сущности отображаем название сущности и её идентификатор в области отображения результатов. Результаты накапливаем, должны отображаться все ID и имена сущностей, созданных с момента открытия окна браузера.

В выпадающем списке отображаем четыре элемента:

- Не выбрано
- Сделка
- Контакт
- Компания

По-умолчанию в списке выбран первый элемент “Не выбрано”. При выбранном элементе “Не выбрано” кнопку “Создать” делаем неактивной (на белом фоне). При иных выбранных элементах кнопку делаем активной (на синем фоне).

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

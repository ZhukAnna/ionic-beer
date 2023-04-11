# ionic-beer

## Запуск проекта в браузере:

1\. с помощью [npm](https://docs.npmjs.com/about-npm/):

```shell
npm start
```
или

2\. с помощью [Ionic CLI](https://ionicframework.com/docs/cli):

```shell
ionic serve
```

## Сборка debug apk под Android:

1\. Необходимо установить Android Studio и Android SDK.

* Подключить Android-устройство к компьютеру.

```shell
ionic capacitor build android
```

2\. Без установки Android Studio

```shell
ionic capacitor build android  --debug
```

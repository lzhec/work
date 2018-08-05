Приложение разработано на фреймворке django. Для запуска необходимо наличие на машине python django.
Используется база данных MySQL. В директории приложения sql сохраненная база db_mynotes.sql с суперпользователем.
Для запуска сервера набрать в терминале python manage.py runserver.
Зарегистрированный пользователь видит только свои заметки. Анонимный - никаких.

Superuser:
    user: admin
    pswrd: qwerty00


Database:
    движок: MySQL
    host: localhost
    name: db_mynotes
    user: root
    pswrd: Root

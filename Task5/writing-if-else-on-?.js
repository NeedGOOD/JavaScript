'use strict';

let message =
    (login == 'Працівник') ? 'Привіт' :
        (login == 'Директор') ? 'Вітаю' :
            (login == '') ? 'Немає логіну' : '';
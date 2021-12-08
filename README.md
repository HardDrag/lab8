# Building the app

To build the app just paste in your desired directory: 

### `wget https://github.com/HardDrag/lab8/archive/refs/heads/main.zip; unzip main.zip; rm main.zip; cd lab8-main;` 

Then: 

### `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build`

Finally:

### `docker run -it --name web_app -p 3000:3000 -v /app/node_modules -v$(pwd):/app lab8-main_web`

Aplikacja opiera się na strukturze plików z laboratorium 8. Zmiany zostały dokonane w pliku o nazwie „App.js”. Przybrał on następującą postać:

![alt text](https://github.com/HardDrag/lab8/blob/main/sample.png)

Jak widać na powyższym zrzucie ekranu, do działania aplikacji należało skonstruować metodę, która będize wyliczała na podstawie danej liczby konkretną wartości ciągu Fibonacciego.

W linii 6 deklaruję kolejno możliwość zmiany stanu (odświeżanie wartości ciągu wraz z wprodzeniem jej do pola input), oraz zmienne wejściowe do funkcji, która obliczy dany wyraz ciągu. Następnie widać funkcję, która za pomocą pętli liczy dany element (n1). 
Od linii 17 do 23 widać funkcję return, która zwraca nam gotowy widok w postaci kodu HTML. Najistotniejszą linią jest linia 20 w której podczas zmiany wartości w polu input zostaje wywołana funkcja z wartością pobraną z pola input, która wylicza wyraz ciągu. W linii 21 za pomocą wtrącenia kodu JS (klamry: „{}”) dokonuje zmiany wyświetlanej wartości na obliczoną.

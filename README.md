## Start

- Navigera till foldern där du vill att projektmappen ska ligga
- git clone https://github.com/JensLnu/Qurie-anteckningsbok-team-gbg.git
- cd Qurie-anteckningsbok-team-gbg
- git checkout -b feature/{namn på branch med kebab-case}

## Under tiden

- se till att vara i din branch när du jobbar / git checkout feature/{namn på branch med kebab-case}
- git add .
- git commit kort meddelande, högst 100tecken, inled med vad du har gjort i bestämd form (add, fix, delete, m.m.)
- git push -u origin feature/{namn på branch med kebab-case} (efter att -u är satt första gången kan man använda sig av bara git push)

## Vid färdig feature

- se till att vara i main / git checkout main
- git pull
- git checkout feature/{namn på branch med kebab-case}
- git pull origin main
- lös merge-conflicts
- gå till main / git checkout main
- git merge feature/{namn på branch med kebab-case}
- Inga konflikter här eftersom du mergade main till din branch först...visst?
- git push -u origin main

## När storyn är färdig

- Upprepa steg för färdig feature om du inte redan gjort det
- git branch -d feature/{namn på branch med kebab-case} eller -D om den inte vill med sig

## För att jobba i samma branch (hint: gör en local kopia av branchen)

- git branch -r (listar alla branches på github)
- git checkout -b {namn på din nya lokala branch} {namn på den listade branchen du vill kopiera}

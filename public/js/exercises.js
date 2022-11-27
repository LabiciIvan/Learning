
const EXERCISES = [
    [
        'Dublul Numarului',
        'Se introduce un numar, functia trebuie sa returneze dublul acelui numar',
        'Exemplu:   1 => 2 | 2 => 4',
    ],
    [
        'Patratul unui Numar',
        'Se introduce un numar, functia trebuie sa returneze patratul  acelui numar',
        'Exemplu:   1 => 1 | 2 => 4 | 3 => 9',
    ],
    [
        'Cel mai mare Numar',
        'Se introduc doua numere, functia trebuie sa returneze numarul care este mai mare',
        'Exemplu:   1, 3 => 3 | 15, 4 => 15 |  1,1 => Egale',
    ],
    [
        'Factorialul unui Numar',
        'Se introduce un numar, functia trebuie sa returneze factorialul acelui numar',
        'Exemplu:   4 => 1 * 2 * 3 * 4 => 24 | DOAR REZULTATUL 24',
    ],
    [
        'Numarul de Litere',
        'Se introduce un cuvant, functia trebuie sa returneze numarul de litere din acel cuvant',
        'Exemplu:   ana => 3 | mere => 4',
    ],
    [
        'Numarul de Vocale',
        'Se introduce un cuvant, functia trebuie sa returneze numarul de vocale din acel cuvant.Se precizeaza ca se introduce doar un cuvant',
        'Exemplu:   mere => 2 | pere => 2 | aeiou => 5',
    ],
    [
        'Numarul de Consoane',
        'Se introduce un cuvant, functia trebuie sa returneze numarul de consoane din acel cuvant. Se va introduce doar cate un cuvant',
        'Exemplu:   tren => 3 | elev => 2 |  socoata => 3',
    ],
    [
        'Majuscule',
        'Se introduce un cuvant, functia trebuie sa returneze cuvantul formatat cu litere majuscule',
        'Exemplu:   mama => MAMA | Tata => TATA | sCoaLa => SCOALA',
    ],
    [
        'Litere mici',
        'Se introduce un cuvant, functia trebuie sa returneze cuvantul formatat cu litere mici',
        'Exemplu:   MAMA => mama | TAta => tata | SCOALA => scoala',
    ],
    [
        'Formatare Cuvinte',
        'Se introduc doua cuvinte, functia trebuie sa returneze cuvintele respective, dar concatenate si cu fiecare litera de inceput sa fie cu Majuscula.',
        'Exemplu:   mama tata => MamaTata | scoAlA tEME=> ScoalaTeme | LucrU aCasa => LucruAcasa | invata bine => InvataBine',
    ],
    
];

insertExercises();

function insertExercises() 
{
    // ITERATE THE EXERCISE ARRAY
    for (let i = 0; i < EXERCISES.length; ++i)
    {
        // Removing all white spaces from a string
        let idElement = EXERCISES[i][0].replace(/\s/g, '');
    
        let taskWrapper = document.createElement('div');
            taskWrapper.className = 'container container-sm bg-warning-darker bg-gradient m-2';

        let taskHeader = document.createElement('div');
            taskHeader.className = 'row row-cols';

        let headerItem1 = document.createElement('div');
            headerItem1.className = 'col-1 d-grid justify-content-center align-items-center border-end border-secondary';
            headerItem1.innerHTML = i + 1;

        let headerItem2 = document.createElement('div');
            headerItem2.className = 'col-10 text-center border-end border-secondary';
            headerItem2.innerHTML = EXERCISES[i][0];
        
        let headerItem3 = document.createElement('a');
            headerItem3.className = 'col-1 d-grid justify-content-center';
            headerItem3.setAttribute('data-bs-toggle', 'collapse');
            headerItem3.setAttribute('href', '#' + idElement);
            headerItem3.setAttribute('role', 'button');
            headerItem3.setAttribute('aria-expanded', 'true');
            headerItem3.setAttribute('aria-controls', idElement);
        
        let iconToExpand = document.createElement('i');
            iconToExpand.className = 'bi bi-arrow-bar-down text-light';

        // Push in headerItem3 the icon
            headerItem3.appendChild(iconToExpand);

        // Push in taskHeder headerItem1, headerItem2, headerItem3
        taskHeader.appendChild(headerItem1);
        taskHeader.appendChild(headerItem2);
        taskHeader.appendChild(headerItem3);

        let taskBody = document.createElement('div');
            taskBody.className = 'row row-cols-2 collapse bg-light-darker bg-gradient';
            taskBody.setAttribute('id', idElement);

        let bodyItem1 = document.createElement('div');
            bodyItem1.className = 'container border-end border-secondary-muted border-3 p-4';
            bodyItem1.innerHTML = EXERCISES[i][1];

        let bodyItem2 = document.createElement('div');
            bodyItem2.className = 'container row';
            bodyItem2.innerHTML = EXERCISES[i][2];

        // Push in taskBody bodyItem1 and bodyItem2
        taskBody.appendChild(bodyItem1);
        taskBody.appendChild(bodyItem2);

        taskWrapper.appendChild(taskHeader);
        taskWrapper.appendChild(taskBody);

        let divToAppend = document.getElementById('insertExercises');
            divToAppend.appendChild(taskWrapper);
    }    
}          
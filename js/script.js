const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

let events = [
    {
        id: 1,
        title: "8 марта",
        description: "Празднуем всей семьей у бабушки за большим столом",
        date: "08.03.2020"
    },
    {
        id: 2,
        title: "Свадьба Максима и Оксаны",
        description: "Они все таки решились...",
        date: "13.03.2020"
    },
    {
        id: 3,
        title: "День Рождения Лены",
        description: "...приглашает всех к себе :)",
        date: "14.03.2020"
    },
];

let users = [
    {
        id: 1,
        name: "Максим",
        birthday: "22.06.1990",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        id: 2,
        name: "Оксана",
        birthday: "03.08.1995",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "Лена",
        birthday: "14.03.1991",
        image: "https://i.pravatar.cc/150?img=29"
    },
    {
        id: 4,
        name: "Инокентий",
        birthday: "23.07.1937",
        image: "https://i.pravatar.cc/150?img=53"
    },
    {
        id: 4,
        name: "Дед",
        birthday: "23.07.1937",
        image: "https://i.pravatar.cc/150?img=65"
    },
    {
        id: 4,
        name: "Другой дед",
        birthday: "23.07.1937",
        image: "https://i.pravatar.cc/150?img=61"
    }
];

let presents = [
    {
        id: 0,
        eventId: 1,
        title: "Телевизор",
        description: 'Телевизор XIAOMI Mi TV UHD 4S 43" International',
        free: "true",
        link: "https://eldorado.ua/televizor-led-xiaomi-mi-tv-uhd-4-s-43-international/p71279632/",
        image: "https://i.eldorado.ua/goods_images/1038962/6473159-1575546933.jpg"
    },
    {
        id: 1,
        eventId: 2,
        title: "Телевизор",
        description: 'Телевизор XIAOMI Mi TV UHD 4S 43" International',
        free: "true",
        link: "https://eldorado.ua/televizor-led-xiaomi-mi-tv-uhd-4-s-43-international/p71279632/",
        image: "https://i.eldorado.ua/goods_images/1038962/6473159-1575546933.jpg"
    },
    {
        id: 2,
        eventId: 2,
        title: "Холодильник",
        description: 'Холодильник SAMSUNG RS52N3203SA/UA',
        free: "true",
        link: "https://eldorado.ua/hol-k-samsung-rs-52-n-3203-saua/p71256236/",
        image: "https://i.eldorado.ua/goods_images/1061560/6205959-1533108939.PNG"
    },
    {
        id: 3,
        eventId: 2,
        title: "Микроволновка",
        description: 'Микроволновая печь SAMSUNG MS23F302TAS/UA',
        free: "false",
        link: "https://eldorado.ua/mikrovolnovaya-pech-samsung-ms-23-f-302-tasua-71232349-71232349/p1452122/",
        image: "https://i.eldorado.ua/goods_images/1039050/6146083-1521463061.jpg"
    },
    {
        id: 4,
        eventId: 2,
        title: "Laptop Asus",
        description: 'Laptop Asus',
        free: "true",
        link: "https://eldorado.ua/noutbuk-asus-ga502-du-al005-90-nr0213-m01590-/p71280191/",
        image: "https://i.eldorado.ua/goods_images/1039096/6495829-1577104354.jpg"
    },
    {
        id: 5,
        eventId: 2,
        title: "Смартфон SAMSUNG",
        description: 'Смартфон SAMSUNG Galaxy A51 4/64GB Black',
        free: "true",
        link: "https://eldorado.ua/smartfon-samsung-galaxy-a51-4-64gb-black-sm-a515fzkusek/p71280670/",
        image: "https://www.citrus.ua/smartfony/zenfone-6-black-6128-gb-648496.html"
    },
    {
        id: 6,
        eventId: 3,
        title: "Крутые биодобавки",
        description: 'БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА BIO SUPPORТ',
        free: "true",
        link: "https://wamiles.com.ua/katalog/zdorove-1/biologicheski-aktivnaya-dobavka-bio-support",
        image: "https://wamiles.com.ua/image/cache/b82afca58a41b83e6a85e46c1a2b0f5e.png"
    },
    {
        id: 7,
        eventId: 3,
        title: "Зеркалка",
        description: 'Фотоаппарат цифровой SONY Alpha 9 Body Black',
        free: "true",
        link: "https://eldorado.ua/f-t-cifr-sony-alpha-9-body-black-ilce9-cec-/p71254548/",
        image: "https://i.eldorado.ua/goods_images/1039016/6226451-1537350949.jpg"
    },
    {
        id: 8,
        eventId: 3,
        title: "Водородный стакан",
        description: 'Enhel Bottle Портативный генератор водородной воды.',
        free: "true",
        link: "https://www.enhelbeauty.com/product/portativnyy-apparat-enhel-bottle",
        image: "https://static-eu.insales.ru/images/products/1/7232/274725952/E_BOTTLE.jpg"
    },
];

// console.log(location);

(function router(path) {
    switch (path) {
        case '/index.html':
            console.log(path);
            showEvents(events);
            break;
        case '/events.html':
            console.log(path);
            $(function () {
                $('#pnlEventCalendar').calendar({months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сенябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                  days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'], onSelect: function (event) {
                  $('#lblEventCalendar').text(event.label).on('change', dispatchEvent(selectEventByDate(event)));
                }});
            });
            break;
        case '/family.html':
            showUsers(users);

            
            
            break;
        default:
            break;
    }
})(location.pathname);



function selectEventByDate(date) {
    
    let selectedDate = new Date( toISODate(date.label, pattern) );

    for(let i in events){
        let currentDate = new Date(toISODate(events[i].date, pattern));
        if(currentDate.toString() === selectedDate.toString()) {
            return events[i];
        }
    }
}

function dispatchEvent(myEvent) {
    clearCardbar();
    clearEventDescription();
    
    if(!myEvent) return;

    showEvent(myEvent);
    showPressents( getPresentsByEventId(myEvent.id) );
}

// function setDate(date) {

//     triggerSelectEvent(event)
//     document.on('load', 'td', function () {
//         $('td').removeClass('selected');
//         $(this).addClass('selected');
        
//         currentDay = $(this).text();
//         triggerSelectEvent(options.onSelect);
//     });
// }

function toISODate(date, pattern) {
    return date.replace(pattern,'$3-$2-$1') // ISO
}

function showEvent(myEvent) {
    let titleElem = $('#eventTitle')[0];
    let descriptionElem = $('#eventDescription')[0];

    if(myEvent){
        titleElem.innerHTML = myEvent.title;
        descriptionElem.innerHTML = myEvent.description;
    }
    else {
        titleElem.innerHTML = "Событий нет";
        descriptionElem.innerHTML = "Описания нет";
    }
}

function getPresentsByEventId(eventId) {
    let currentPresents = [];

    for(let i in presents){
        if(presents[i].eventId === eventId) {
            currentPresents.push(presents[i]);
        }
    }

    return currentPresents;
}

function clearCardbar() {
    let cardbar = $('.cardbar')[0];
    cardbar.innerHTML = "";
}

function clearEventDescription() {
    let eventTitle = $('#eventTitle').empty();
    let eventDescription = $('#eventDescription').empty();
}

function showUsers(users) {
    let usersContainer = document.getElementById('users-container');

    for (const user of users) {
        let userElem = document.createElement('div');
        userElem.classList.add('card', 'text-center', 'user', 'align-items-center');
        userElem.setAttribute('style', 'width: 18rem;');

        let avatar = document.createElement('img');
        avatar.classList.add('card-img-top', 'avatar');
        avatar.setAttribute('src', user.image);
        userElem.appendChild(avatar);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        userElem.appendChild(cardBody);

        let h3 = document.createElement('h3');
        h3.classList.add('card-text');
        h3.innerText = user.name;
        cardBody.appendChild(h3);

        usersContainer.appendChild(userElem);
    }
}

function showEvents(events) {
    let eventsContainer = $('.eventsContainer')[0];

    for(let event of events) {
        let currentHref = `events.html?date=${toISODate(event.date, pattern)}`;

        let eventItem = document.createElement('a');
        eventItem.classList.add('event-item');
        eventItem.setAttribute('href', currentHref);

        let h3 = document.createElement('h3');
        h3.classList.add('event-title');
        h3.innerText = event.title;
        eventItem.appendChild(h3);

        let eventDate = document.createElement('div');
        eventDate.classList.add('event-date');
        eventDate.innerText = event.date;
        eventItem.appendChild(eventDate);

        let eventBody = document.createElement('div');
        eventBody.classList.add('event-body');
        eventBody.innerText = event.description;
        eventItem.appendChild(eventBody);

        eventsContainer.appendChild(eventItem);
    }
}

function showPressents(presents) {
    let cardbar = $('.cardbar')[0];

    if(presents) {
        for(let present of presents) {

            let card = document.createElement('div');
            card.classList.add('card', 'text-center', 'present');
            cardbar.appendChild(card);

            let img = document.createElement('img');
            img.setAttribute('alt', present.title);
            img.setAttribute('src', present.image);
            img.classList.add('card-img-top');
            card.appendChild(img);

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);
            
            let h5 = document.createElement('h5');
            h5.setAttribute('class', 'card-title');
            h5.innerText = present.title;
            cardBody.appendChild(h5);
            
            let cardText = document.createElement('div');
            cardText.setAttribute('class', 'card-text');
            cardText.innerText = present.description;
            cardBody.appendChild(cardText);

            let aLink = document.createElement('a');
            aLink.innerText = "Посмотреть";
            aLink.setAttribute('href', present.link);
            aLink.classList.add('btn', 'btn-secondary');
            cardBody.appendChild(aLink);
            
            let hr = document.createElement('hr');
            cardBody.appendChild(hr);

            let aPlan = document.createElement('a');
            aPlan.innerText = "Запланировать";
            aPlan.setAttribute('href', '#');
            aPlan.classList.add('btn', 'btn-primary');
            cardBody.appendChild(aPlan);
        }
    }
}
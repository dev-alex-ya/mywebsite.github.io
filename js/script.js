let events = [
    {
        id: 1,
        title: "8 марта",
        description: "Празднуем всей семьей у бабушки за большим столом",
        date: "2020-03-08T00:00:00.417Z"
    },
    {
        id: 2,
        title: "Свадьба Максима и Оксаны",
        description: "Максим и Оксана решились...",
        date: "2020-08-26T00:00:00.417Z"
    },
    {
        id: 3,
        title: "День Рождения Насти",
        description: "Настя приглашает всех к себе",
        date: "2020-11-19T00:00:00.417Z"
    },
];

let users = [
    {
        id: 1,
        name: "Максим",
        birthday: "1990-05-22T00:00:00.417Z"
    },
    {
        id: 2,
        name: "Оксана",
        birthday: "1995-08-03T00:00:00.417Z"
    },
    {
        id: 3,
        name: "Настя",
        birthday: "1991-11-19T00:00:00.417Z"
    },
    {
        id: 4,
        name: "Бабушка",
        birthday: "1937-12-30T00:00:00.417Z"
    }
];

let presents = [
    {
        id: 1,
        eventId: 2,
        title: "Телевизор",
        free: "true",
        link: "https://rozetka.com.ua/samsung_qe65q77rauxua/p83629080/"
    },
    {
        id: 2,
        eventId: 2,
        title: "Холодильник",
        free: "true",
        link: "https://bt.rozetka.com.ua/midea_hq-623wen_st/p151516093/"
    },
    {
        id: 3,
        eventId: 2,
        title: "Микроволновка",
        free: "false",
        link: "https://bt.rozetka.com.ua/samsung_mc32k7055ct_bw/p73116033/"
    },
    {
        id: 4,
        eventId: 3,
        title: "Laptop Asus",
        free: "true",
        link: "https://eldorado.ua/uk/noutbuk-asus-x512-ua-ej244-blue-90-nb0-k86-m08490-/p71274494/?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=iProspect-ukr-Shop-Smart-ACC_%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8&utm_content=personal_computers&gclid=Cj0KCQiAv8PyBRDMARIsAFo4wK2fRsH4RoDb4YX8qElcLzl0sg6BLBc-i5VJfrMjrMZK1FPsYN_8X9caAtJJEALw_wcB"
    },
    {
        id: 5,
        eventId: 3,
        title: "Smartphone Asus",
        free: "true",
        link: "https://www.citrus.ua/smartfony/zenfone-6-black-6128-gb-648496.html"
    },
    {
        id: 6,
        eventId: 3,
        title: "Крутые биодобавки",
        free: "true",
        link: "https://wamiles.com.ua/katalog/zdorove-1/biologicheski-aktivnaya-dobavka-bio-support"
    },
    {
        id: 7,
        eventId: 3,
        title: "Зеркалка",
        free: "true",
        link: "https://denika.ua/p/fotoapparat-nikon-coolpix-b500-cherniy"
    },
    {
        id: 8,
        eventId: 3,
        title: "Водородный стакан",
        free: "true",
        link: "https://www.enhelbeauty.com/product/portativnyy-apparat-enhel-bottle"
    },
    
    
];

$(function () {
    $('#pnlEventCalendar').calendar({months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сенябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],onSelect: function (event) {
      $('#lblEventCalendar').text(event.label);
    }});
});
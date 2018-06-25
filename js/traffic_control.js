var trackOutboundLink = function (url) {
    ga("send", "event", "outbound", "click", url, {
        transport: "beacon",
        hitCallback: function () {
            document.location = url
        }
    })
};
YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
        traffic = new YMaps.Traffic.Control({
            showInfoSwitcher: true
        }, {
            shown: true,
            infoLayerShown: true
        });
    map.addControl(new YMaps.Zoom, new YMaps.ControlPosition(YMaps.ControlPosition.TOP_LEFT, new YMaps.Point(10, 10)));
    map.setCenter(new YMaps.GeoPoint(92.870584, 56.016885), 13);
    map.addControl(traffic, new YMaps.ControlPosition(YMaps.ControlPosition.TOP_RIGHT, new YMaps.Point(10, 10)));
    map.enableScrollZoom();

    var s = new YMaps.Style;
    s.iconStyle = new YMaps.IconStyle;
    s.iconStyle.href = "/images/icon_cam.png";
    s.iconStyle.size = new YMaps.Point(27, 26);
    s.iconStyle.offset = new YMaps.Point(-10, -24);
    var cams = [{
        lng: 92.836436,
        lat: 56.012678,
        href: "http://live.krsn.ru/#c10",
        title: "Копылова - Профсоюзов"
    }, {
        lng: 92.843837,
        lat: 56.016284,
        href: "http://live.krsn.ru/#c11",
        title: "Республики - Железнодорожников"
    }, {
        lng: 92.833333,
        lat: 56.024588,
        href: "http://live.krsn.ru/#c12",
        title: "Свободный - Маерчака (Космос)"
    }, {
        lng: 92.835792,
        lat: 56.025261,
        href: "http://live.krsn.ru/#c13",
        title: "Железнодорожников - Северная"
    }, {
        lng: 92.834462,
        lat: 56.035762,
        href: "http://live.krsn.ru/#c21",
        title: "Кольцо Брянская 2-ая"
    }, {
        lng: 92.871638,
        lat: 56.010608,
        href: "http://live.krsn.ru/#c14",
        title: "Маркса - Вейнбаума"
    }, {
        lng: 92.87138,
        lat: 56.006905,
        href: "http://live.krsn.ru/#c15",
        title: "Дубровинского - Коммунальный мост"
    }, {
        lng: 92.872696,
        lat: 56.006307,
        href: "http://live.krsn.ru/#c16",
        title: "Коммунальный мост"
    }, {
        lng: 92.88319,
        lat: 56.019861,
        href: "http://live.krsn.ru/#c22",
        title: "Игарская"
    }, {
        lng: 92.899404,
        lat: 56.021021,
        href: "http://live.krsn.ru/#c23",
        title: "Белинского"
    }, {
        lng: 92.876616,
        lat: 56.010997,
        href: "http://live.krsn.ru/#c24",
        title: "Сурикова"
    }, {
        lng: 92.856111,
        lat: 56.012698,
        href: "http://live.krsn.ru/#c29",
        title: "Ленина - Дзержинского"
    }, {
        lng: 92.848343,
        lat: 56.012265,
        href: "http://live.krsn.ru/#c34",
        title: "Ленина - Горького"
    }, {
        lng: 92.841691,
        lat: 56.010029,
        href: "http://live.krsn.ru/#c37",
        title: "Робеспьера"
    }, {
        lng: 92.908373,
        lat: 56.026832,
        href: "http://live.krsn.ru/#c18",
        title: "Партизана Железняка (Аэровокзальная)"
    }, {
        lng: 92.919274,
        lat: 56.031278,
        href: "http://live.krsn.ru/#c19",
        title: "Партизана Железняка (Зенит)"
    }, {
        lng: 92.927943,
        lat: 56.065576,
        href: "http://live.krsn.ru/#c27",
        title: "9 Мая - Комсомольский"
    }, {
        lng: 92.913995,
        lat: 56.058549,
        href: "http://live.krsn.ru/#c28",
        title: "9 Мая - Водопьянова"
    }, {
        lng: 92.911506,
        lat: 56.050864,
        href: "http://live.krsn.ru/#c30",
        title: "Авиаторов - Алексеева"
    }, {
        lng: 92.890263,
        lat: 56.031157,
        href: "http://live.krsn.ru/#c31",
        title: "Шахтеров - Березина"
    }, {
        lng: 92.891508,
        lat: 56.034169,
        href: "http://live.krsn.ru/#c33",
        title: "Шахтеров - Взлетная"
    }, {
        lng: 92.931462,
        lat: 56.037309,
        href: "http://live.krsn.ru/#c35",
        title: "Авиаторов - П.Железняка"
    }, {
        lng: 92.935539,
        lat: 56.039615,
        href: "http://live.krsn.ru/#c36",
        title: "П.Железняка - Трактовая"
    }, {
        lng: 92.79428,
        lat: 56.018712,
        href: "http://live.krsn.ru/#c20",
        title: "Высотная - Свободный"
    }, {
        lng: 92.801318,
        lat: 56.014637,
        href: "http://live.krsn.ru/#c17",
        title: "Киренского - Октябрьский"
    }, {
        lng: 92.894211,
        lat: 55.98204,
        href: "http://live.krsn.ru/#c25",
        title: "60 лет Октября"
    }, {
        lng: 92.886959,
        lat: 55.990195,
        href: "http://live.krsn.ru/#c38",
        title: "Матросова"
    }, {
        lng: 92.886701,
        lat: 55.991975,
        href: "http://live.krsn.ru/#c39",
        title: "Предмостная площадь"
    }, {
        lng: 92.925282,
        lat: 55.992961,
        href: "http://live.krsn.ru/#c40",
        title: "Семафорная"
    }, {
        lng: 92.928415,
        lat: 55.989329,
        href: "http://live.krsn.ru/#c26",
        title: "Затонская - 60 лет Октября"
    }, {
        lng: 92.920697,
        lat: 55.999958,
        href: "http://live.krsn.ru/#c32",
        title: "Крас. рабочий (ост. Затон)"
    }, {
        lng: 92.932323,
        lat: 56.002916,
        href: "http://live.krsn.ru/#c45",
        title: 'ТЦ "Красноярье"'
    }, {
        lng: 92.956739,
        lat: 56.015295,
        href: "http://live.krsn.ru/#c43",
        title: "Октябрьский мост"
    }, {
        lng: 92.902878,
        lat: 56.040339,
        href: "http://24dtp.ru/index.php?option=com_wrapper&view=wrapper&Itemid=44",
        title: "Молокова - Батурина"
    }, {
        lng: 92.908821,
        lat: 56.033768,
        href: "http://www.24dtp.ru/index.php/13",
        title: "Взлетная - Весны"
    }, {
        lng: 92.875776,
        lat: 56.015379,
        href: "http://www.24dtp.ru/index.php/-11",
        title: "Марковского - Сурикова"
    }, {
        lng: 92.876013,
        lat: 56.013901,
        href: "http://www.24dtp.ru/index.php/-1",
        title: "Ленина - Сурикова"
    }, {
        lng: 92.87112,
        lat: 56.013516,
        href: "http://www.24dtp.ru/index.php/14",
        title: "Ленина - Вейнбаума"
    }, {
        lng: 92.871399,
        lat: 56.012074,
        href: "http://www.24dtp.ru/index.php/3",
        title: "Мира - Вейнбаума"
    }, {
        lng: 92.876343,
        lat: 56.012374,
        href: "http://www.24dtp.ru/index.php/-9",
        title: "Мира - Сурикова"
    }, {
        lng: 92.876643,
        lat: 56.010787,
        href: "http://www.24dtp.ru/index.php/-8",
        title: "Маркса - Сурикова"
    }, {
        lng: 92.84834,
        lat: 56.01229,
        href: "http://www.24dtp.ru/index.php/-6",
        title: "Ленина-Горького"
    }, {
        lng: 92.846173,
        lat: 56.012191,
        href: "http://www.24dtp.ru/index.php/5",
        title: "Ленина - Декабристов"
    }, {
        lng: 92.84141,
        lat: 56.011939,
        href: "http://www.24dtp.ru/index.php/2011-03-18-10-48-29",
        title: "Ленина-Робеспьера"
    }, {
        lng: 92.841109,
        lat: 56.01284,
        href: "http://www.24dtp.ru/index.php/2011-03-18-10-56-40",
        title: "Копылова-Робеспьера"
    }, {
        lng: 92.841624,
        lat: 56.010472,
        href: "http://www.24dtp.ru/index.php/2011-03-18-11-01-27",
        title: "Мира-Робеспьера"
    }];
    var getfnc = function (href) {
        return function () {
            trackOutboundLink(href);
            var w = window.open(href, "Веб камеры", "width=900,height=490,toolbar=no,location=no,menubar=no")
        }
    };
    for (var i in cams) {
        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(cams[i].lng, cams[i].lat), {
            style: s,
            hasBalloon: false,
            hintOptions: {
                maxWidth: 100,
                showTimeout: 100,
                offset: new YMaps.Point(5, 5)
            }
        });
        placemark.name = cams[i].title;
        placemark.description = cams[i].title;
        YMaps.Events.observe(placemark, placemark.Events.Click, getfnc(cams[i].href));
        map.addOverlay(placemark)
    }

});

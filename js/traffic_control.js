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
    var cams = [ {
        lng: 92.837063,
        lat: 56.010309,
        href: "http://live.krsn.ru/#c11",
        title: "Мира - Профсоюзов (Профсоюзов)"
    }, {
        lng: 92.788401,
        lat: 56.015506,
        href: "http://live.krsn.ru/#c13",
        title: "Свободный - Лесопарковая (Лесопарковая)"
    }, {
        lng: 92.794359,
        lat: 56.018651,
        href: "http://live.krsn.ru/#c21",
        title: "Свободный - Высотная (Свободный со стороны ТК)"
    }, {
        lng: 92.784579,
        lat: 56.024323,
        href: "http://live.krsn.ru/#c14",
        title: "Высотная - Крупской (Высотная от Свободного)"
    }, {
        lng: 92.775282,
        lat: 56.030133,
        href: "http://live.krsn.ru/#c15",
        title: "Тотмина - Гусарова (Гусарова)"
    }, {
        lng: 92.775840,
        lat: 56.030013,
        href: "http://live.krsn.ru/#c16",
        title: "Тотмина - Гусарова (Высотная)"
    }, {
        lng: 92.775604,
        lat: 56.030578,
        href: "http://live.krsn.ru/#c22",
        title: "Тотмина - Гусарова (Тотмина)"
    }, {
        lng: 92.776516,
        lat: 56.030355,
        href: "http://live.krsn.ru/#c23",
        title: "Тотмина - Гусарова (Загиб с высотной)"
    }, {
        lng: 92.801676,
        lat: 56.014276,
        href: "http://live.krsn.ru/#c24",
        title: "Киренского - Годенко (со стороны Копылова)"
    }, {
        lng: 92.800324,
        lat: 56.015027,
        href: "http://live.krsn.ru/#c29",
        title: "Киренского - Годенко (Годенко)"
    }, {
        lng: 92.800856,
        lat: 56.014730,
        href: "http://live.krsn.ru/#c34",
        title: "Киренского - Годенко (Киренского со стороны Свободного)"
    }, {
        lng: 92.788326,
        lat: 56.015419,
        href: "http://live.krsn.ru/#c37",
        title: "Свободный - Лесопарковая (Свободный в сторону СФУ)"
    }, {
        lng: 92.788584,
        lat: 56.015539,
        href: "http://live.krsn.ru/#c18",
        title: "Свободный - Лесопарковая (Свободный в сторону ТК)"
    }, {
        lng: 92.794187,
        lat: 56.018712,
        href: "http://live.krsn.ru/#c19",
        title: "Свободный - Высотная (Высотная)"
    }, {
        lng: 92.794434,
        lat: 56.018550,
        href: "http://live.krsn.ru/#c27",
        title: "Свободный - Высотная (Годенко)"
    }, {
        lng: 92.794172,
        lat: 56.018555,
        href: "http://live.krsn.ru/#c28",
        title: "Свободный - Высотная (Свободный от СФУ)"
    }, {
        lng: 92.784453,
        lat: 56.024316,
        href: "http://live.krsn.ru/#c30",
        title: "Высотная - Крупской (Крупской от БСМП)"
    }, {
        lng: 92.785311,
        lat: 56.023907,
        href: "http://live.krsn.ru/#c31",
        title: "Высотная - Крупской (Крупской от Телевизорного)"
    }, {
        lng: 92.783858,
        lat: 56.024713,
        href: "http://live.krsn.ru/#c33",
        title: "Высотная - Крупской (Высотная от Тотмина)"
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

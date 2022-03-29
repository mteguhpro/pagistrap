/* M Teguh P - mteguhpro.github.io - t.me/ttgguh */

var teSidenav = (function () {
    'use strict';
    var getClass = function (el, cb) {
        var i = 0;
        var l = el.length
        for (i = 0; i < l; i++) {
            cb(el[i]);
        }
    };
    var isSidenavShow = null;
    var eventShow = new Event('show.te.sidenav');
    var eventHide = new Event('hide.te.sidenav');
    var sn = document.getElementsByClassName("te-sidenav");
    var osn = document.getElementsByClassName("te-out-sidenav");
    getClass(sn, function (el) {
        isSidenavShow = (el.className.indexOf('te-active') === -1) ? false : true;
    });
    var toggleSidenav = function () {
        isSidenavShow = !isSidenavShow
        if (isSidenavShow) {
            document.dispatchEvent(eventShow)
        } else {
            document.dispatchEvent(eventHide)
        }
        getClass(sn, function (el) {
            el.classList.toggle("te-active");
        });
        getClass(osn, function (el) {
            el.classList.toggle("te-active");
        });
    }
    var tsn = document.getElementsByClassName("te-toggle-sidenav");
    getClass(tsn, function (el) {
        el.onclick = function () {
            toggleSidenav()
        }
    })
    getClass(sn, function (el) {
        el.onclick = function (e) {
            if (e.target === e.currentTarget) {
                toggleSidenav()
            }
        }
    })
    function isShow() { return isSidenavShow }

    getClass(document.getElementsByClassName('te-with-caret'), function (el) {
        el.onclick = function (e) {
            el.classList.toggle('caret-open')
        }
    })

    return {
        isShow: isShow,
        toggle: toggleSidenav
    }
})()
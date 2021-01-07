"use strict";
(function (window, $) {
    $(function () {
        //url params processor
        $('body').on('click', 'a', function (e) {
            const loc = new URL(window.location.href);
            if (this.href) {
                const url = new URL(this.href)
                loc.searchParams.forEach(function (v, k) {
                    url.searchParams.set(k,v)
                })
                this.href = url.href
            }
        })
    })
})(window, jQuery);
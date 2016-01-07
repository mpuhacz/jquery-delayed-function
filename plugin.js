(function($) {

    $.fn.delayedFunc = function(options) {

        var settings = $.extend({
            selector: null,
            func: 'fadeIn',
            settings: {},
            delay: 300,
        }, options);

        if (typeof($.fn[settings.func]) !== 'function') {
            throw '"' + settings.func + '" is not valid jQuery function.';
        }

        var o = !settings.selector ? this.children() : this.find(settings.selector);

        var delay = 0;
        return o.each(function() {
            $(this).delay(delay)[settings.func](settings.settings);
            delay += settings.delay;
        });

    };

}(jQuery));
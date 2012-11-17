(function($) {
    $.fn.colorspan = function(options, callback) {
        var settings = {
            speed: 800,
            shadowX : '0',
            shadowY : '0',
            shadowBlur : '1px',
            shadowColor : '#000'
        };
        if (options) {
            $.extend(settings, options);
        }
        var base = $(this);

        function createSpanTags() {
            base.each(function() {
                var node = base.nodename,text = $.trim($(this).text());
                $(this).html($.map(text, function(v, i) {
                    return "<span class='" + 'colorspan' + "'>" + v + "<\/span>";
                }).join(''));
            });
        }

        

        function createColors() {
            var colorSpanLength = $('span.colorspan').length;
            var array = new Array(colorSpanLength);
            var r = function() {
                return Math.floor(Math.random() * 256);
            };
            for (var i = 0; i < colorSpanLength; i++) {
                array[i] = 'rgb('+r()+','+r()+','+r()+')';
            }
            base.children().each(function() {
                var getRandom = function() {
                    return Math.floor(Math.random() * colorSpanLength);
                };
                $(this).css({
                    'color': array[getRandom()],
                    'text-shadow': settings.shadowX + ' ' +
                                   settings.shadowY + ' ' +
                                   settings.shadowBlur + ' ' +
                                   settings.shadowColor
                });
            });
        }

        createSpanTags();
        
        setInterval(createColors, settings.speed);

        if (!callback) {
            return false;
        } else {
            callback.call(this);
        }
    };
})(jQuery);
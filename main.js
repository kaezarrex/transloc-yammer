var JQUERY_URL = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
    $;

addJQuery(letsJQuery);

// Add jQuery
function addJQuery(callback) {
    var script = document.createElement('script');

    script.setAttribute('src', JQUERY_URL);

    script.addEventListener('load', function() {
        var script = document.createElement('script');
        script.textContent = '(' + callback.toString() + ')();';
        document.body.appendChild(script);
    }, false);

    document.body.appendChild(script);
}

// All your JQuery code must be inside this function
function letsJQuery() {

    $('#network-type').remove();

    $('#network-logo')
        .html('<img src="http://transloc.com/wp-content/themes/transloc/images/logo.png">')
        .css({
            'border': 'none',
            'background-image': 'none',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            '-moz-box-shadow': 'none'
        });

    $('head').append('              \
        <style type="text/css">     \
            .yj-avatar-thumb {      \
                border-radius: 3px; \
            }                       \
        </style>                    \
    ');
}


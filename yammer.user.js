// ==UserScript==
// @name TransLoc Yammer
// @namespace https://www.yammer.com
// @include https://www.yammer.com/*
// @description A Yammer beautifier for TransLoc.
// ==/UserScript==

var $;

addJQuery(letsJQuery);

// Add jQuery
function addJQuery(callback) {
    var script = document.createElement("script");

    script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");

    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);

    document.body.appendChild(script);
}

// All your JQuery code must be inside this function
function letsJQuery() {

    $('#network-type').remove();

    $('#network-logo')
        .html('<img src="http://transloc.com/templates/transloc/images/transloc_logo.png">')
        .css({
            'border': 'none',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            '-moz-box-shadow': 'none'
        });
}

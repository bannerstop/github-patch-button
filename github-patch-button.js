// ==UserScript==
// @name         GitHub Patch-Button
// @namespace    https://www.bannerstop.com/
// @version      0.1
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @match        https://github.com/*/commit/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        var permanentLinkElem = $('a.js-permalink-shortcut');
        if(permanentLinkElem.length > 0) {
            permanentLinkElem = permanentLinkElem.first();

            var patchLink = permanentLinkElem.attr("href") + ".patch";

            var commitTitleElement = $('.commit-title');
            if(commitTitleElement.length > 0) {
                commitTitleElement = commitTitleElement.first();

                var pathLinkElement = $('<a>')
                    .addClass('btn')
                    .addClass('btn-outline')
                    .addClass('float-right')
                    .attr("target", "_blank")
                    .attr("href", patchLink)
                    .text("View patch")
                    .css("margin-right", "8px")
                    .insertBefore(commitTitleElement);
            }
        }
    });
})();
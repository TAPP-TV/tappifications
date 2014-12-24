/**
 * tappifications
 * @version v0.1.4
 * @link https://github.com/TAPP-TV/tappifications/
 * @license MIT
 */
! function($) {
    "use strict";
    $.tappification = function(options) {
        function determineIcon() {
            return "info" === type ? "fa-comments" : "warning" === type ? "fa-exclamation-circle" : "danger" === type ? "fa-exclamation-circle" : "fa-meh-o"
        }
        var $tappification = $(".tappification"),
            defaultOptions = {
                type: "",
                message: "",
                callToActionText: "",
                callToActionUrl: "",
                position: "bottom",
                velocityOpen: 600,
                velocityClose: 200
            },
            finalOptions = $.extend({}, defaultOptions, options),
            type = finalOptions.type,
            message = finalOptions.message,
            callToActionText = finalOptions.callToActionText,
            callToActionUrl = finalOptions.callToActionUrl,
            velocityOpen = finalOptions.velocityOpen,
            velocityClose = finalOptions.velocityClose,
            position = finalOptions.position;
        var $template = $(['<div class="tappification tappification-dismissible" data-position="" role="alert">', '    <div class="container">', '        <div class="tappification-icon">', '            <i class="fa"></i>', "        </div>", '        <div class="tappification-message"></div>', '        <div class="tappification-link">', '            <a class="primary"></a>', "        </div>", '        <button type="button" class="tappification-close" data-dismiss="alert">', '            <span aria-hidden="true"><i class="fa fa-times-circle-o"></i><span>', "        </button>", "    </div>", "</div>"].join("\n"));
        $template.addClass("tappification-" + type), $template.find(".tappification-icon i").addClass(determineIcon()), $template.find(".tappification-message").text(message), $template.attr("data-position", position), callToActionUrl && ($template.find(".tappification-link a").text(callToActionText), $template.find(".tappification-link a").attr("href", callToActionUrl)), $tappification.remove(), $("body").prepend($template);
        var tappificationHeight = $template.outerHeight();
        "bottom" === position && ($template.css({
            bottom: "-" + tappificationHeight
        }), $template.animate({
            bottom: "0px"
        }, velocityOpen)), $(".tappification-close").click(function() {
            "bottom" === position && $template.animate({
                bottom: "-" + tappificationHeight
            }, velocityClose)
        })
    }
}(jQuery);

/**
 * Created by student01 on 13.07.2017.
 */
jQuery(document).ready(function () {
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'config.json', function() {
    console.log('callback - particles-js config loaded');
});
});
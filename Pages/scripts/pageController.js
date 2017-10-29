$( document ).ready(function() {
    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $("#navigation a").each(function() {
            // checks if its the same on the address bar
            if (url.indexOf(this.href) != -1) {
                $(this).closest("li").addClass("current");
            }
        });
    });
});
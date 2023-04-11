(function () {
    window.app = window.app || {};
    app.pages = app.pages || {};

    app.pages.ratesSearch = function (options) {
        var lotClassDropDown = $("#LotClass"),
            checkAvailabilityCheckbox = $("#CheckAvailability"),
            yearDropDown = $("#Year");

        if (!lotClassDropDown || !checkAvailabilityCheckbox) {
            return;
        }

        // Lot Class
        lotClassDropDown.on("change",
            function () {
                var value = $(this).val();
                window.localStorage.setItem("search.lotClass", value);
            });

        var lotClass = (options && options.lotClass) || window.localStorage.getItem("search.lotClass");
        if (lotClass && lotClassDropDown.find("option[value='" + lotClass + "']").length) {
            lotClassDropDown.val(lotClass);
        }

        // Check Availability
        checkAvailabilityCheckbox.on("change",
            function () {
                var value = $(this).is(':checked');
                window.localStorage.setItem("search.checkAvailability", value);
            });

        var checkAvailability = window.localStorage.getItem("search.checkAvailability");
        if (checkAvailability) {
            checkAvailabilityCheckbox.prop("checked", checkAvailability === "true");
        }

        // Year
        yearDropDown.on("change",
            function() {
                var y = yearDropDown.val();
                window.location.href = options.pageUrl.replace("yyy", y);
            });
    };
})();
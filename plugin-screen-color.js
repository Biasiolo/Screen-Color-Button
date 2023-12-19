(function ($) {
    $.fn.scrollColorChange = function (options) {
        // Default settings
        var settings = $.extend({
            colors: [
                { name: "blue", color: "rgb(43, 174, 226)" },
                { name: "green", color: "rgb(43, 226, 113)" },
                { name: "yellow", color: "rgb(177, 226, 43)" },
                { name: "purple", color: "rgb(159, 43, 226)" },
                { name: "red", color: "rgb(214, 40, 40)" },
                { name: "black", color: "#080808" },
            ],
            initialColor: "blue", // Add a new option for the initial color

            textColors: [ // Add an array of contrasting text colors
                { name: "blueText", color: "#5e1e03" }, // Contrast for blue
                { name: "greenText", color: "#A60D2C" }, // Contrast for green
                { name: "yellowText", color: "#080808" }, // Contrast for yellow
                { name: "purpleText", color: "#020827" }, // Contrast for purple
                { name: "redText", color: "#D9FEBE" }, // Contrast for red
                { name: "blackText", color: "#fdfc69" }, // Contrast for black
            ]
        }, options);

        // Find the index of the initial color
        var initialColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor);

        // Start with the initial color or, if not found, with the first color
        var currentColorIndex = (initialColorIndex !== -1) ? initialColorIndex : 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            var selectedTextColor = settings.textColors[currentColorIndex].color;
            $("body").css({
                "background-color": selectedColor,
                "color": selectedTextColor // Set the contrasting text color
            });

            var textColor = getContrastYIQ(selectedColor);
            $("body").css("color", textColor); // Set text color to ensure contrast

            // Add the 'rotate' class for display
            $(".scroll-container").addClass("rotate");

            // Remove the 'rotate' class after 1 second
            setTimeout(function () {
                $(".scroll-container").removeClass("rotate");
            }, 1000);
        }

        return this.each(function () {
            var $this = $(this);

            $this.css({
                transition: "background-color 0.3s, transform 0.3s",
            });

            $this.on("click", function () {
                changeColor();
            });

            $(document).keydown(function (e) {
                if (e.which === 40) {
                    changeColor();
                }
            });

            // Start with the initial color
            updateColor();
        });
    };
})(jQuery);

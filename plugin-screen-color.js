(function ($) {
    $.fn.screenColorChange = function (options) {
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
            initialColor: "blue", // Adicione uma nova opção para a cor inicial

            textColors: [ // Adicione um array de cores de texto contrastantes
                { name: "blueText", color: "#5e1e03" }, // Contraste para azul
                { name: "greenText", color: "#A60D2C" }, // Contraste para verde
                { name: "yellowText", color: "#080808" }, // Contraste para amarelo
                { name: "purpleText", color: "#020827" }, // Contraste para roxo
                { name: "redText", color: "#D9FEBE" }, // Contraste para vermelho
                { name: "blackText", color: "#fdfc69" }, // Contraste para preto
            ]
        }, options);

        // Encontre o índice da cor inicial
        var initialColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor);

        // Comece com a cor inicial ou, se não encontrada, com a primeira cor
        var currentColorIndex = (initialColorIndex !== -1) ? initialColorIndex : 0;

        // Identificador para o intervalo de transição automática
        var autoColorChangeInterval;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            var selectedTextColor = settings.textColors[currentColorIndex].color;
            $("body").css({
                "background-color": selectedColor,
                "color": selectedTextColor // Defina a cor de texto contrastante
            });
        }

        // Método para iniciar a transição automática
        function startAutoColorChange() {
            autoColorChangeInterval = setInterval(function () {
                changeColor();
            }, 2000);
            console.log("Iniciando a mudança automática de cor");
        }

        // Método para parar a transição automática
        function stopAutoColorChange() {
            clearInterval(autoColorChangeInterval);
            console.log("Parando a mudança automática de cor");
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

            // Comece com a cor inicial
            updateColor();

            // Adicione o botão de switch para controlar a transição automática
            var $autoColorChangeSwitch = $('<button id="autoColorChangeSwitch">auto change: OFF</button>').appendTo("body");
            

            $autoColorChangeSwitch.on("click", function () {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active").text("Auto Change: OFF");
                    stopAutoColorChange();
                } else {
                    $(this).addClass("active").text("Auto Change: ON");
                    startAutoColorChange();
                }
            });

            // Adicione a seguinte linha para parar a transição automática quando a página for fechada
            $(window).on("beforeunload", function () {
                stopAutoColorChange();
            });
        });
    };
})(jQuery);

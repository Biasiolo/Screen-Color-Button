(function ($) {
    // Função para determinar o contraste de cor
    function getContrastYIQ(hexcolor) {
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(5, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    // Plugin principal
    $.fn.scrollColorChange = function (options) {
        var settings = $.extend({
            colors: [
                { name: "blue", color: "rgb(43, 174, 226)" },
                { name: "green", color: "rgb(43, 226, 113)" },
                { name: "yellow", color: "rgb(177, 226, 43)" },
                { name: "purple", color: "rgb(159, 43, 226)" },
                { name: "red", color: "rgb(214, 40, 40)" },
                { name: "black", color: "#080808" },
            ],
            gradients: [
                { name: "blueToGreen", gradient: "linear-gradient(to right, rgb(43, 174, 226), rgb(43, 226, 113))" },
                { name: "redToPurple", gradient: "linear-gradient(to right, rgb(214, 40, 40), rgb(159, 43, 226))" },
            ],
            initialColor: "blue",
            textColors: [
                { name: "blueText", color: "#66250B" },
                { name: "greenText", color: "#A60D2C" },
                { name: "yellowText", color: "#080808" },
                { name: "purpleText", color: "#020827" },
                { name: "redText", color: "#D9FEBE" },
                { name: "blackText", color: "#fff" },
            ]
        }, options);

        // Encontrar o índice da cor inicial
        var initialColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor);

        // Iniciar com a cor inicial ou, se não for encontrada, com a primeira cor
        var currentColorIndex = (initialColorIndex !== -1) ? initialColorIndex : 0;

        // Função para mudar a cor
        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        // Função para atualizar a cor e aplicar a cor de texto contrastante
        function updateColor() {
            var selectedColor, selectedTextColor;

            if (settings.colors[currentColorIndex].gradient) {
                // Se estiver usando gradiente, aplique-o diretamente
                selectedColor = settings.colors[currentColorIndex].gradient;
                // Defina a cor do texto como branca por padrão
                selectedTextColor = "#fff";
            } else {
                // Se não estiver usando gradiente, use a cor sólida
                selectedColor = settings.colors[currentColorIndex].color;
                selectedTextColor = settings.textColors[currentColorIndex].color;
            }

            $("body").css({
                "background": selectedColor,
                "color": selectedTextColor
            });

            if (!settings.colors[currentColorIndex].gradient) {
                // Apenas se não estiver usando gradiente, determine a cor do texto contrastante
                var textColor = getContrastYIQ(selectedColor);
                $("body").css("color", textColor);
            }

            // Adicionar a classe 'rotate' ao contêiner
            $(".scroll-container").addClass("rotate");

            // Remover a classe 'rotate' após a transição
            $(".scroll-container").one("transitionend", function () {
                $(this).removeClass("rotate");
            });
        }

        // Iterar sobre cada elemento correspondente
        return this.each(function () {
            var $this = $(this);

            // Aplicar estilos iniciais ao elemento
            $this.css({
                fontSize: "12px",
                margin: "3px",
                cursor: "pointer",
                backgroundColor: "rgb(69, 55, 55);",
                color: "white",
                border: "none",
                borderRadius: "5px",
                transition: "background 0.3s, transform 0.3s",
            });

            // Lidar com o evento de clique para mudar a cor
            $this.on("click", function () {
                changeColor();
            });

            // Lidar com a tecla de seta para baixo para mudar a cor
            $(document).keydown(function (e) {
                if (e.which === 40) {
                    changeColor();
                }
            });

            // Iniciar com a cor inicial
            updateColor();
        });
    };
})(jQuery);

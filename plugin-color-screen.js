$(document).ready(function () {
    var cores = [
        { nome: "azul", cor: "rgb(43, 174, 226)" },
        { nome: "verde", cor: "rgb(43, 226, 113)" },
        { nome: "amarelo", cor: "rgb(177, 226, 43)" },
        { nome: "purple", cor: "rgb(159, 43, 226)" },
        { nome: "preto", cor: "rgb(5, 5, 5)" },
    ];

    var corAtual = 0;

    function scrollDown() {
        corAtual = (corAtual + 1) % cores.length;
        atualizarCor();
    }

    function atualizarCor() {
        var corSelecionada = cores[corAtual].cor;
        $("body").css("background-color", corSelecionada);
        $("#scrollDownButton").css("background-color", corSelecionada);

        // Adiciona a classe 'rotacionar' ao display
        $(".scroll-container").addClass("rotacionar");

        // Remove a classe 'rotacionar' após 1 segundo
        setTimeout(function () {
            $(".scroll-container").removeClass("rotacionar");
        }, 1000);
    }

    $("#scrollDownButton").on("click", function () {
        scrollDown();
    });

    $(".cor-fundo").on("click", function () {
        corAtual = $(this).index();
        atualizarCor();
    });

    $(document).keydown(function (e) {
        if (e.which === 40) {
            scrollDown();
        }
    });
});

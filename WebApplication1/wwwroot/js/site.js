$(window).scroll(function () {
  if ($(this).scrollTop() >= 40) {
    $('#meuMenu').addClass('fixar');
  } else {
    $('#meuMenu').removeClass('fixar');
  }
});

$(document).ready(function () {

  if ($("#form_registro").length > 0)
    $("#form_registro").validationEngine();

  $('.carousel').carousel();
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
  $('.fa-angle-right').click(function () {
    $('.carousel').carousel('next');
    //instance.next();
  });
  $('.fa-angle-left').click(function () {
    $('.carousel').carousel('prev');
    //instance.prev();
  });

  //Borda de Seleção
  $(".ModelosL").click(function () {
    var id = $(this).attr("id").replace("Modelo_", "");
    $(".ModelosL").removeClass('borda');
    $("#Modelo_" + id).addClass("borda");
    $("#ModeloID").val(id);
  })

  /*Troca Imagem*/
  $(".medidas").focus(function () {
    var id = $(this).attr("id").replace("Medida_", "");
    $(".oculos").addClass("hide");
    $("#Ocl_" + id).removeClass("hide");
  })

  $(".TipoLente").click(function () {
    var lente = $(this).val();
    if (lente == "P") {
      $(".FabricadaPronta").addClass("hide");
    }
    else
      $(".FabricadaPronta").removeClass("hide");
  });
 

  $('select[name="TipoLente"]').on("change", function () {
    var tipoLente = $("#TipoLente").val();
    if (tipoLente > 1) {
      $(".tabelaLente").removeClass("hide");
      $("#PertoLonge").addClass("hide");
      $("#Adicao").removeClass("hide");

    }
    else if (tipoLente == 1) {
      $("#PertoLonge").removeClass("hide");
      if ($('input[name="LongePerto"]:checked').val() == "L") {
        $("#Longe").removeClass("hide");
        $("#Perto").addClass("hide");
        $("#Adicao").addClass("hide");
      }
      else {
        $("#Longe").addClass("hide");
        $("#Perto").removeClass("hide");
        $("#Adicao").addClass("hide");

      }
    }
  })

  $('select[name="ServicoID"]').on("change", function () {
    var tipoServico = $("#ServicoID").val();

    $.ajax({
      url: "/AreaCliente/Pedido/BuscaServico",
      type: "POST",
      data: {
        ServicoID: tipoServico
      },
      success: function (ret) {
        if (ret != '0,00') {
          $("#ValorServico").html('<div class="col s12 m12 l12 bordinha"><p class="negrito">Valor Serviço:<span class="pagInf right">R$ ' + ret + '</span></p></div>');
        }
      }
    })
  })

  $('input[name="LongePerto"]').click(function () {
    var pertoLonge = $('input[name="LongePerto"]:checked').val();
    if (pertoLonge == 'L') {
      $("#Longe").removeClass("hide");
      $("#Perto").addClass("hide");
    } else {
      $("#Longe").addClass("hide");
      $("#Perto").removeClass("hide");
    }
  })

  /**Mascara de inputs**/
  if ($('.MaskNCM').length > 0)
    $(".MaskNCM").mask("9999.99.99");

  if ($('.datahora').length > 0)
    $(".datahora").mask("99/99/9999 99:99:99");

  if ($('.data').length > 0)
    $(".data").mask("99/99/9999");

  if ($('.Maskcpf').length > 0)
    $(".Maskcpf").mask("999.999.999-99");

  if ($('.Maskrg').length > 0)
    $(".Maskrg").mask("99.999.999-9");

  if ($('.Maskcnpj').length > 0)
    $(".Maskcnpj").mask("99.999.999/9999-99");

  if ($('.Mascep').length > 0)
    $('.Mascep').mask("99999-999");

  if ($('.Maspeso').length > 0)
    $('.Maspeso').mask("00,00");

  if ($('.Maskporcento').length > 0)
    $('.Maskporcento').mask("000%");

  if ($(".money").length)
    $(".money").maskMoney({ symbol: 'R$ ', showSymbol: true, thousands: '.', decimal: ',', symbolStay: true });

  if ($(".phone").length) {
    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
      spOptions = {
        onKeyPress: function (val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
      };

    $('.phone').mask(SPMaskBehavior, spOptions);

  }
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    i18n: {
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      weekdaysAbbrev: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Pronto',
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      selectMonths: true,
      selectYears: 15,
      cancel: 'Cancelar',
      clear: 'Limpar',
    },
    autoClose: true,
    disableWeekends: false,
  });
  /**Fim mascara de inputs**/

  $("#ResultadosBusca").click(function (i) {
    var id = i.target.id;
    $.ajax({
      url: "/AreaCliente/Pedido/BuscaProdutoID",
      type: "POST",
      data: {
        ProdutoID: id
      },
      success: function (ret) {
        console.log(ret);
        if (ret != false) {
          console.log(ret);
          var retorno = ret.split("#");
          $("#ProdutoID").val(retorno[1]);
          $("#BuscaProduto").val(retorno[2]);
          $("#ValorProduto").html("R$ " + retorno[3]);
          $("#Fabricante").val(retorno[4]);
          $("#Material").val(retorno[5]);
          if (retorno[6] > 0) {
            $("#DescontoCliente").html(
              '<div class="col s12 m12 l12 bordinha"><p class="negrito">Desconto Cliente:<span id="DescontoCliente" class="pagInf right">' + retorno[6] + '%</span></p></div>'
            );
          }
          $(".resposta_busca").addClass("active");
        }
        $("#ResultadosBusca").html("");
        $("#ResultadosBusca").removeClass("select-personalizado");
        ValorTotal();
      }
    })
  });


  $('input[name="DescricaoOlho"]').click(function () {
    var selOlho = $('input[name="DescricaoOlho"]:checked').val();
    var tipoLente = $("#TipoLente").val();

    if (tipoLente == 1)
      $("#Adicao").addClass("hide");
    else
      $("#Adicao").removeClass("hide");

    if (tipoLente > 1)
      $("#PertoLonge").addClass("hide");
    else
      $("#PertoLonge").removeClass("hide");

    switch (parseInt(selOlho)) {
      case 0:
        $("#tabelaOlho").addClass("hide");
        $("#Adicao").addClass("hide");
        $("#selTP").addClass("hide");
        $("#PertoLonge").addClass("hide");
        break;
      case 1:
        $("#tabelaOlho").removeClass("hide");
        $("#TabOlhoDireitoL").removeClass("hide");
        $("#TabOlhoEsquerdoL").removeClass("hide");
        $("#TabOlhoDireitoP").removeClass("hide");
        $("#TabOlhoEsquerdoP").removeClass("hide");
        $("#selTP").removeClass("hide");
        break;
      case 2:
        $("#tabelaOlho").removeClass("hide");
        $("#TabOlhoDireitoL").removeClass("hide");
        $("#TabOlhoEsquerdoL").addClass("hide");
        $("#TabOlhoDireitoP").removeClass("hide");
        $("#TabOlhoEsquerdoP").addClass("hide");
        $("#selTP").removeClass("hide");
        break;
      case 3:
        $("#tabelaOlho").removeClass("hide");
        $("#TabOlhoDireitoL").addClass("hide");
        $("#TabOlhoEsquerdoL").removeClass("hide");
        $("#TabOlhoDireitoP").addClass("hide");
        $("#TabOlhoEsquerdoP").removeClass("hide");
        $("#selTP").removeClass("hide");
        break;
    }
  })

  $("#SelecionarPedidos").click(function () {
    if ($("#SelecionarPedidos").hasClass("SelecionarPedidos")) {
      for (i = 0; i < document.FormPDF.elements.length; i++) {
        if (document.FormPDF.elements[i].type == "checkbox")
          document.FormPDF.elements[i].checked = 1;

        $("#SelecionarPedidos").removeClass("SelecionarPedidos");
        $("#SelecionarPedidos").addClass("TirarSelecaoTudo");
      }
    } else {
      for (i = 0; i < document.FormPDF.elements.length; i++) {
        if (document.FormPDF.elements[i].type == "checkbox")
          document.FormPDF.elements[i].checked = 0;

        $("#SelecionarPedidos").removeClass("TirarSelecaoTudo");
        $("#SelecionarPedidos").addClass("SelecionarPedidos");
      }
    }
  });

}) /*Fim Document Ready*/

function ValorTotal() {
  var produtoID = $("#ProdutoID").val();
  var ServicoID = $("ServicoID").val();
}

function CompletaPerto() {

  var LCilOd = parseFloat($("#LCilOd").val());
  var LEixoOd = parseFloat($("#LEixoOd").val());
  var LCilOe = parseFloat($("#LCilOe").val());
  var LEixoOe = parseFloat($("#LEixoOe").val());

  $("#PCilOd").val(LCilOd);
  $("#PEixoOd").val(LEixoOd);
  $("#PCilOe").val(LCilOe);
  $("#PEixoOe").val(LEixoOe);
}

function BuscarProduto(NomeProduto) {
  $.ajax({
    type: "POST",
    url: "/AreaCliente/Pedido/BuscarProduto",
    data: {
      NomeProduto: NomeProduto
    },
    success: function (ret) {
      if (ret != "") {
        $("#ResultadosBusca").html(ret);
        $("#ResultadosBusca").addClass("select-personalizado");
      }
      else {
        $("#ResultadosBusca").html(ret);
        $("#ResultadosBusca").removeClass("select-personalizado");
      }
    }
  })
}

function PreencheAdicaoOD() {
  var Esf_Longe_OD = $("#OlhoDireito").val().replace("+", "").replace(",", ".");
  var Esf_Perto_OD = $("#P_Esf_D_1").val().replace("+", "").replace(",", ".");

  var adicao = (Esf_Longe_OD.indexOf(".") != -1 ? Esf_Longe_OD.split(".")[1].length : 0);
  var olho = (Esf_Perto_OD.indexOf(".") != -1 ? Esf_Perto_OD.split(".")[1].length : 0);

  if (Esf_Longe_OD == "" || Esf_Perto_OD == "")
    return false;

  if (adicao < olho) adicao = olho;

  var sub = parseFloat(Esf_Perto_OD) - parseFloat(Esf_Longe_OD);
  /*sub.val.replace("-", "");*/
  $("#AdicaoEsquerdo label").addClass("active");
  var resultado = (sub > 0 ? "+" + sub.toFixed(adicao).toString() : sub.toFixed(adicao).toString()).replace(".", ",");
  $("#L_Esf_D_1").val(resultado);
}

function PreencheAdicaoOE() {
  var Esf_Longe_OE = $("#OlhoEsquerdo").val().replace("+", "").replace(",", ".");
  var Esf_Perto_OE = $("#P_Esf_E_2").val().replace("+", "").replace(",", ".");

  var adicao = (Esf_Longe_OE.indexOf(".") != -1 ? Esf_Longe_OE.split(".")[1].length : 0);
  var olho = (Esf_Perto_OE.indexOf(".") != -1 ? Esf_Perto_OE.split(".")[1].length : 0);
  
  if (Esf_Longe_OE == "" || Esf_Perto_OE == "")
    return false;

  if (adicao < olho) adicao = olho;
   
  var sub = parseFloat(Esf_Perto_OE) - parseFloat(Esf_Longe_OE);
  var resultado = (sub > 0 ? "+" + sub.toFixed(adicao).toString() : sub.toFixed(adicao).toString()).replace(".", ",");

  $("#Adicao_OE label").addClass("active");
  $("#L_Esf_E_2").val(resultado);
}

function AdicaoDireito() {

  var OlhoDireito = $("#OlhoDireito").val();

  if (OlhoDireito[0].toLocaleString() != "+") $("#OlhoDireito").val("+" + OlhoDireito);

  var adicao = (OlhoDireito.indexOf(",") != -1 ? OlhoDireito.split(",")[1].length : 0);

  var LEsfOd = $("#L_Esf_D_1").val().replace("+", "").replace(",", ".");
  var olho = (LEsfOd.indexOf(".") != -1 ? LEsfOd.split(".")[1].length : 0);

  if (OlhoDireito == "" || LEsfOd == "")
    return false;

  if (adicao < olho) adicao = olho;

  var soma = parseFloat(LEsfOd) + parseFloat(OlhoDireito.replace("+", "").replace(",", "."));
  var resultado = (soma > 0 ? "+" + soma.toFixed(adicao).toString() : soma.toFixed(adicao).toString()).replace(".", ",");
  $("#P_Esf_D_1").val(resultado);
}

function AdicaoEsquerdo() {

  var OlhoEsquerdo = $("#OlhoEsquerdo").val();

  if (OlhoEsquerdo[0].toLocaleString() != "+") $("#OlhoEsquerdo").val("+" + OlhoEsquerdo);

  var adicao = (OlhoEsquerdo.indexOf(",") != -1 ? OlhoEsquerdo.split(",")[1].length : 0);

  var LEsfOe = $("#L_Esf_E_2").val().replace("+", "").replace(",", ".");
  var olho = (LEsfOe.indexOf(".") != -1 ? LEsfOe.split(".")[1].length : 0);

  if (OlhoEsquerdo == "" || LEsfOe == "")
    return false;

  if (adicao < olho) adicao = olho;

  var soma = parseFloat(LEsfOe) + parseFloat(OlhoEsquerdo.replace("+", "").replace(",", "."));
  var resultado = (soma > 0 ? "+" + soma.toFixed(adicao).toString() : soma.toFixed(adicao).toString()).replace(".", ",");
  $("#P_Esf_E_2").val(resultado);
}
    
function AdicaoCil() {
  var LCilOd = $("#L_Cil_D_1").val();

  $("#P_Cil_D_1").val(LCilOd);
}

function CompletaPerto() {

  var LCilOd = $("#L_Cil_D_1").val();
  var LEixoOd = $("#L_Eixo_D_1").val();
  var LCilOe = $("#L_Cil_E_2").val();
  var LEixoOe = $("#L_Eixo_D_2").val();

  $("#P_Cil_D_1").val(LCilOd);
  $("#P_Eixo_D_1").val(LEixoOd);
  $("#P_Cil_E_2").val(LCilOe);
  $("#P_Eixo_E_2").val(LEixoOe);
}

function AutoCompletar(id) {
  let medida = id;
  let texto = "";

  switch (medida) {
    case 1:
      texto = "HORIZONTAL";
      break;
    case 2:
      texto = "VERTICAL";
      break;
    case 3:
      texto = "DIAGONAL MAIOR";
      break;
    case 4:
      texto = "PONTE";
      break;
  }
  $(".completar").html(` ${texto}`)
}
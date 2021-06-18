$(window).scroll(function () {
  if ($(this).scrollTop() >= 1200) {
    $('#BtnAuxiliar').removeClass('hidden');
  } else {
    $('#BtnAuxiliar').addClass('hidden');
  }
});

var site = window.location.origin;
$(document).ready(function () {

  if ($("#form_registro").length > 0)
    $("#form_registro").validationEngine();

  // mascara de inteiros
  $('.int').keyup(function () {
    var texto = $(this).val();
    var ret = "";
    for (i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) > 47 && texto.charCodeAt(i) < 58)
        ret += texto[i];
    }
    $(this).val(ret);
  }).blur(function () {
    var texto = $(this).val();
    var ret = "";
    for (i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) > 47 && texto.charCodeAt(i) < 58)
        ret += texto[i];
    }
    $(this).val(ret);
  });

  /*login sistema*/
  $('input[type="text"]').blur(function () {
    if ($(this).val() != "") {
      $(".icon-user").addClass('validado');
    } else {
      $(".icon-user").removeClass('validado');
    }
  })
  $('input[type="text"]').focus(function () {
    if ($(this).hasClass('valid')) {
      $(this).removeClass('valid');
      $(".icon-user").removeClass('validado');
    }
  })
  $('input[type="password"]').blur(function () {
    if ($(this).val() != "") {
      $(".icon-senha").addClass('validado');
    } else {
      $(".icon-senha").removeClass('validado');
    }
  })
  $('input[type="password"]').focus(function () {
    if ($(this).hasClass('valid')) {
      $(this).removeClass('valid');
      $(".icon-senha").removeClass('validado');
    }
  })
  /**Fim login sistema**/
  /**Mascara de inputs**/
  if ($('.MaskNCM').length > 0)
    $(".MaskNCM").mask("9999.99.99");

  if ($('.datahora').length > 0)
    $(".datahora").mask("99/99/9999 99:99:99");

  if ($('.data').length > 0)
    $(".data").mask("99/99/9999");

  if ($('.hora').length > 0)
    $(".hora").mask("99:99");

  if ($('.Maskcpf').length > 0)
    $(".Maskcpf").mask("999.999.999-99");

  if ($('.Maskrg').length > 0)
    $(".Maskrg").mask("99.999.999-9");

  if ($('.Maskcnpj').length > 0)
    $(".Maskcnpj").mask("99.999.999/9999-99");

  if ($('.Mascep').length > 0)
    $('.Mascep').mask("99999-999");

  if ($('.MaskIE').length > 0)
    $(".MaskIE").mask("999.999.999.999");

  if ($('.Maspeso').length > 0)
    $('.Maspeso').mask("00,00");

  if ($('.Maskporcento').length > 0)
    $('.Maskporcento').mask("000%");

  if ($(".money").length)
    $(".money").maskMoney({ symbol: 'R$ ', showSymbol: true, thousands: '.', decimal: ',', symbolStay: true });

  if ($(".Markup").length)
    $(".Markup").maskMoney({ thousands: '.', decimal: ',' });

  if ($(".inscricao").length)
    $(".inscricao").mask("999.999.999.999")

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

  $(".classificacao").click(function () {
    var valor = $(this).attr("id").replace("Stars_", "");
    $("#ClassificacaoCliente").val(valor);
    $(".classificacao").removeClass("orange-text");
    for (var i = 1; i <= valor; i++) {
      $("#Stars_" + i).addClass("orange-text");
    }
  })

  if ($("#NovosPedidos").length > 0) {
    setInterval(function () {
      $.ajax({
        url: site + "/Sistema/Home/NovosPedidos",
        type: "POST",
        success: function (retorno) {
          var dados = retorno.split("#");
          $("#QuantidadePedidos").html(dados[1]);
          $("#PorcentagemPedidos").html(dados[2]);
        }
      });
    }, 5000, this);
  }

  if ($("#NovosProdutos").length > 0) {
    setInterval(function () {
      $.ajax({
        url: site + "/Sistema/Home/NovosProdutos",
        type: "POST",
        success: function (retorno) {
          var dados = retorno.split("#");
          $("#QuantidadeProdutos").html(dados[1]);
          $("#PorcentagemProdutos").html(dados[2]);
        }
      });
    }, 5000, this)
  }

  if ($("#NovosClientes").length > 0) {
    setInterval(function () {
      $.ajax({
        url: site + "/Sistema/Home/NovosClientes",
        type: "POST",
        success: function (retorno) {
          var dados = retorno.split("#");
          $("#QuantidadeClientes").html(dados[1]);
          $("#PorcentagemClientes").html(dados[2]);
        }
      });
    }, 5000, this)
  }

  /*Deleta Produto Filho*/
  $(".deleta_pf").click(function () {
    var id = $(this).attr("data-id");
    $.ajax({
      type: "POST",
      url: site + "/Sistema/Produto/DeletaProdFilho",
      data: {
        ajax: true,
        ID: id
      }, success: function () {
        location.reload(false)
      }
    });
  });
  /*Fim Deleta Produto Filho*/

  /*Status*/
  $(".muda_status").click(function () {
    var id = $(this).attr("id").replace("MudaStatus_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateStatus",
      data: {
        ajax: true,
        Id: id,
        Status: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });


  $(".muda_credito").click(function () {
    var id = $(this).attr("id").replace("MudaCredito_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateCredito",
      data: {
        ajax: true,
        Id: id,
        Credito: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_debito").click(function () {
    var id = $(this).attr("id").replace("MudaDebito_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateDebito",
      data: {
        ajax: true,
        Id: id,
        Debito: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_venda").click(function () {
    var id = $(this).attr("id").replace("MudaVenda_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateVenda",
      data: {
        ajax: true,
        Id: id,
        Venda: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_servico").click(function () {
    var id = $(this).attr("id").replace("MudaServico_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateServico",
      data: {
        ajax: true,
        Id: id,
        Servico: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_padraoServico").click(function () {
    var id = $(this).attr("id").replace("MudaPadraoServico_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdatePadraoServico",
      data: {
        ajax: true,
        Id: id,
        PadraoServico: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_padraovenda").click(function () {
    var id = $(this).attr("id").replace("MudaPadraoVenda_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdatePadraoVenda",
      data: {
        ajax: true,
        Id: id,
        PadraoVenda: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_grupoestoque").click(function () {
    var id = $(this).attr("id").replace("MudaGrupoEstoque_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateGrupoEstoque",
      data: {
        ajax: true,
        Id: id,
        GrupoEstoque: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_recorrente").click(function () {
    var id = $(this).attr("id").replace("MudaRecorrente_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateRecorrente",
      data: {
        ajax: true,
        Id: id,
        Recorrente: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_pagamento").click(function () {
    var id = $(this).attr("id").replace("MudaPagamento_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdatePagamento",
      data: {
        ajax: true,
        Id: id,
        Pagamento: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_emitirboleto").click(function () {
    var id = $(this).attr("id").replace("MudaEmitirBoleto_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateEmitirBoleto",
      data: {
        ajax: true,
        Id: id,
        EmitirBoleto: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_emitirboletoo").click(function () {
    var id = $(this).attr("id").replace("MudaEmitirBoleto_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateEmitirBoleto",
      data: {
        ajax: true,
        Id: id,
        EmitirBoleto: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_npagacomiss").click(function () {
    var id = $(this).attr("id").replace("MudaNPagaComiss_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateNPagaComiss",
      data: {
        ajax: true,
        Id: id,
        NPagaComiss: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_bloqpararecebloja").click(function () {
    var id = $(this).attr("id").replace("MudaBloqParaRecebLoja_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateBloqParaRecebLoja",
      data: {
        ajax: true,
        Id: id,
        BloqParaRecebLoja: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });

  $(".muda_recebimento").click(function () {
    var id = $(this).attr("id").replace("MudaRecebimento_", "");
    var pagina = $(this).attr("data-pagina");
    var value = $(this).attr("data-value");

    $.ajax({
      type: "POST",
      url: site + "/Sistema/" + pagina + "/UpdateRecebimento",
      data: {
        ajax: true,
        Id: id,
        Recebimento: value
      },
      success: function () {
        location.reload(false)
      }
    });
  });
  /*Fim Status*/

  $("#EnviarData").click(function () {

    var codigo = $("#ClienteID").val();
    var dataInicio = $("#DataInicio").val();
    var dataFinal = $("#DataFinal").val();

    $.ajax({
      type: "POST",
      url: site + "/Sistema/Cliente/BuscaPedido",
      data: {
        ajax: true,
        Id: codigo,
        DataInicio: dataInicio,
        DataFinal: dataFinal
      },
      success: function (result) {
        $("#pedidosCliente").html(result);
      }
    });
  });

  $(".contasPagar").click(function () {
    var id = $(this).attr("id").replace("PagarConta_", "");
    var valor = $(this).attr("data-valor");
    var valorSoma = $("#ValorTotal").val().replace("R$", "").replace(".", "");

    if ($("#PagarConta_" + id).is(':checked')) {
      $.ajax({
        type: "POST",
        url: site + "/Sistema/ContaPagar/CalculaPrecoPagar",
        data: {
          Valor: valor,
          ValorSoma: valorSoma
        },
        success: function (ret) {
          $("#ValorTotal").val(ret);
          $("#TotalValor").addClass("active");
        }
      })
    } else {
      $.ajax({
        type: "POST",
        url: site + "/Sistema/ContaPagar/CalculaPrecoSubtrair",
        data: {
          Valor: valor,
          ValorSoma: valorSoma
        },
        success: function (ret) {
          $("#ValorTotal").val(ret);
          $("#TotalValor").addClass("active");
        }
      })
    }
  });

  $('select[name="TransportadoraID"]').on("change", function () {
    var transportadora = $("#TransportadoraID").val();
    $.ajax({
      type: "POST",
      url: site + "/Sistema/FechamentoPedidos/BuscaTransportadora",
      data: {
        ID: transportadora
      },
      success: function (retorno) {
        if (retorno != null) {
          var endereco = retorno.split("#")
          if (endereco[1] != "")
            $("#PlacaVeiculo").val(endereco[1]);
          $("#EstadoTransportadora").val(endereco[2]);
          $("#CpfCnpjTransportadora").val(endereco[3]);
          $("#InscricaoEstadualTransportadora").val(endereco[4]);
          $("#EnderecoTransportadora").val(endereco[5]);
          $("#NumeroTransportadora").val(endereco[6]);
          $("#CidadeTransportadora").val(endereco[7]);
          $("#UFTransportadora").val(endereco[8]);
          $(".RetornoTransportadora").addClass("active");
        }
      }
    });
  });

  $("#PDFClientes").click(function () {

    var codigo = $("#ClienteID").val();
    var dataInicio = $("#DataInicio").val();
    var dataFinal = $("#DataFinal").val();

    $.ajax({
      type: "POST",
      url: site + "/Sistema/PDF/DetalhesPedidoSN",
      data: {
        ajax: true,
        Id: codigo,
        DataInicio: dataInicio,
        DataFinal: dataFinal
      },
      success: function (result) {
        console.log(result);
        //$("#teste").html(result);
      }
    });

  });

  //Inseri Quantidade CodBarras produtoFilho
  $(".salvarFilho").click(function () {
    var id = $(this).attr("id");
    var base = $("#base_" + id).val();
    var quantidade = $("#quantidade_" + id).val();
    var codBarras = $("#codBarras_" + id).val();

    $.ajax({
      type: "POST",
      url: site + "/Sistema/Produto/UpdateProdutoFilho",
      data: {
        ajax: true,
        Id: id,
        Base: base,
        Quantidade: quantidade,
        CodBarras: codBarras
      },
      success: function (ret) {
        if (ret == "OK")
          alert("Dados Alterados Com Sucesso!");
        else
          alert(ret);
      }
    });
  });

  //Inseri Quantidade CodBarras produtoFilho
  $(".salvarFilhoFreeForme").click(function () {
    var id = $(this).attr("id");
    var base = $("#base_" + id).val();
    var quantidade = $("#quantidade_" + id).val();
    var codBarras = $("#codBarras_" + id).val();

    $.ajax({
      type: "POST",
      url: site + "/Sistema/Produto/UpdateProdutoFilhoFreeForme",
      data: {
        ajax: true,
        Id: id,
        Base: base,
        Quantidade: quantidade,
        CodBarras: codBarras
      },
      success: function (ret) {
        if (ret == "OK")
          alert("Dados Alterados Com Sucesso!");
        else
          alert(ret);
      }
    });
  });

  // Adição do Campo Endereço
  var cont = 0;
  $('.add_cobranca').click(function () {
    cont++;
    $.ajax({
      type: "POST",
      url: site + "/Sistema/Cliente/AddEndereco",
      data: {
        ajax: true,
        Cont: cont
      },
      success: function (ret) {
        $('#dados-endereco').append(ret);
        $('#ContEndereco').val(cont);
      }
    });
  });
  $('#dados-endereco').on('click', '.remove_endereco', function () {
    if (cont == 0)
      cont = 1;
    $("#ende_" + cont).remove();
    cont--;
    $('#ContEndereco').val(cont);
  });

  $('#ativoInativo').click(function () {
    let valor = $(this).val()

    if (valor === 'true') {
      $('#ativoInativo').val('false')
    } else if (valor === 'false') {

      $('#ativoInativo').val('true')
    }
  });

  $('#MeioPagto').change(function () {
    var valor = $("#MeioPagto option:selected").text();
    if (valor === "CHEQUE PRE")
      $("#PagamentoCheque").removeClass("hidden");
    else
      $("#PagamentoCheque").addClass("hidden");
  })

  // Add Tipo de Lente - View Create
  $('#TipoLente').change(function () {
    let selecao = $('#TipoLente option:selected').text();

    $('#addDescriminacao').css('display', 'block');
    $('#outrosTiposLentes').css('display', 'none');

    if (selecao === 'Lente Pronta') {
      let lentePronta = '';
      removerOption();
      lentePronta = '<option value="1">Visão Simples</option>';
      lentePronta += '<option value="2">Multifocal Acabado</option>';
      lentePronta += '<option value="3">Bifocal Acabado</option>';
      lentePronta += '<option value="4">Todas as Lentes Prontas</option>';

      $('#Descriminacao').append(lentePronta);
      $('#Descriminacao').formSelect();

    } else if (selecao === 'Blocos') {
      let blocos = '';
      removerOption();
      blocos = '<option value="1">Visão Simples</option>';
      blocos += '<option value="2">Multifocal</option>';
      blocos += '<option value="3">Bifocal</option>';
      blocos += '<option value="4">Todos os Blocos</option>';

      $('#Descriminacao').append(blocos);
      $('#Descriminacao').formSelect();

    } else if (selecao === 'Lente de Contato') {
      let lenteContato = '';
      removerOption();
      lenteContato = '<option value="1">Microfocal</option>';
      lenteContato += '<option value="2">Multifocal</option>';
      lenteContato += '<option value="3">Bifocal</option>';
      lenteContato += '<option value="4">Todas as Lentes de Contato</option>';

      $('#Descriminacao').append(lenteContato);
      $('#Descriminacao').formSelect();

    } else if (selecao === 'Outros Tipos de Lente') {
      $('#addDescriminacao').css('display', 'none');
      $('#outrosTiposLentes').css('display', 'block');
      $('#Descriminacao').formSelect();
    }

  });

  /*Remove Endereço do Cliente*/
  $('.removeEndCadastrado').click(function () {
    var id = $(this).attr("id").replace("endereco_", "");
    $.ajax({
      url: site + "/Sistema/Cliente/RemoveEndereco",
      type: "POST",
      data: {
        id: id
      },
      success: function (ret) {
        if (ret == "OK") {
          location.reload();
        }
      }
    });
  });

  //Adiona grade lente Free forme
  $("#AdicionarGrade").click(function () {
    var id = parseInt($("#NumeroGrande").val());
    id = id + 1;
    $.ajax({
      url: site + "/Sistema/Produto/AdicionarLenteFreeForme",
      type: "POST",
      data: {
        cont: id
      },
      success: function (ret) {
        $("#GradeDigital").append(ret);
        $("#NumeroGrande").val(id);
      }
    })
  });

  //Adiona grade lente digital 360
  $("#AdicionarDigital").click(function () {
    var id = parseInt($("#LenteDigital").val());
    id = id + 1;
    $.ajax({
      url: site + "/Sistema/Produto/AdicionarLenteDigital",
      type: "POST",
      data: {
        cont: id
      },
      success: function (ret) {
        $("#GradeFreeForme").append(ret);
        $("#LenteDigital").val(id);
      }
    })
  });

  $(".AdicionarGrades").click(function () {
    var gradeLente = parseInt($("#GradeLente").val());
    var tipoLente = $("#TipoLente").val();
    gradeLente = gradeLente + 1;
    $.ajax({
      url: site + "/Sistema/Produto/AdicionarGrade",
      type: "POST",
      data: {
        GradeLente: gradeLente,
        TipoLente: tipoLente
      },
      success: function (ret) {
        $("#Grades").append(ret);
        $("#GradeLente").val(gradeLente);
      }
    })

  });

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
      $(".tabelaLente").removeClass("hidden");
      $("#PertoLonge").addClass("hidden");
      $("#Adicao").removeClass("hidden");
      $("#AdicaoEsquerdo").removeClass("hidden");
      $("#AdicaoDireito").removeClass("hidden");
    }
    else if (tipoLente == 1) {
      $("#PertoLonge").removeClass("hidden");
      if ($('input[name="LongePerto"]:checked').val() == "L") {
        $("#Longe").removeClass("hidden");
        $("#Perto").addClass("hidden");
        $("#Adicao").addClass("hidden");
        $("#AdicaoEsquerdo").addClass("hidden");
        $("#AdicaoDireito").addClass("hidden");
      }
      else {
        $("#Longe").addClass("hidden");
        $("#Perto").removeClass("hidden");
        $("#Adicao").addClass("hidden");
        $("#AdicaoEsquerdo").addClass("hidden");
        $("#AdicaoDireito").addClass("hidden");
      }
    }
  })

  $('select[name="TipoRelatorioID"]').on("change", function () {
    var tipoRelatorio = $("#TipoRelatorioID").val();
    if (tipoRelatorio == 1) {
      $("#TProduto").removeClass("hidden");
      $("#TSelecione").addClass("hidden");
      $("#TCliente").addClass("hidden");
    }
    if (tipoRelatorio == 2) {
      $("#TProduto").addClass("hidden");
      $("#TSelecione").addClass("hidden");
      $("#TCliente").removeClass("hidden");
    }

  })

  //Remove Dados Cartão
  $('select[name="PagamentoID"]').on("change", function () {
    var tipoPagamento = $("#tipoPag").val();
    if (tipoPagamento == 2)
      $("#dados-cartao").removeClass("hidden");
    else if (tipoPagamento == 3)
      $("#dados-cartao").removeClass("hidden");
    else
      $("#dados-cartao").addClass("hidden");
  })

  $('select[name="ServicoID"]').on("change", function () {
    var servico = $("#ServicoID").val();

    $.ajax({
      type: "POST",
      url: site + "/Sistema/Pedido/ServicoValor",
      data: {
        ServicoID: servico,
      },
      success: function (ret) {
        $("#ValorServico").html(ret);
      }
    })
  })

  $('input[name="LongePerto"]').click(function () {
    var pertoLonge = $('input[name="LongePerto"]:checked').val();
    if (pertoLonge == 'L') {
      $("#Longe").removeClass("hidden");
      $("#Perto").addClass("hidden");
    } else {
      $("#Longe").addClass("hidden");
      $("#Perto").removeClass("hidden");
    }
  })

  $('input[name="DescricaoOlho"]').click(function () {
    var selOlho = $('input[name="DescricaoOlho"]:checked').val();
    var tipoLente = $("#TipoLente").val();
    if (tipoLente == 1) {
      if (selOlho == 'AO') {
        $("#Adicao").removeClass("hidden");
        $("#Adicao").addClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").removeClass("hidden");
        $("#TabOlhoEsquerdoL").removeClass("hidden");
        $("#TabOlhoDireitoP").removeClass("hidden");
        $("#TabOlhoEsquerdoP").removeClass("hidden");
        $("#selTP").removeClass("hidden");
      }
      if (selOlho == 'SOD') {
        $("#Adicao").removeClass("hidden");
        $("#Adicao").addClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").removeClass("hidden");
        $("#selTP").removeClass("hidden");
        $("#TabOlhoEsquerdoL").addClass("hidden");
        $("#TabOlhoDireitoP").removeClass("hidden");
        $("#TabOlhoEsquerdoP").addClass("hidden");
      }
      if (selOlho == 'SOE') {
        $("#Adicao").addClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").addClass("hidden");
        $("#TabOlhoEsquerdoL").removeClass("hidden");
        $("#TabOlhoDireitoP").addClass("hidden");
        $("#TabOlhoEsquerdoP").removeClass("hidden");
        $("#selTP").removeClass("hidden");
      }
    }
    else {
      if (selOlho == 'AO') {
        $("#Adicao").removeClass("hidden");
        $("#AdicaoEsquerdo").removeClass("hidden");
        $("#AdicaoDireito").removeClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").removeClass("hidden");
        $("#TabOlhoEsquerdoL").removeClass("hidden");
        $("#TabOlhoDireitoP").removeClass("hidden");
        $("#TabOlhoEsquerdoP").removeClass("hidden");
        $("#selTP").removeClass("hidden");
      }
      if (selOlho == 'SOD') {
        $("#Adicao").removeClass("hidden");
        $("#AdicaoEsquerdo").addClass("hidden");
        $("#AdicaoDireito").removeClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").removeClass("hidden");
        $("#selTP").removeClass("hidden");
        $("#TabOlhoEsquerdoL").addClass("hidden");
        $("#TabOlhoDireitoP").removeClass("hidden");
        $("#TabOlhoEsquerdoP").addClass("hidden");
      }
      if (selOlho == 'SOE') {
        $("#Adicao").removeClass("hidden");
        $("#AdicaoEsquerdo").removeClass("hidden");
        $("#AdicaoDireito").addClass("hidden");
        $("#tabelaOlho").removeClass("hidden");
        $("#TabOlhoDireitoL").addClass("hidden");
        $("#TabOlhoEsquerdoL").removeClass("hidden");
        $("#TabOlhoDireitoP").addClass("hidden");
        $("#TabOlhoEsquerdoP").removeClass("hidden");
        $("#selTP").removeClass("hidden");
      }
    }
  })

  // Forma de Envio
  $('#FormaEnvio').click(function () {
    let valor = $(this).val();
    if (valor === 'S') {
      $('#FormaEnvio').attr('value', 'N');
    } else if (valor === 'N') {
      $('#FormaEnvio').attr('value', 'S');
    }
  });

  /* Btn-Floating */
  $('#menu-bemvindo').mouseenter(function () {
    $('#button-align').css('display', 'none');
  })

  $('#menu-bemvindo').mouseout(function () {
    $('#button-align').css('display', 'block');
  })

  $('.dropdownList').mouseenter(function () {
    $('#button-align').css('display', 'none');
  })

  $('.dropdownList').mouseout(function () {
    $('#button-align').css('display', 'block');
  })

  // Descricao Automatica View Produtos
  $('#DescAuto').click(function () {
    if ($('#DescAuto').is(':checked')) {
      $('#Descricao').attr('readonly', true);
      $('#label-descricao').attr('class', 'active');
      $('#Descricao').val(descAuto());
      $('#DescricaoEcf').val(descAuto());
      $("#CodigoFantasia").val(descCodigoFantasia());
      $("#DescricaoEcf").focus();
      $("#CodigoFantasia").focus();
    } else {
      $('#Descricao').attr('readonly', false);
      $('#label-descricao').attr('class', '');
      $('#Descricao').val("");
      $('#Descricao').focus();
    }
  });

  // Campo Observacao
  $('#Status').click(function () {
    if ($(this).is(':checked')) {
      $('.addObservacao').css('display', 'none');
      $('#observacao').attr('class', '');
    } else {
      $('.addObservacao').css('display', 'block');
      $('#observacao').attr('class', 'validate[required]');
    }
  });

  $(function () {
    if ($('#Status').is(':checked'))
      $('.addObservacao').css('display', 'none');
    $('#observacao').attr('class', '');
  });


  //Gráficos dos Cards
  if ($("#clients-bar").length > 0) {
    $("#clients-bar").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65], {
      /*type: 'bar',
      height: '25',
      width: '100%',
      barWidth: 10,
      barSpacing: 2,
      barColor: '#C7FCC9',
      negBarColor: '#81d4fa',
      zeroColor: '#81d4fa',
      spotRadius: 4,*/

      type: 'bar',
      barColor: '#C7FCC9',
      height: '25',
      width: '100%',
      barWidth: '10',
      barSpacing: 2,
      lineWidth: 20

      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });
  }

  // Bar + line composite charts (Total Sales)
  if ($("#produtos").length > 0) {
    $('#produtos').sparkline([4, 6, 7, 7, 4, 3, 2, 3, 1, 4, 6, 5, 9, 4, 6, 7, 7, 8], {
      type: 'bar',
      barColor: '#F6CAFD',
      height: '25',
      width: '100%',
      barWidth: '10',
      barSpacing: 2,
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });
    $('#produtos').sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
      composite: true,
      type: 'line',
      width: '100%',
      lineWidth: 3,
      lineColor: '#fff3e0',
      fillColor: 'rgba(153,114,181,0.3)',
      highlightSpotColor: '#fff3e0',
      highlightLineColor: '#fff3e0',
      minSpotColor: '#f44336',
      maxSpotColor: '#4caf50',
      spotColor: '#fff3e0',
      spotRadius: 4,
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });
  }

  // Tristate chart (Today Profit)
  if ($("#novosClientes").length > 0) {
    $("#novosClientes").sparkline([2, 3, 0, 4, -5, -6, 7, -2, 3, 0, 2, 3, -1, 0, 2], {
      type: 'tristate',
      width: '100%',
      height: '25',
      posBarColor: '#B9DBEC',
      negBarColor: '#C7EBFC',
      barWidth: 10,
      barSpacing: 4,
      zeroAxis: false,
      spotRadius: 4,
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });
  }
  // Line chart ( New Invoice)
  if ($("#orcament").length > 0) {
    $("#orcament").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4], {
      type: 'line',
      width: '100%',
      height: '25',
      lineWidth: 2,
      lineColor: '#E1D0FF',
      fillColor: 'rgba(233, 30, 99, 0.4)',
      highlightSpotColor: '#E1D0FF',
      highlightLineColor: '#E1D0FF',
      minSpotColor: '#f44336',
      maxSpotColor: '#4caf50',
      spotColor: '#E1D0FF',
      spotRadius: 4,
    });
  }

  $(".pAbsolute").mouseout(function () {
    var estado = $(this).attr("id").replace("estado_", "");
    $("#svg-map #" + estado + " path").css("fill", "#0044ff");
  });

  $(".pAbsolute").mouseover(function () {

    var estado = $(this).attr("id").replace("estado_", "");
    $("#svg-map #" + estado + " path").css("fill", "#1b2dd9");

  });

  $("#LenteEscolhida").click(function () {

    var Lente = $("#TipoLente option:selected").val();
    $("#Grades").html("");
    $.ajax({
      url: site + "/Sistema/Produto/NomeTipodeLente",
      type: "POST",
      data: {
        TipoLente: Lente
      },
      success: function (ret) {
        $("#tiTuloBlocos").html(ret);
        $("#tiTuloBlocos").removeClass("hidden");
        $("#btAddVariacao").removeClass("hidden");
      }
    })
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
    $(".oculos").addClass("hidden");
    $("#Ocl_" + id).removeClass("hidden");
  })
  /*Fim Troca Imagem*/

  /*Adiciona Item no Pedido*/
  $(".AdicionaItem").click(function () {
    var codBarras = $("input[name='CodBarras']").val();
    cont++;
    $.ajax({
      url: site + "/Sistema/Pedido/AdicionaItemPedido",
      type: "POST",
      data: {
        ajax: true,
        CodBarras: codBarras,
        Cont: cont
      },
      success: function (ret) {
        $("#LentesPedido").append(ret);
        $("#ContItem").val(cont);
      }
    })
  });

  /*Fim Adiciona Item no Pedido*/

  $("#ResultadoCliente").click(function (i) {
    var id = i.target.id;
    $.ajax({
      url: site + "/Sistema/Pedido/BuscaClienteId",
      type: "POST",
      data: {
        clienteID: id
      },
      success: function (ret) {
        if (ret != false) {
          var retorno = ret.split("#");
          $("#ClienteID").val(retorno[2]);
          $("#NomeCliente").val(retorno[1]);
          $("#FormaEnvioID").val(retorno[3]);
          $("#TipoEntregaID").val(retorno[4]);
          $("#FreteID").val(retorno[5]);
          $("#DescontoCliente").html(retorno[6] + "%");
          $("#ClienteNome").addClass("active");
          BuscaFormaPagamento(retorno[2]);
          BuscaFormaEnvio(retorno[3]);
          $("#ResultadoCliente").html("");
          $("#ResultadoCliente").removeClass("select-personalizado");
        }
      }
    })
  });

  $("#ResultadosBusca").click(function (i) {
    var id = i.target.id;
    $.ajax({
      url: site + "/Sistema/Pedido/BuscaProdutoID",
      type: "POST",
      data: {
        ProdutoID: id
      },
      success: function (ret) {
        if (ret != false) {
          var retorno = ret.split("#");
          $("#ProdutoID").val(retorno[1]);
          $("#BuscaProduto").val(retorno[2]);
          $("#ValorProduto").html("R$ " + retorno[3]);
          $("#Fabricante").val(retorno[4]);
          $("#Material").val(retorno[5]);
          $(".resposta_busca").addClass("active");
        }
        $("#ResultadosBusca").html("");
        $("#ResultadosBusca").removeClass("select-personalizado");
      }
    })
  });

  $("#SelecionarTudo").click(function () {
    if ($("#SelecionarTudo").hasClass("SelecionarTudo")) {
      for (i = 0; i < document.EmiteBoleto.elements.length; i++) {
        if (document.EmiteBoleto.elements[i].type == "checkbox")
          document.EmiteBoleto.elements[i].checked = 1;

        $("#SelecionarTudo").removeClass("SelecionarTudo");
        $("#SelecionarTudo").addClass("TirarSelecaoTudo");
      }
    } else {
      for (i = 0; i < document.EmiteBoleto.elements.length; i++) {
        if (document.EmiteBoleto.elements[i].type == "checkbox")
          document.EmiteBoleto.elements[i].checked = 0;

        $("#SelecionarTudo").removeClass("TirarSelecaoTudo");
        $("#SelecionarTudo").addClass("SelecionarTudo");
      }
    }
  });

  $("#SelecionarPedidos").click(function () {
    var valorNota = $("#ValorNota").val();

    if ($("#SelecionarPedidos").hasClass("SelecionarPedidos")) {
      for (i = 0; i < document.form_registro.elements.length; i++) {
        if (document.form_registro.elements[i].type == "checkbox") {
          document.form_registro.elements[i].checked = 1;
          var pedidoID = document.form_registro.elements[i].value;
          if (pedidoID != "on") {
            $.ajax({
              url: site + "/Sistema/FechamentoPedidos/SomaValor",
              type: "POST",
              data: {
                ajax: true,
                PedidoID: pedidoID,
                ValorNota: valorNota
              },
              success: function (ret) {
                $("#ValorNota").val("R$ " + ret);
              }
            })
          }
        }
        $("#SelecionarPedidos").removeClass("SelecionarPedidos");
        $("#SelecionarPedidos").addClass("TirarSelecaoTudo");
      }
    } else {
      for (i = 0; i < document.form_registro.elements.length; i++) {
        if (document.form_registro.elements[i].type == "checkbox")
          document.form_registro.elements[i].checked = 0;

        $("#SelecionarPedidos").removeClass("TirarSelecaoTudo");
        $("#SelecionarPedidos").addClass("SelecionarPedidos");
      }
    }
  });


  $('select[name="Redespacho"]').on("change", function () {
    var Transportadora = $(this).val();
    $.ajax({
      url: site + "/Sistema/FechamentoPedidos/TransportadoraRedespacho",
      type: "POST",
      data: {
        ajax: true,
        TransportadoraID: Transportadora
      },
      success: function (ret) {
        $("#DadosRedespacho").html(ret);
      }
    });

  })

  $(".PedidoSelecionado").click(function () {
    var pedidoID = $(this).val();
    var valorNota = $("#ValorNota").val();

    $.ajax({
      url: site + "/Sistema/FechamentoPedidos/SomaValor",
      type: "POST",
      data: {
        ajax: true,
        PedidoID: pedidoID,
        ValorNota: valorNota
      },
      success: function (ret) {
        $("#ValorNota").val("R$ " + ret);
      }
    })

  });

});

$(".SelecaoP").click(function () {
  var pedidoID = $(this).val();
  var valorNota = $("#ValorNota").val()
  var checked = $("#PedidosClientes[]").

  $.ajax({
    url: site + "/Sistema/Boleto/SomaValor",
    type: "POST",
    data: {
      ajax: true,
      PedidoID: pedidoID,
      ValorNota: valorNota
    },
    success: function (ret) {
      $("#ValorNota").val("R$ " + ret);
    }
  })

});

/**Fim do document ready**/

// Descricao Automatica View Produtos
function descAuto() {

  var familia = $('#FamiliaID option:selected').text();
  var material = $('#MaterialID option:selected').text();
  var tratamento = $('#TratamentoID option:selected').text();

  //familia = familia.substring(0, 3);
  //material = material.substring(0, 3);
  //tratamento = tratamento.substring(0, 3);

  return familia + " " + material + " " + tratamento;
}

//Código Fantasia
function descCodigoFantasia() {

  var familia = $('#FamiliaID option:selected').text();
  var material = $('#MaterialID option:selected').text();
  //var tratamento = $('#TratamentoID option:selected').text();

  return familia + " " + material;
}

/* Remover Option */
function removerOption() {
  $("#Descriminacao option[value='1']").remove();
  $("#Descriminacao option[value='2']").remove();
  $("#Descriminacao option[value='3']").remove();
  $("#Descriminacao option[value='4']").remove();
  $("#Descriminacao option[value='6']").remove();
  $("#Descriminacao option[value='7']").remove();
  $("#Descriminacao option[value='8']").remove();
  $("#Descriminacao option[value='9']").remove();
  $("#Descriminacao option[value='10']").remove();
}

/**Busca Cep**/
function buscarCep(idOriginal, cepOriginal) {
  var cep = cepOriginal.replace('-', '');
  var id = idOriginal.replace('Cep_', '');

  if (cep == "")
    return false;

  $.ajax({
    url: site + "/BuscaCep/BuscaEndereco",
    type: "POST",
    data: {
      cep: cep
    },
    success: function (retorno) {
      if (retorno != "0") {
        var dados_endereco = retorno.split("#")
        $("#Rua_" + id).focus();
        $("#Rua_" + id).val(unescape(dados_endereco[1]));
        $("#Bairro_" + id).focus();
        $("#Bairro_" + id).val(unescape(dados_endereco[2]));
        $("#Cidade_" + id).focus();
        $("#Cidade_" + id).val(unescape(dados_endereco[3]));
        $("#Estado_" + id).focus();
        $("#Estado_" + id).val(unescape(dados_endereco[4]));
        $("#CodigoMunicipio_" + id).val(unescape(dados_endereco[5]));
        $("#Numero_" + id).focus();
      }
      else
        alert("Cep Não Encontrado!");
    }
  });
  return false;
}
/**Fim do busca cep**/

function VerificaCPFCNPJ(element_id, cpf) {
  if ($("#" + element_id).val().length == 0 || $("#" + element_id).val() == "___.___.___-__" || $("#" + element_id).val() == "__.___.___/____-__") {
    return false;
  }
  var cpf_completo = cpf;
  var cpf = cpf.replace(/[.\-\/]/g, "");
  erro = 0;

  if ($("input[name='TipoPessoa']:checked").val() == "J") {
    if (!validaCnpj(cpf)) {
      erro = 2;
    }
  } else if ($("input[name='TipoPessoa']:checked").val() == "F") {
    if (!validaCpf(cpf)) {
      erro = 1;
    }
  }
  if (erro == 1 || erro == 2) {
    if (erro == 1)
      alert("CPF INV\u00c1LIDO!");
    if (erro == 2)
      alert("CNPJ INV\u00c1LIDO!");
    $("#" + element_id).val('');
    $("#cpf_verification").val('1');
    campo = element_id;
    setTimeout("document.getElementById(campo).focus();", 1);
  } else {
    $("#" + element_id).css("color", "#0ad008");
  }
}

function VerificaCPF(element_id, cpf) {
  if ($("#" + element_id).val().length == 0 || $("#" + element_id).val() == "___.___.___-__") {
    if ($("#" + element_id).val().length == 0 || $("#" + element_id).val() == "___.___.___-__") {
      return false;
      return false;

    }
    var cpf_completo = cpf;
    var cpf = cpf.replace(/[.\-\/]/g, "");
    erro = 0;


  }
  var cpf_completo = cpf;
  var cpf = cpf.replace(/[.\-\/]/g, "");
  erro = 0;

  if (!validaCpf(cpf)) {
    erro = 1;
  }
  if (erro == 1) {
    if (erro == 1)
      alert("CPF INV\u00c1LIDO!");
    $("#" + element_id).val('');
    $("#cpf_verification").val('1');
    campo = element_id;
    setTimeout("document.getElementById(campo).focus();", 1);
  } else {
    $("#" + element_id).css("color", "#0ad008");
  }
}

function setCamposCadastro() {
  if ($("#fisica").is(":checked")) {
    $("#tipo_pessoa label").html("CPF");
    $("#tipo_cliente label").html("RG");
    $("#nome_pessoa label").html("Nome Completo");
    $("#nome_empresa label").html("Nome Completo");
    $("#CpfCnpj").unmask().mask("999.999.999-99");
    $("#RgIe").unmask().mask("99.999.999-9");
  }
  else {
    $("#tipo_pessoa label").html("CNPJ");
    $("#tipo_cliente label").html("IE");
    $("#nome_pessoa label").html("Razão Social");
    $("#nome_empresa label").html("Nome da Empresa");
    $("#CpfCnpj").unmask().mask("99.999.999/9999-99");
    $("#RgIe").unmask().mask("999.999.999.999");
  }
}

function verificaCnpj(element_id, cnpj) {
  if ($("#" + element_id).val().length == 0 || $("#" + element_id).val() == "__.___.___/____-__") {
    return false;
  }
  var cnpj = cnpj.replace(/[.\-\/]/g, "");
  erro = 0;

  if (!validaCnpj(cnpj)) {
    erro = 2;
  }
  if (erro == 2) {
    if (erro == 2)
      alert("CNPJ INV\u00c1LIDO!");
    $("#" + element_id).val('');
    $("#cpf_verification").val('1');
    campo = element_id;
    setTimeout("document.getElementById(campo).focus();", 1);
  } else {
    $("#" + element_id).css("color", "#0ad008");
  }
}
function validaCpf(cpf) {

  if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }

  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);

  if (rev == 10 || rev == 11)
    rev = 0;

  if (rev != parseInt(cpf.charAt(9)))
    return false;

  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
    return false;

  return true;

}

/**************************************************************************/
function validaCnpj(cnpj) {
  /*remove ".", "-" e "/" utilizando expressÃ£o regular, assim
  * permite validar cnpj com ou sem pontos, barra e traÃ§o.*/
  cnpj = cnpj.replace(/[.\-\/]/g, "");
  if (cnpj.length != 14)
    return false;
  var dv = cnpj.substr(cnpj.length - 2, cnpj.length);
  cnpj = cnpj.substr(0, 12);
  /*calcular 1Âº dÃ­gito verificador*/
  var soma;
  soma = cnpj[0] * 6;
  soma += cnpj[1] * 7;
  soma += cnpj[2] * 8;
  soma += cnpj[3] * 9;
  soma += cnpj[4] * 2;
  soma += cnpj[5] * 3;
  soma += cnpj[6] * 4;
  soma += cnpj[7] * 5;
  soma += cnpj[8] * 6;
  soma += cnpj[9] * 7;
  soma += cnpj[10] * 8;
  soma += cnpj[11] * 9;
  var dv1 = soma % 11;
  if (dv1 == 10) {
    dv1 = 0;
  }
  /*calcular 2Âº dÃ­gito verificador*/
  soma = cnpj[0] * 5;
  soma += cnpj[1] * 6;
  soma += cnpj[2] * 7;
  soma += cnpj[3] * 8;
  soma += cnpj[4] * 9;
  soma += cnpj[5] * 2;
  soma += cnpj[6] * 3;
  soma += cnpj[7] * 4;
  soma += cnpj[8] * 5;
  soma += cnpj[9] * 6;
  soma += cnpj[10] * 7;
  soma += cnpj[11] * 8;
  soma += dv1 * 9;
  var dv2 = soma % 11;
  if (dv2 == 10) {
    dv2 = 0;
  }
  var digito = dv1 + "" + dv2;
  if (dv == digito) { /*compara o dv digitado ao dv calculado*/
    return true;
  } else {
    return false;
  }
}

/**Gera as Parcelas de acordo com a quantidade Cliente*/
function GeraParcelas() {
  var parcelas = parseInt($("#Parcela").val());
  var dias_parcelas = parseInt($("#dias_parcelas").val());

  if (parcelas < 0) {
    alert("Informe o Número de Parcelas!");
    return false;
  }

  if (dias_parcelas < 0) {
    alert("Informe os Dias da Parcela!");
    return false;
  }

  var depois = new Date();
  var html = '<table><tr><td>Parcela</td><td>Data Vencimento</td></tr>';

  for (var i = 1; i <= parcelas; i++) {
    depois.setDate(depois.getDate() + dias_parcelas);
    var dia = (depois.getDate() <= 9 ? "0" + depois.getDate() : depois.getDate());
    var mes = ((depois.getMonth() + 1) <= 9 ? "0" + (depois.getMonth() + 1) : (depois.getMonth() + 1));
    var ano = depois.getFullYear();
    html += '<tr><td>' + i + '</td><td><input type="text" name="parcela_' + i + '" id="parcela_' + i + '" class="datepicker" value="' + dia + '/' + mes + '/' + ano + '" /></td></tr>';
  }

  html += '</table>';

  $('#qtd_parcelas').html(html);
}
/*Fim do gera parcelas*/

/*Cálculo Markup*/
function PrecoVendaProduto(gradeLente) {

  var precoCusto = $("#PrecoCusto_" + gradeLente).val().replace("R$", "").replace(".", "");
  var markup = $("#Markup_" + gradeLente).val().replace("%", "");

  $("#Desconto_" + gradeLente).focus();

  if (precoCusto == "" || markup == "")
    return false;

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Produto/CalculaPrecoVenda",
    data: {
      PrecoCusto: precoCusto,
      Markup: markup
    },
    success: function (ret) {
      $("#PrecoVenda_" + gradeLente).val(ret);
      $(".vendaPreco").addClass("active");
    }
  })
}

function AplicarDescontoNota() {
  var valorDesconto = $("#Desconto").val().replace("R$", "").replace(".", "").replace(",", ".");
  var valorNota = $("#ValorNota").val().replace("R$", "").replace(".", "").replace(",", ".");

  if (valorDesconto == "")
    return false;

  var sub = parseFloat(valorNota) - parseFloat(valorDesconto);
  var reais = sub.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  $("#ValorNota").val(reais);
}

function AplicarFreteNota() {
  var valorFrete = $("#ValorFrete").val().replace("R$", "").replace(".", "").replace(",", ".");
  var valorNota = $("#ValorNota").val().replace("R$", "").replace(".", "").replace(",", ".");

  if (valorFrete == "")
    return false;

  var soma = parseFloat(valorNota) + parseFloat(valorFrete);
  var reais = soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  $("#ValorNota").val(reais);
}

function MarkVenda(gradeLente) {
  var precoCusto = $("#PrecoCusto_" + gradeLente).val().replace("R$", "").replace(".", "");
  var precoVenda = $("#PrecoVenda_" + gradeLente).val().replace("R$", "").replace(".", "");
  $("#Desconto_" + gradeLente).focus();

  if (precoCusto == "" || precoVenda == "")
    return false;

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Produto/CalculaMarkup",
    data: {
      PrecoCusto: precoCusto,
      PrecoVenda: precoVenda
    },
    success: function (ret) {
      $("#Markup_" + gradeLente).val(ret);
      $(".MarkupProduto").addClass("active");
    }
  })
}
/*Fim Cálculo Markup*/

function BuscarClienteID() {
  var BuscaClienteID = $("#BuscaClienteID").val();

  if (BuscaClienteID == "") {
    $("#ClienteID").val("");
    $("#NomeCliente").val("");
    $("#ClienteNome").removeClass("active");
    return false;
  }

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaClienteId",
    data: {
      ClienteID: BuscaClienteID,
    },
    success: function (ret) {
      if (ret != false) {
        var retorno = ret.split("#");
        $("#ClienteID").val(retorno[2]);
        $("#NomeCliente").val(retorno[1]);
        $("#FormaEnvioID").val(retorno[3]);
        $("#TipoEntregaID").val(retorno[4]);
        $("#ClienteNome").addClass("active");
        BuscaFormaPagamento(retorno[2]);
        BuscaFormaEnvio(retorno[3]);
        BuscaTipoEntrega(retorno[4]);
      } else
        alert("Cliente Não Encontrado!");
    }
  })
}

function BuscarCliente() {
  var BuscaCliente = $("#BuscaCliente").val();

  if ($("#BuscaClienteID").val() != "")
    return false;

  if (BuscaCliente == "") {
    $("#ClienteID").val("");
    $("#NomeCliente").val("");
    $("#ClienteNome").removeClass("active");
    return false;
  }

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaCliente",
    data: {
      NomeCliente: BuscaCliente,
    },
    success: function (ret) {
      if (ret != false) {
        var retorno = ret.split("#");
        $("#ClienteID").val(retorno[2]);
        $("#NomeCliente").val(retorno[1]);
        $("#FormaEnvioID").val(retorno[3]);
        $("#TipoEntregaID").val(retorno[4]);
        $("#FreteID").val(retorno[5]);
        $("#DescontoCliente").html(retorno[6] + "%");
        $("#ClienteNome").addClass("active");
        BuscaFormaPagamento(retorno[2]);
      } else
        alert("Cliente Não Encontrado!");
    }
  })
}

function BuscarProduto() {
  var BuscarProduto = $("#BuscaProduto").val();

  if (BuscarProduto == "") {
    $("#ProdutoFilhoID").val("");
    $("#NomeLente").val("");
    $("#LenteNome").removeClass("active");
    return false;
  }

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaProduto",
    data: {
      NomeProduto: BuscarProduto,
    },
    success: function (ret) {
      if (ret != false) {
        var retorno = ret.split("#");
        $("#ProdutoFilhoID").val(retorno[2]);
        $("#NomeLente").val(retorno[1]);
        $("#LenteNome").addClass("active");
        $("#DescontoProduto").html(retorno[3] + "%");
        $("#ValorProduto").html(retorno[4]);
        $("#ProdutoID").val(retorno[5]);
      } else
        alert("Produto Não Encontrado!");
    }
  })

}

function PreencheAdicaoOD() {
  var Esf_Longe_OD = $("#AdicaoOlhoD").val().replace("+", "").replace(",", ".");
  var Esf_Perto_OD = $("#P_Esf_D_1").val().replace("+", "").replace(",", ".");

  var adicao = (Esf_Longe_OD.indexOf(".") != -1 ? Esf_Longe_OD.split(".")[1].length : 0);
  var direito = (Esf_Perto_OD.indexOf(".") != -1 ? Esf_Perto_OD.split(".")[1].length : 0);

  if (Esf_Longe_OD == "" || Esf_Perto_OD == "")
    return false;

  if (adicao < direito) adicao = direito;

  var sub = parseFloat(Esf_Perto_OD) - parseFloat(Esf_Longe_OD);
  /*sub.val.replace("-", "");*/
  $("#AdicaoEsquerdo label").addClass("active");
  var resultado = (sub > 0 ? "+" + sub.toFixed(adicao).toString() : sub.toFixed(adicao).toString()).replace(".", ",");
  $("#L_Esf_D_1").val(resultado);
}

function PreencheAdicaoOE() {
  var Esf_Longe_OE = $("#AdicaoOlhoE").val().replace("+", "").replace(",", ".");
  var Esf_Perto_OE = $("#P_Esf_E_2").val().replace("+", "").replace(",", ".");

  var adicao = (Esf_Longe_OE.indexOf(".") != -1 ? Esf_Longe_OE.split(".")[1].length : 0);
  var perto = (Esf_Perto_OE.indexOf(".") != -1 ? Esf_Perto_OE.split(".")[1].length : 0);

  if (adicao < perto) adicao = perto;

  if (Esf_Longe_OE == "" || Esf_Perto_OE == "")
    return false;

  var sub = parseFloat(Esf_Perto_OE) - parseFloat(Esf_Longe_OE);
  /*sub.val.replace("-", "");*/
  $("#AdicaoDireito label").addClass("active");
  var resultado = (sub > 0 ? "+" + sub.toFixed(adicao).toString() : sub.toFixed(adicao).toString()).replace(".", ",")
  $("#L_Esf_E_2").val(resultado);

}

function AdicaoDireito() {
  var OlhoDireito = $("#AdicaoOlhoD").val();
  if (OlhoDireito[0].toString() != "+") $("#AdicaoOlhoD").val("+" + OlhoDireito);

  var olhoDecimais = (OlhoDireito.indexOf(",") != -1 ? OlhoDireito.split(",")[1].length : 0);

  var LEsfOd = $("#L_Esf_D_1").val().replace("+", "").replace(",", ".");
  var direitoDecimal = (LEsfOd.indexOf(".") != -1 ? LEsfOd.split(".")[1].length : 0);

  if (olhoDecimais < direitoDecimal) olhoDecimais = direitoDecimal;

  if (OlhoDireito == "" || LEsfOd == "")
    return false;

  var olho = OlhoDireito.replace("+", "").replace(",", ".");

  var soma = parseFloat(LEsfOd) + parseFloat(olho);
  var result = (soma > 0 ? "+" + soma.toFixed(olhoDecimais).toString() : soma.toFixed(direitoDecimal).toString()).replace(".", ",");
  $("#P_Esf_D_1").val(result);
}

function AdicaoEsquerdo() {

  var OlhoEsquerdo = $("#AdicaoOlhoE").val();
  var decimais = (OlhoEsquerdo.indexOf(",") != -1 ? OlhoEsquerdo.split(",")[1].length : 0);

  if (OlhoEsquerdo[0] != "+") $("#AdicaoOlhoE").val("+" + OlhoEsquerdo);

  var LEsfOe = $("#L_Esf_E_2").val().replace("+", "").replace(",", ".");
  var decimais2 = (LEsfOe.indexOf(".") != -1 ? LEsfOe.split(".")[1].length : 0);
  if (decimais < decimais2)
    decimais = decimais2;

  if (OlhoEsquerdo == "" || LEsfOe == "")
    return false;

  var soma = parseFloat(LEsfOe) + parseFloat(OlhoEsquerdo.replace("+", "").replace(",", "."));
  var resultado = (soma > 0 ? "+" + soma.toFixed(decimais).toString() : soma.toFixed(decimais).toString()).replace(".", ",");
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

function BuscaGrade(CodBarras) {
  var GL = $("#GradeLente").val();

  if (CodBarras == 0)
    return false;

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Produto/BuscaGrade",
    data: {
      CodBarras: CodBarras
    },
    success: function (ret) {
      if (ret != false) {
        var retorno = ret.split("#");
        //alert(retorno[1]);
        $("#Base_" + GL).val(retorno[1]);
        $("#Quan_" + GL).val(retorno[2]);
        $("#Desconto_" + GL).val(retorno[3] + "%");
        $("#PrecoVenda_" + GL).val("R$ " + retorno[4]);
        $("#PrecoCusto_" + GL).val("R$ " + retorno[5]);
        $("#Markup_" + GL).val(retorno[6] + "%");
        $(".BuscaBarras").addClass("active");
      }
    }
  })
}

function BuscaFormaPagamento(id_cliente) {
  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaFormaPagamento",
    data: {
      ClienteID: id_cliente,
    },
    success: function (ret) {
      var html = '';
      $(ret).each(function (index, element) {
        html += '<option value="' + element.pagamentoID + '">' + element.nomePagamento + '</option>';
      });

      $("#PagamentoID").append(html);
    }
  })

}

function BuscaFormaEnvio(FormaEnvioID) {
  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaFormaEnvio",
    data: {
      formaEnvioID: FormaEnvioID,
    },
    success: function (ret) {
      if (ret != false) {
        $("#FormaEnvioBusca").html(ret);
      } else
        alert("Erro");
    }
  })
}

function BuscarProduto(NomeProduto) {
  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscarProduto",
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

/*Produto Filho Pedido EDIT*/
function BuscaProdFilho() {
  var id = $("#ProdutoFilhoID").val();
  $.ajax({
    url: site + "/Sistema/Pedido/BuscaProdutoFilho",
    type: "POST",
    data: {
      produtoFilhoID: id
    },
    success: function (ret) {
      if (ret != false) {
        var retorno = ret.split("#");
        $(".fab_prod_filho").val(retorno[1]);
        $(".resposta_busca_fab").addClass("active");
      }
    }
  })
}
/*Fim Produto Filho Pedido EDIT*/

function BuscaClienteNome(NomeCliente) {
  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/BuscaClienteNome",
    data: {
      NomeCliente: NomeCliente,
    },
    success: function (ret) {
      if (ret != "") {
        $("#ResultadoCliente").html(ret);
        $("#ResultadoCliente").addClass("select-personalizado");
      }
      else {
        $("#ResultadoCliente").html("");
        $("#ResultadoCliente").removeClass("select-personalizado");
      }
    }
  })
}

function CalcularQuantidade() {
  var quantidade = $("#Quantidade").val();
  var valor = $("#Unitario").val().replace("R$", "").replace(".", "");
  var descontop = $("#DescontoP").val().replace("%", "");

  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/CalculaPrecos",

    data: {
      Quantidade: quantidade,
      Valor: valor,
      Desconto: descontop
    },

    success: function (ret) {

      if (ret != "") {
        var dados = ret.split("#");
        $("#VlBruto").val(dados[1]);
        $("#DescontoR").val(dados[2]);
        $("#SubTotal").val(dados[3]);
        $(".retValores").addClass("active");
      }

    }
  })
}

function EditarLinha(idPedido) {
  var DataEntrega = $("#DataEntrega_" + idPedido).val();
  var DataPrevisao = $("#DataPrevisao_" + idPedido).val();
  var Status = $("#Status_" + idPedido).val();
  $.ajax({
    type: "POST",
    url: site + "/Sistema/Pedido/EditLinha",

    data: {
      DataEntrega: DataEntrega,
      DataPrevisao: DataPrevisao,
      Status: Status,
      id: idPedido
    },
    success: function (ret) {
      if (ret == "OK") {
        alert("Edições Aplicadas com Sucesso!");
        location.reload();
      }
      else
        alert(ret);
    }
  })
}
function EditarLinha2(idPedido) {
  var DataEntrega = $("#DataEntrega_" + idPedido).val();
  var DataPrevisao = $("#DataPrevisao_" + idPedido).val();
  var Status = $("#Status_" + idPedido).val();
  $.ajax({
    type: "POST",
    url: site + "/Sistema/PedidoConserto/EditLinha",

    data: {
      DataEntrega: DataEntrega,
      DataPrevisao: DataPrevisao,
      Status: Status,
      id: idPedido
    },
    success: function (ret) {
      if (ret == "OK") {
        alert("Edições Aplicadas com Sucesso!");
        location.reload();
      }
      else
        alert(ret);
    }
  })
}

function AutoCompletar(id) {
  let medida = id;
  let texto = "";

  switch (medida) {
    case 1:
      texto = "HORIZONTAL"
      break;
    case 2:
      texto = "VERTICAL"
      break
    case 3:
      texto = "DIAGONAL MAIOR"
      break
    case 4:
      texto = "PONTE"
      break
  }

  $(".complete").html(` ${texto} `);
}

function EnviarNotaVB(id) {
  $.ajax({
    type: "POST",
    url: site + "/Sistema/ConsultaNotasFiscais/EnviarNotaVB",

    data: {
      NotaID: id
    },
    success: function (ret) {
      
    }
  })
}
// ------------------aprimorando o jquery --------------------


// para trocar os botoes codificar e decodificar 

$("#codificar").change(() => {
    $("#enviar").text("Codificar Mensagem");
  });
  
  $("#decodificar").change(() => {
    $("#enviar").text("Decodificar Mensagem");
  });


// parte para incluir o botao de descolamento 

  $("#escolhas").change(() => {
    const selected = $("#escolhas option:selected").val();
  
    if (selected == "cesar") {
      $(".incremento").css({ display: "block" });
    } else {
      $(".incremento").css({ display: "none" });
    }
  });

//  


  


//-----------------------  campo do formulario funcionando  --------------------------

addEventListener("submit",(e)=> {
  e.preventDefault();
  
  var texto = $("#texto").val()
  var escolhas =$("#escolhas").val()
  var numeroIncremento =$("#numeroIncremento").val()
  var botoesRadiais = formulario.botoes.value;
  var resultadoFinal = "";

  if (escolhas == "cesar") {
   
    if (numeroIncremento == '' ) {
      alert('por favor coloque o deslocamento')
    

    } else if (texto == '') {
      alert ('O campo Mensagem Deve Ser prenchido  ')
    }
    else {
      resultadoFinal = cesar(botoesRadiais, texto, numeroIncremento);
    }
    
  }
  
  
  else if (escolhas == "base64") {

    if (texto == '') {
      alert('O campo Mensagem Deve Ser prenchido  ')
    }
    else {
      resultadoFinal = base64(botoesRadiais, texto);
    }
  }
    
  
  else { alert('voce nao selecionou ne ')}

  var resultadoTexto = document.querySelector("#resultadoFinal");
  resultadoTexto.innerHTML = `${resultadoFinal}`;

});
  


/*base64*/

function base64(botoes, texto) {
  if (botoes == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}

// cifra de cesar 

function cesar() {
  let msg = document.querySelector("#texto").value;
  let chave = parseInt(document.querySelector("#numeroIncremento").value);
  let saida = '';

  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 + chave ) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 + chave ) % 26 + 65);
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;

  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 - chave + 26) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}




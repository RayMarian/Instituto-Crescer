// Seleciona o formulário
const formulario = document.getElementById("formCadastro");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const interesse = document.getElementById("interesse");
        const mensagem = document.getElementById("mensagem");
        const termos = document.getElementById("termos");

        let formularioValido = true;


        // Limpa estados anteriores
        const campos = [
            nome,
            email,
            telefone,
            interesse,
            mensagem
        ];

        campos.forEach(function (campo) {
            campo.classList.remove("erro", "sucesso");
        });


        // Validação do nome
        if (nome.value.trim() === "") {

            nome.classList.add("erro");
            formularioValido = false;

        } else {

            nome.classList.add("sucesso");
        }


        // Validação do e-mail
        if (
            email.value.trim() === "" ||
            !email.value.includes("@")
        ) {

            email.classList.add("erro");
            formularioValido = false;

        } else {

            email.classList.add("sucesso");
        }


        // Validação do interesse
        if (interesse.value === "") {

            interesse.classList.add("erro");
            formularioValido = false;

        } else {

            interesse.classList.add("sucesso");
        }


        // Validação dos termos
        if (!termos.checked) {

            formularioValido = false;

            alert("É necessário concordar com o envio dos dados.");
        }


        // Se houver erro
        if (!formularioValido) {

            alert("Verifique os campos destacados.");

            return;
        }


        // Criação do objeto
        const cadastro = {

            nome: nome.value.trim(),

            email: email.value.trim(),

            telefone: telefone.value.trim(),

            interesse: interesse.value,

            mensagem: mensagem.value.trim()
        };


        // Armazenamento
        localStorage.setItem(
            "cadastroInstitutoCrescer",
            JSON.stringify(cadastro)
        );


        // Confirmação
        alert("Cadastro realizado com sucesso!");


        // Limpa formulário
        formulario.reset();


        // Remove os estados visuais
        campos.forEach(function (campo) {

            campo.classList.remove("sucesso");
        });

    });
}
function cadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var confirme_senha = document.getElementById("confirme_senha").value;

    if (senha.length < 5 && senha === confirme_senha) {
        document.getElementById("nok").innerHTML = "Sua senha precisa ter pelo menos 5 caracteres";
    } else {
        document.getElementById("nok").innerHTML = "Prencha os campos corretamente";
    }

    if ((nome !== "" && email !== "" && telefone !== "" & senha !== "" && confirme_senha !== "") && (confirme_senha === senha)) {
        if (senha.length < 5) {
            document.getElementById("nok").style.display = "block";
            document.getElementById("ok").style.display = "none";
            return
        }

        var objeto = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
        }
        console.log(objeto)

        fetch("http://localhost/crudalex/cadastro.php", {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((Response) => Response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));

        document.getElementById("nok").style.display = "none";
        document.getElementById("ok").style.display = "block";



    } else {
        document.getElementById("nok").style.display = "block";
        document.getElementById("ok").style.display = "none";
    }


}
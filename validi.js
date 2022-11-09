function cadastro() {
    var nome = document.getElementById("nome").value;
    var num = document.getElementById("num").value;
    var desc = document.getElementById("desc").value;

    if ((nome !== "" && num !== "" && desc !== "")) {

        var objeto = {
            nome: nome,
            num: num,
            desc: desc,
        }
        console.log(objeto)

        fetch("http://localhost/crudalex/cadastroi.php", {
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
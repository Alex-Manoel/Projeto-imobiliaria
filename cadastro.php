<?php

include 'conexao.php';


$data = json_decode(file_get_contents('php://input'), true);

$nome = $data["nome"];
$email = $data["email"];
$telefone = $data["telefone"];
$senha = $data["senha"];

$salt = 'my_string';
$hash = md5($salt . $senha);

$inserir_cadastro = "INSERT INTO clientes VALUES( NULL, '$nome', '$email', '$telefone','$hash')";

$query = mysqli_query($connect, $inserir_cadastro);

if ($query) {
    echo 'sucesso';
} else {
    echo 'error';
}

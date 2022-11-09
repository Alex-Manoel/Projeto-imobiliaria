<?php

include 'conexao.php';


$data = json_decode(file_get_contents('php://input'), true);

$nome = $data["nome"];
$num = $data["num"];
$desc = $data["desc"];

$inserir_cadastro = "INSERT INTO imoveis VALUES( NULL, '$nome', '$num','$desc')";

$query = mysqli_query($connect, $inserir_cadastro);

if ($query) {
    echo 'sucesso';
} else {
    echo 'error';
}

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


        document.addEventListener("DOMContentLoaded", function () {
            // Seu código JavaScript aqui
            $(document).ready(function () {
                carregarDados();
            });

        function carregarDados() {
            $.ajax({
                url: "Pessoas/PegarTodos",
                method: "GET",
                success: function (pessoas) {
                    montarTabela(pessoas);
                }
            });
            }

        function montarTabela(pessoas) {
                var indice = 0;
        var divTabela = document.getElementById("divTabela");
        var tabela = '<table class="table table-sm table-hover table-striped tabela">';
            tabela += '<thead>';
                tabela += '<tr>'; //linha
                    tabela += '<th>Nome</th>';// linha dos cabeçalhos
                    tabela += '<th>Idade</th>';
                    tabela += '<th>Profissão</th>';
                    tabela += '<th>Ações</th>';
                    tabela += '<tr>';
                        tabela += '<thead>';
                            tabela += '<tbody>';

                                for (indice = 0; indice < pessoas.length; indice++) {
                                    tabela += `<tr id="${pessoas[indice].pessoaId}">`;
                                tabela += `<td>${pessoas[indice].nome}</td>`;
                                tabela += `<td>${pessoas[indice].idade}</td>`;
                                tabela += `<td>${pessoas[indice].profissao}</td>`;
                                tabela += `<td><button class="btn btn-sm btn-outline-info" onclick="pegarPessoaPeloId(${pessoas[indice].pessoaId})">Atualizar</button></td>`;
                                tabela += `<td><button class="btn btn-sm btn-outline-danger" onclick="excluirPessoa(${pessoas[indice].pessoaId})">Excluir</button></td>`;
                                tabela += `</tr>`;
                }
                            tabela += `</tbody>`;
                        tabela += `</table>`;

                divTabela.innerHTML = tabela;
            }
        });
$(".novaPessoa").click(function () {
    escolherTituloModal("Cadastro de nova pessoa");
    mostrarModal();
    limparFormulario();
});
function escolherTituloModal(texto) {
    $(".modal-title").text(texto);

}
function mostrarModal() {
    new bootsrap.Modl($("#modal"), {}).show();
    
}
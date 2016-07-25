

var app = angular.module('Sun', []);
var produtos = [
    {
        nome: 'Produto 1',
        promocao: false,
        descricao: " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
        comentarios: [
            {
                autor: 'Autor 1',
                comentario: 'Comentário Comentário Comentário Comentário Comentário Comentário Comentário <br> !!!'
            },
            {
                autor: 'Autor 2',
                comentario: 'Comentário Comentário Comentário Comentário Comentário Comentário Comentário <br> @@@@@'
            }
        ],
        val: 9.2
    },
    {
        nome: 'Produto 2',
        promocao: true,
        descricao: " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
        val: 6,
        image: [
            {full: 'img(1).jpg'},
            {full: 'img(2).jpg'}
        ]
    },
    {
        nome: 'Produto 3',
        promocao: false,
        descricao: " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
        val: 2,
        image: [
            {full: 'img(3).jpg'},
            {full: 'img(4).jpg'}
        ]
    }
];
app.controller('getProdutos', function ($scope, $sce, $http) {
    this.produtos = produtos;
    this.trustHtml = function (txt) {
        return $sce.trustAsHtml(txt);

    };
    this.change = function () {

        $http({
            method: 'GET',
            url: 'teste.php'
        }).then(function successCallback(response) {
            produtos = response.data;

        }, function errorCallback(response) {
            console.log(response);
        });
        this.produtos = produtos;
    };
});
app.controller('controlTabs', function () {
    //this.produtos = produtos;
    this.tab = 'descricao';
    this.setTab = function (newTab) {
        this.tab = newTab;

    };
    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };

});

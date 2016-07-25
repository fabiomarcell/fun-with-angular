<?php

    $produtos = array(
        0 =>
        array(
            "nome" => "Produto 111",
            "promocao" => false,
            "descricao" => " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
            "comentarios" => array(
                "autor" => "Autor 1",
                "comentario" => "Comentário Comentário Comentário Comentário Comentário Comentário Comentário <br> !!!"
            ),
            array(
                "autor" => "Autor 2",
                "comentario" => "Comentário Comentário Comentário Comentário Comentário Comentário Comentário <br> @@@@@"
            ),
            "val" => 9.2
        ),
        1 =>
        array(
            "nome" => "Produto 222",
            "promocao" => true,
            "descricao" => " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
            "val" => 6,
            "image" => array(
                "img(1).jpg",
                "img(2).jpg"
            )
        ),
        2 =>
        array(
            "nome" => "Produto 333",
            "promocao" => false,
            "descricao" => " Descricao  Descricao  Descricao  Descricao <br>  Descricao  Descricao ",
            "val" => 2,
            "image" => array(
                array(
                    "full" => "img(3).jpg"
                ),
                array(
                    "full" => "img(4).jpg"
                )
            )
        )
    );

    die( json_encode( $produtos ) );
?>
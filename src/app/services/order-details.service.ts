import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  orderDetails: any;

  constructor() { }


  foodDetails = [
    {
      id:1,
      foodName:"Formatação",
      foodDetails:"Formatação Completa + Instalação de Programas(Cliente)",
      foodPrice:"100",
      foodImg:"https://www.oficinadanet.com.br/imagens/post/14237/manutencao_pc.jpg"    
    },
    {
      id:2,
      foodName:"Limpeza",
      foodDetails:"Limpeza Interna Completa + Troca de Pasta Termica",
      foodPrice:"150",
      foodImg:"https://static.vecteezy.com/ti/fotos-gratis/p2/876062-limpeza-de-computadores-foto.jpg"    
    },
    {
      id:3,
      foodName:"Recuperação de Dados",
      foodDetails:"Observação: Dados em Setores Danificados do HD, podem não ter recuperação",
      foodPrice:"80",
      foodImg:"https://slackspace.com.br/wp-content/uploads/2016/04/Servico_Recuperacao_Dados.png"    
    },
    {
      id:4,
      foodName:"Montagem de Computador",
      foodDetails:"Montagem Modular feito o Orçamento de Peça por Peça",
      foodPrice:"200",
      foodImg:"https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2019/11/game-1.jpg"
    },
    {
      id:5,
      foodName:"Manutenção em Consoles",
      foodDetails:"Limpeza, Manutenção em Drives, Reparos em Placa, Troca de Pasta Termica",
      foodPrice:"150",
      foodImg:"https://www.grupoxfone.com.br/wp-content/uploads/2021/06/Conserto-de-PS4-em-Caxias.jpg"
    }
  ]
}

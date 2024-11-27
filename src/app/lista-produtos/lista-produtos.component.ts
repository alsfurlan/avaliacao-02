import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {
  products = [
    { codigo: 'P001', nome: 'Notebook', preco: 4500, disponibilidade: true },
    { codigo: 'P002', nome: 'Smartphone', preco: 2500, disponibilidade: false },
    { codigo: 'P003', nome: 'Fone de Ouvido', preco: 300, disponibilidade: true },
    { codigo: 'P004', nome: 'Monitor', preco: 1200, disponibilidade: false },
  ];
}
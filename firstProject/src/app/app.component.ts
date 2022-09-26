import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { RouterLinkWithHref } from '@angular/router';

export interface PeriodicElement {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstProject';
  displayedColumns: string[] = ['id', 'titulo_produto', 'descricao_produto', 'preco_produto', 'acao'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private dialog: MatDialog, private api: ApiService) {

  }

  ngOnInit(): void {
    this.getProduts();
  }
  abrirDialogo() {
    this.dialog.open(DialogComponent, {
      width: '25%'
    });
  }
  deletarProduto(id: any) {
    this.api.removeProduto(id).subscribe();
  }
  getProduts() {
    this.api.pegarProduto().subscribe({
      next:(x)=>{
        this.dataSource = new MatTableDataSource(x);
      }
    })
  }
  editarProduto(livro: any) {
    this.dialog.open(DialogComponent, {
      width: '25%',
      data: livro
    });
  }
}

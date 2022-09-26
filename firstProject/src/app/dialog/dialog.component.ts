import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  formulario_produto!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogo: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public edit: any) { }

  ngOnInit(): void {
    this.formulario_produto = this.formBuilder.group({
      titulo_produto: '',
      descricao_produto: '',
      preco_produto: 0
    })
  }

  atualizarProduto() {
    this.api.colocarProduto(this.formulario_produto.value, this.edit.id).subscribe()
  }

  adicionarProduto() {
    if(this.formulario_produto.valid && !this.edit) {
      this.api.mandarProduto(this.formulario_produto.value).subscribe()
    }
    else {
      this.atualizarProduto();
    }
  }

}

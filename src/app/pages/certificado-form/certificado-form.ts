import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {


  certificado: Certificado ={
      atividades: [],
      nome:''
  };
  atividade: string ='';



  campoIvalido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;

  }

atividadeValida(): boolean {
  return this.atividade != null && this.atividade.trim().length > 0;
}

adicionarAtividade() {
  if (!this.atividadeValida()) {
    return; // não adiciona se for vazio ou só espaços
  }

  this.certificado.atividades.push(this.atividade.trim());
  this.atividade = '';
}


  excluirAtividade(index: number){
    this.certificado.atividades.splice(index,1)

  }

  submit(){
    if(!this.formValido){
      return;

    }

  }




}

import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/CertificadoService';
import {v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService){
  }

  @ViewChild('form') form!: NgForm;

  certificado: Certificado ={
      id: '',
      atividades: [],
      nome:'',
      dataEmissao: ''
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

    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.certificado = this.estadoInicialCertificado();
    this.form.resetForm();

  }

  dataAtual(){
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2,'0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2,'0');
    const ano = dataAtual.getFullYear();


    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado{
    return {
      id: '',
      atividades: [],
      nome:'',
      dataEmissao: ''
    };
  }





}

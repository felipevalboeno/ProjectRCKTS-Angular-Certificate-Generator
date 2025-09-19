import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";



import { Baseui } from "./_components/baseui/baseui";
import { CertificadoService } from './_services/CertificadoService';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Baseui],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService){}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];

  }
}

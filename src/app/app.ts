import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";



import { Baseui } from "./_components/baseui/baseui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Baseui],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;
}

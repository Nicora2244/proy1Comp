import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FuturamaService } from 'src/app/services/futurama.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class Page3Page implements OnInit {
  characters: any[] = []; // Lista de personajes

  constructor(private futuramaService: FuturamaService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.futuramaService.getCharacters().subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.characters = [...this.characters, ...data]; // Agregar personajes a la lista
      }

      if (event) {
        event.target.complete(); // Finalizar el evento de scroll infinito
      }
    });
  }
}



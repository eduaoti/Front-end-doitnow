import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tareas',
  imports: [CommonModule, FormsModule], // 👈 esto habilita pipes como date y ngModel
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  tareas: any[] = [];

  nuevaTarea = {
    nombre: '',
    fechaLimite: ''
  };

  agregarTarea() {
    if (this.nuevaTarea.nombre && this.nuevaTarea.fechaLimite) {
      this.tareas.push({
        ...this.nuevaTarea,
        cumplida: false
      });
      this.nuevaTarea = { nombre: '', fechaLimite: '' };
    }
  }

  marcarComoCumplida(index: number) {
    this.tareas[index].cumplida = true;
  }
}

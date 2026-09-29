import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
    
  private mascotas = [
    { id: 1, nombre: 'Toby', especie: 'Perro' },
    { id: 2, nombre: 'Michi', especie: 'Gato' },
  ];

  findOne(id: number) {
    return this.mascotas.find(m => m.id === id);
  }
}
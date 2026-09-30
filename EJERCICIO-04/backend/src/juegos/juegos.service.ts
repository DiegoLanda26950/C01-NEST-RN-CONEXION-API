import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, nombre: 'Zelda', genero: 'aventura' },
    { id: 2, nombre: 'FIFA', genero: 'deportes' },
    { id: 3, nombre: 'Minecraft', genero: 'aventura' },
  ];

  findAll(genero?: string) {
    if (!genero) return this.juegos;

    return this.juegos.filter(j => j.genero === genero);
  }
}
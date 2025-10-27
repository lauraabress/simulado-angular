import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Jogador } from '../../shered/models/Jogador';

@Component({
  selector: 'app-cards',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input({ required: true }) jogador!: Jogador;
  @Output() escalar = new EventEmitter<void>();
}

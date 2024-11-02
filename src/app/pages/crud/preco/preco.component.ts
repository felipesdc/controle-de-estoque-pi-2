import { Component, OnInit } from '@angular/core';
import { Preco } from 'src/app/shared/models/preco.model';
import { PrecoService } from 'src/app/shared/services/preco.service';

@Component({
  selector: 'app-crud-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss'],
})
export class PrecoComponent implements OnInit {
  precos!: Preco[];

  displayedColumns = [
    'preco_id',
    'preco_compra',
    'preco_venda',
    'preco_data_inicial',
    'preco_data_final',
    'preco_action',
  ];

  constructor(private precoService: PrecoService) {}

  ngOnInit(): void {
    this.precoService.getPrecos().subscribe((precos) => {
      this.precos = precos;
    });
  }
}

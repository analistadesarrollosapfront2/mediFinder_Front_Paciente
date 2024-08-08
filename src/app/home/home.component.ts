import { EspecialidadesService } from './../service/especialidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  especialidades: any[] = [];

  constructor(private EspecialidadesService: EspecialidadesService) {}

  ngOnInit(): void {
    this.EspecialidadesService.getEspecialidades().subscribe(data => {
      this.especialidades = data;
      console.log(data);

    });
  }
}

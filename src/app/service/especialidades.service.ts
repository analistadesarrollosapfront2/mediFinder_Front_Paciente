import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private apiUrl = 'http://localhost:5257/api/Especialidades/ConsultarEspecialidades';

  constructor(private http: HttpClient) { }

  getEspecialidades(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

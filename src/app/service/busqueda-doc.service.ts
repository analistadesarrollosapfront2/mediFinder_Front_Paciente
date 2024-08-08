import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaDocService {
  private apiUrl = 'http://localhost:5257/api/Medicos/ObtenerMedicosRegistrados';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  /*
  [
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan.perez@example.com",
    "telefono": "+5215512345678",
    "calle": "Av. Siempre Viva",
    "colonia": "Centro",
    "numero": "123",
    "ciudad": "Ciudad de México",
    "pais": "México",
    "codigoPostal": "01000",
    "estatus": "1",
    "fechaRegistro": "2024-08-07 19:25:06",
    "especialidades": [
      {
        "idEspecialidad": 1,
        "numCedula": "1234567890",
        "honorarios": 1500,
        "especialidad": "Cardiología"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Ana",
    "apellido": "García",
    "email": "ana.garcia@example.com",
    "telefono": "+5215512345679",
    "calle": "Calle Falsa",
    "colonia": "Norte",
    "numero": "456",
    "ciudad": "Guadalajara",
    "pais": "México",
    "codigoPostal": "44100",
    "estatus": "1",
    "fechaRegistro": "2024-08-07 19:25:26",
    "especialidades": [
      {
        "idEspecialidad": 2,
        "numCedula": "0987654321",
        "honorarios": 2000,
        "especialidad": "Dermatología"
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Carlos",
    "apellido": "López",
    "email": "carlos.lopez@example.com",
    "telefono": "+5215512345680",
    "calle": "Calle Real",
    "colonia": "Sur",
    "numero": "789",
    "ciudad": "Monterrey",
    "pais": "México",
    "codigoPostal": "64000",
    "estatus": "1",
    "fechaRegistro": "2024-08-07 19:26:08",
    "especialidades": [
      {
        "idEspecialidad": 3,
        "numCedula": "1122334455",
        "honorarios": 1800,
        "especialidad": "Endocrinología"
      }
    ]
  },
  {
    "id": 4,
    "nombre": "María",
    "apellido": "Rodríguez",
    "email": "maria.rodriguez@example.com",
    "telefono": "+5215512345681",
    "calle": "Av. Revolución",
    "colonia": "Este",
    "numero": "101",
    "ciudad": "Puebla",
    "pais": "México",
    "codigoPostal": "72000",
    "estatus": "1",
    "fechaRegistro": "2024-08-07 19:26:22",
    "especialidades": [
      {
        "idEspecialidad": 4,
        "numCedula": "5544332211",
        "honorarios": 1700,
        "especialidad": "Gastroenterología"
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Luis",
    "apellido": "Martínez",
    "email": "luis.martinez@example.com",
    "telefono": "+5215512345682",
    "calle": "Blvd. Principal",
    "colonia": "Oeste",
    "numero": "202",
    "ciudad": "Querétaro",
    "pais": "México",
    "codigoPostal": "76000",
    "estatus": "1",
    "fechaRegistro": "2024-08-07 19:26:36",
    "especialidades": [
      {
        "idEspecialidad": 5,
        "numCedula": "6677889900",
        "honorarios": 1600,
        "especialidad": "Geriatría"
      }
    ]
  }
]

  */ 
}

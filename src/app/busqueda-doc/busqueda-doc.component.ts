import { BusquedaDocService } from './../service/busqueda-doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-doc',
  templateUrl: './busqueda-doc.component.html',
  styleUrls: ['./busqueda-doc.component.css']
})
export class BusquedaDocComponent implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchTerm: string = '';

  constructor(
    private BusquedaDocService: BusquedaDocService) { }

  ngOnInit(): void {
    this.BusquedaDocService.getDoctors().subscribe(data => {
      this.doctors = data.map((doctor: any) => ({
        nombre: doctor.nombre,
        apellido: doctor.apellido,
        email: doctor.email,
        telefono: doctor.telefono,
        calle: doctor.calle,
        colonia: doctor.colonia,
        numero: doctor.numero,
        ciudad: doctor.ciudad,
        pais: doctor.pais,
        codigoPostal: doctor.codigoPostal,
        especialidad: doctor.especialidades.length > 0 ? doctor.especialidades[0].especialidad : '',
        cedula: doctor.especialidades.length > 0 ? doctor.especialidades[0].numCedula : '',
        honorarios: doctor.especialidades.length > 0 ? doctor.especialidades[0].honorarios : '',
        direccion: `${doctor.calle} ${doctor.numero}, ${doctor.colonia}, ${doctor.ciudad}, ${doctor.pais}, ${doctor.codigoPostal}`
      }));
      this.filteredDoctors = this.doctors;
    });
  }

  filterDoctors() {
    if (this.searchTerm) {
      this.filteredDoctors = this.doctors.filter(doctor =>
        doctor.especialidad.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredDoctors = this.doctors;
    }
  }
  requestAppointment(doctor: any) {
    // Usa el servicio para mostrar el diálogo
   // this.DialogService.showDialog();
  }
}

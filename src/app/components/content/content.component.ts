import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  alumnos = [
    {
      nombre: "Juan Alberto",
      apellido: "Paez",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Mauro Fernando",
      apellido: "Alvarez",
      curso: "Angular",
      asistencia: "ausente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Maria Florencia",
      apellido: "Mendoza",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Andres Alberto",
      apellido: "Gimenez",
      curso: "Desarrollo Web",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "inactivo"
    },
    {
      nombre: "Laura Romina",
      apellido: "Manrique",
      curso: "Desarrollo Web",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "activo"
    },
    {
      nombre: "Maria Florencia",
      apellido: "Mendoza",
      curso: "Angular",
      asistencia: "",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Jorge luis",
      apellido: "Borges",
      curso: "Desarrollo Web",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Fernando ",
      apellido: "Lanzotti",
      curso: "Angular",
      asistencia: "ausente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Ezequiel German",
      apellido: "Garcia",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Monica Carla",
      apellido: "Barraza",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Ezequiel German",
      apellido: "Garcia",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Pablo Hernan",
      apellido: "Gomez",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    },
    {
      nombre: "Mariano Esteban",
      apellido: "Genaro",
      curso: "Angular",
      asistencia: "presente",
      fecha: "24/07/2022",
      estado: "Activo"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }




}

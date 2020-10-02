import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  professions = ['Quimico','Engenheiro','Professor','Zoólogo'];
  salvar(formData) :void {
    const { value } = formData.form;
    console.log(value);
  }
}

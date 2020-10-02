import { Component, OnInit } from '@angular/core';

import { Person } from '../model/person';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  professions = ['Quimico','Engenheiro','Professor','Zoólogo'];
  person: Person = new Person();

  salvar(formData) :void {
    const { value } = formData.form;
    this.person.name = value.name;
    this.person.email = value.email;
    this.person.phone = value.phone;
    this.person.profession = value.profession;
    console.log(this.person);
  }
}

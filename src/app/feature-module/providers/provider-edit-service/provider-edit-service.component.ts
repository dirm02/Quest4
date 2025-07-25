import { Component, OnDestroy, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
interface Charge {
  id: number;
  description: string;
  amount: number;
}
@Component({
    selector: 'app-provider-edit-service',
    templateUrl: './provider-edit-service.component.html',
    styleUrls: ['./provider-edit-service.component.css'],
    standalone: false
})
export class ProviderEditServiceComponent implements OnInit,OnDestroy{
  public routes = routes;
  public chargesArray : Charge[] = [];
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  addCharges() {
    const newCharge: Charge = {
      id: 1,
      description: "Charge description",
      amount: 10
    };
  
    this.chargesArray.push(newCharge);
  }
  deleteCharges(index:number){
    this.chargesArray.splice(index, 1)
  }
}

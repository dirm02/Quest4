import { Component, OnDestroy, OnInit } from '@angular/core';
interface data {
  value: string;
}
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-add-blog',
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.css'],
    standalone: false
})
export class AddBlogComponent implements OnInit,OnDestroy{
  public selectedValue1 = '';
  public selectedValue2 = '';

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

  selectedList1: data[] = [
    { value: 'Select Blog Category' },
    { value: 'Category 1' },
  ];
  selectedList2: data[] = [
    { value: 'Select Language' },
    { value: 'English' },
    { value: 'German' }
  ];
}

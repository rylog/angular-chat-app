import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat/chat.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'create-profile-modal',
  templateUrl: './create-profile-modal.component.html',
  styleUrls: ['./create-profile-modal.component.scss']
})
export class CreateProfileModalComponent implements OnInit {
  uploadedImage:string;
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public chatService:ChatService,  public dialogRef: MatDialogRef<CreateProfileModalComponent>) {
    this.formBuilder.group
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),

    })
  }

  onSubmit(){
    if(this.userForm.valid){
    console.log(this.userForm.valid)
    console.log(this.userForm.value)
    this.chatService.senderId = this.userForm.value.name
    this.chatService.profileImage = this.uploadedImage;
    this.dialogRef.close()
    }
  }

  fileChange(fileInput:Event){
    const file = (<HTMLInputElement>fileInput.target).files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.uploadedImage = reader.result as string 
    };
    reader.readAsDataURL(file)
    console.log(file);
  }
}

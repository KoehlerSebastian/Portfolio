import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  loading = false;

  async sendMail(){
    console.log("Sending Mail", this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let textField  = this.textField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    textField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', textField.value);
    //senden
    await fetch('https://sebastian-koehler.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd    
    }

    );

    nameField.disabled = false;
    emailField.disabled = false;
    textField.disabled = false;
    sendButton.disabled = false;
  }

}

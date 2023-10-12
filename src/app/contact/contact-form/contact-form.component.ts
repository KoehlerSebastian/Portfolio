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
  @ViewChild('checkBox') checkBox!: ElementRef; // Haken (Checkbox)
  loading = false;
  public formData: any = {};

  checkFieldsValid() {
    const name = this.nameField.nativeElement.value;
    const email = this.emailField.nativeElement.value;
    const message = this.textField.nativeElement.value;
    const checkBox = this.checkBox.nativeElement.checked; // Überprüfen, ob die Checkbox aktiviert ist

    return name && email && message && checkBox; // Gibt true zurück, wenn alle Felder ausgefüllt und die Checkbox aktiviert ist
  }

  prepareFormData() {
    const name = this.nameField.nativeElement.value;
    const email = this.emailField.nativeElement.value;
    const message = this.textField.nativeElement.value;

    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', message);

    return fd;
  }

  async sendMail() {
    const sendButton = this.sendButton.nativeElement;
    sendButton.disabled = true;

    if (this.checkFieldsValid()) {
      const formData = this.prepareFormData();

      try {
        await this.sendFormDataToServer(formData);
      } catch (error) {
        // Handle error
      } finally {
        sendButton.disabled = false;
      }
    } else {
      // Zeigen Sie eine Fehlermeldung an oder führen Sie andere Maßnahmen durch, wenn die Felder nicht gültig sind.
    }
  }

  async sendFormDataToServer(formData: FormData) {
    await fetch('https://sebastian-koehler.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    });
  }
}
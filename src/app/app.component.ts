import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // FOR ALTERNATIVE APPROACH
  // 'f1' is from the template
  @ViewChild('f1') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // NOT BEST APPROACH
    // 'setValue' change the entire form with all values
    // this.signupForm.setValue({
    //   userData: {
    //     username1: suggestedName,
    //     email1: ''
    //   },
    //   secret1: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // BETTER APPROACH
    // 'patchValue' we change only what we want and not overrding other values
    this.signupForm.form.patchValue({
      userData: {
        username1: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  // FOR ALTERNATIVE APPROACH
  onSubmit1() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username1;
    this.user.email = this.signupForm.value.userData.email1;
    this.user.secretQuestion = this.signupForm.value.secret1;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}

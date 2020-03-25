import { Component } from '@angular/core';
import {ThfNotificationService} from '@totvs/thf-ui'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThfNotificationService]
})
export class AppComponent {
  [x: string]: any;

  constructor(public thfNotification: ThfNotificationService) { }

  checkLogin(formData) {
    

    if (formData.login === 'victor@totvs.com.br' && formData.password === '1234') {

      this.thfNotification.success('Successful!');

      /*.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.thfDialog.alert({
          ok: () => this.loading = false,
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];*/
    }else{
      this.thfNotification.error('Invalid login!');
    }

  }

}

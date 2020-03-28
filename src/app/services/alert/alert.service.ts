import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async showMessage(body: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Ha ocurrido un error: ',
      message: body,
      buttons: ['OK']
    });
    await alert.present();
  }
}

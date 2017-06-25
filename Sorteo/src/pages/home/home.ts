import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomeService } from './home.service';
import { Observable } from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {
  time:number = 40;
  ganador:any = {};
  usuarios = [];
  timeControl = 0;
  timeExect = 2;
  constructor(public navCtrl: NavController, public homeService: HomeService, public alertController:AlertController) {

  }

  private getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private Alert;
	private ShowAlert = (Title, Message, handler)=>{
		this.Alert = this.alertController.create({
			title: Title,
			subTitle: Message,
			buttons: [
				{
					text: 'Ok',
					handler: handler
				}
			]
		});

  		this.Alert.present();
	}

  public Run(){
    this.homeService.getUsers().then((data:any)=>{
      this.usuarios = [];
      data.forEach(element => {
        this.usuarios.push(element);
      });
      
      this.RunTimer();
      
    },(error)=>{

    });
  }

  private RunTimer(){

    var inter = Observable.interval(1000)
      .subscribe(data => {
        this.timeControl++;
        this.time = this.time - 1;

        if(this.timeControl == this.timeExect){
          this.timeExect += 2;
          var index = this.getRandomInt(0,this.usuarios.length-1);
          this.ganador = this.usuarios[index];
        }

        if(this.time == 0){
          var mensaje = "<b>Nombre: </b>" + this.ganador.name+"<br>"+
                        "<b>Compañia: </b>" + this.ganador.company+"<br>"+
                        "<b>Posición: </b>" + this.ganador.position+"<br>"+
                        "<b>Teléfono: </b>" + this.ganador.tel+"<br>"+
                        "<b>Email: </b>" + this.ganador.email+"<br>";

          this.ShowAlert("Ganador Sorteo",mensaje,null);
          inter.unsubscribe();
        }

      })
  }

}


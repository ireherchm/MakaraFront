import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakaraFront';
  users: any[] = [];
  constructor(
      protected usuarioService: UsuarioService
    ) {
    }
ngOnInit() {
    this.usuarioService.getUsers()
    .subscribe(
      (data:any) => { // Success
        debugger;
        this.users = [data];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

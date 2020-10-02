import { Component, OnInit } from '@angular/core';
import { Socketio1Service } from '../socketio1.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private socket:Socketio1Service) { 
    
  }

  ngOnInit() {
    this.socket.listen('test event').subscribe((data)=>{
      console.log(data);
    })
  }

}

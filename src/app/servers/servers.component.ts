import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "testName";
  serverCreated = false;
  servers = ["TestServer0", "TestServer1"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server was created! Name is " + this.serverName;
  }
  onUpdateServername(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

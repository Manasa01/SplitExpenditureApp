import { Component, OnInit, ViewChild } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  };

  disableBalanceOnAdd: boolean = true;
  @ViewChild("clientForm", { static: false }) form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {}
  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      //Show error
      this.flashMessage.show("Please fill out the form correctly", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      //Add new client
      this.clientService.newClient(value);
      //Show message
      this.flashMessage.show("Client added", {
        cssClass: "alert-success",
        timeout: 4000
      });
      //Redirect to dashboard
      this.router.navigate(["/"]);
    }
  }
}

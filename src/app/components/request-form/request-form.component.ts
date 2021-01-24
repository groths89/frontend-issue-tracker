import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  ticketForm!: FormGroup;
  validMessage: string = '';
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketForm = new FormGroup({
      subjectTitle: new FormControl('', Validators.required),
      bodyDescription: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      createdDate: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      isCompleted: new FormControl(false)
    });

    function getNow() {
      let date = new Date();
      const month = date.getUTCDate();
      return month;
    }    
  }

  submitTicketCreation() {
    if (this.ticketForm.valid) {
      this.validMessage = 'Your Request has been submitted to the developer. Thank You!';
      this.ticketService.createTicket(this.ticketForm.value).subscribe(
        data => {
          this.ticketForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
        
      )
    } else {
      this.validMessage = 'Please fill out the entire form before submitting. Thank you!';
    }
  }

}

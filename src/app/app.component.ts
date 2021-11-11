import { Component} from '@angular/core';
import { EastereggService } from "../environments/xyz/easteregg.service";
import { MatDialog } from "@angular/material/dialog";
import { CongratulationsDialogComponent } from "../environments/xyz/congratulations-dialog/congratulations-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Pengebanken';





















































    constructor(eastereggService: EastereggService, public dialog: MatDialog) {
        eastereggService.subject1.subscribe(() => {
            this.dialog.open(CongratulationsDialogComponent);
        })
    }
}

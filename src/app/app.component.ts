import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UxButtonComponent} from '@netcracker/ux-ng2/button';
import {UxTableComponent} from '@netcracker/ux-ng2/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UxButtonComponent, UxTableComponent, RouterModule],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}

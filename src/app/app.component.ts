import { ChangeDetectionStrategy, Component, HostBinding, VERSION } from '@angular/core';
import { UxButtonComponent } from '@netcracker/ux-ng2/button';
import { UxTable, UxTableComponent, UxTableScrollConfig } from '@netcracker/ux-ng2/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UxButtonComponent, UxTableComponent],
})
export class AppComponent {
    @HostBinding('class.app') public _hostClass = true;

    public title = 'ux-ng2 Project Template A' + VERSION.major;

    public _model: UxTable = {
        header: {
            rows: [
                {
                    columns: Array.from({ length: 40 }).map((_, i) => ({
                        value: `Column ${i}`,
                        id: i,
                        width: i % 2 === 0 ? 100 : 200,
                        sort: 'default',
                    })),
                },
            ],
        },
        body: {
            rows: Array.from({ length: 100 }).map((_, i) => ({
                columns: Array.from({ length: 40 }).map((_, j) => {
                    return {
                        value: j % 2 === 0 ? `Row ${i}` : `Random number ${Math.floor(Math.random() * 100)}`,
                    };
                }),
            })),
        },
    };

    public _scrollConfig: UxTableScrollConfig = {
        type: 'ngx-virtual-scroll',
        maxHeight: 300,
        enableHorizontalVirtualScroll: true,
    };

    public _click(): void {
        window.alert('hello');
    }
}

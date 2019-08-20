import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/web-services/api.service';
import { endpoints } from 'src/app/helpers/endpoints';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { _filter } from 'src/app/helpers/_filter';
import { StateGroup } from 'src/app/interfaces/StateGroup';
import { States } from 'src/app/models/States';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private fb: FormBuilder, private _service: ApiService) { 
    this.stateGroups = this.GetStates().stateGroups;
  }

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[];

  stateGroupOptions: Observable<StateGroup[]>;

  GetStates() : States  {
    return new States();
  }

  ngOnInit() {
    this.stateGroupOptions =
    this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }
  
  public IsLoggedIn() {
    return this._service.isLoggedIn();
  }

  public Logout() {
    this._service.Logout(endpoints.LOGOUT_USER_API_URL);
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}

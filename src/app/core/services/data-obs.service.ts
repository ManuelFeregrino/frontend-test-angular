import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class DataObsService {

    // Shipment result
    private _DataObservable: BehaviorSubject<any> = new BehaviorSubject<any>(0);

    get getDataObservable() {
        return this._DataObservable.asObservable();
    }

    set setDataObservable(data:any) {
        this._DataObservable.next(data);
    }

}


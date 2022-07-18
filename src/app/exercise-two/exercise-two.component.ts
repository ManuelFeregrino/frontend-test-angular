import { Component, OnInit } from '@angular/core';
import { DataObsService } from '../core/services/data-obs.service';
import { NodeApiService } from '../core/services/node-api.service';
import { values, json } from "../../assets/data";

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent implements OnInit {

  servicesHigherLimit: any = [];
  values: any;
  json: any;
  locality: string = '';
  carrier: string = '';
  service: string = '';

  constructor(private dataObsService: DataObsService, private nodeService: NodeApiService) { 
    this.values = JSON.stringify(values);
    this.json = JSON.stringify(json);
  }

  ngOnInit(): void {
    this.leadData();
  }

  leadData() {
    this.withHigherLimitWithParams();
    this.withMoreServices();
    this.withGreaterCoverage();
  }

  close() {
    this.dataObsService.setDataObservable = 0;
  }

  withHigherLimitWithParams() {
    let dataServices = {
      valuesData: JSON.parse(this.values),
      jsonData: JSON.parse(this.json),
    };
    this.nodeService.getServicesWithHigherLimitWithParams(dataServices).subscribe((data: any) => {
      this.servicesHigherLimit = JSON.stringify(data);
    });
  }

  withMoreServices() {
    let dataServices = {
      valuesData: JSON.parse(this.values),
      jsonData: JSON.parse(this.json),
    };
    this.nodeService.getLocalityWithMoreServicesWithParams(dataServices).subscribe((data: any) => {
      this.locality = data.locality;
    });
  }

  withGreaterCoverage() {
    let dataServices = {
      valuesData: JSON.parse(this.values),
      jsonData: JSON.parse(this.json),
    };
    this.nodeService.getServiceWithGreaterCoverageWithParams(dataServices).subscribe((data: any) => {
      this.carrier = data.carrier;
      this.service = data.service;
    });
  }

}

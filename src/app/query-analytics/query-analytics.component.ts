import { Component, Injectable, OnInit } from '@angular/core';
import {
  CollectionViewer,
  SelectionChange,
  DataSource,
} from '@angular/cdk/collections';
import {NestedTreeControl} from '@angular/cdk/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BackendServiceService } from '../services/backend-service.service';

interface Question {
  question: string;
  sub_questions?: Question[];
}

@Component({
  selector: 'app-query-analytics',
  templateUrl: './query-analytics.component.html',
  styleUrls: ['./query-analytics.component.css'],
})
export class QueryAnalyticsComponent implements OnInit {
  questions: Question[] = [];

  treeControl = new NestedTreeControl<Question>(node => node.sub_questions);
  dataSource = new MatTreeNestedDataSource<Question>();

  constructor(private backendService: BackendServiceService) {
    this.dataSource.data = this.questions;
  }

  ngOnInit(): void {
      const test = this.backendService.getRelatedQuestions().subscribe(response => {
        this.questions = response.data;
        this.dataSource.data = this.questions;
      });
  }

  hasChild = (_: number, node: Question) => !!node.sub_questions && node.sub_questions.length > 0;
}

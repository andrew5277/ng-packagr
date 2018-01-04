import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ListSearchComponent, ResultDetailComponent, TranslatedTexts } from "./modules/list-search";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ResultDetailComponent) private resultDetail: ResultDetailComponent;
  @ViewChild(ListSearchComponent) private listSearch: ListSearchComponent;
  title = 'app';
  busy = false;
  result: any;
  resultList: [any];
  serfSection: string;
  testName = "testName!!";
  location: any;
  optionList: [any];
  selectedOption: any;
  promise: Promise<any>;
  translatedTexts: TranslatedTexts;
  list1Total = 3;
  listData1: [any];
  list1SelectedItem: any;
  ngOnInit() {
    this.resultList = [{ Id: 21, Label: "item1" }, { Id: 2, Label: "item2" }, { Id: 3, Label: "item3" }, { Id: 4, Label: "item4" }, { Id: 5, Label: "item5" }, { Id: 6, Label: "item6" }, { Id: 7, Label: "item7" }, { Id: 8, Label: "item8" }, { Id: 9, Label: "item9" }, { Id: 10, Label: "item10" },
    { Id: 11, Label: "item11" }, { Id: 12, Label: "item12" }, { Id: 13, Label: "item13" }, { Id: 14, Label: "item14" }, { Id: 15, Label: "item15" }, { Id: 16, Label: "item16" }, { Id: 17, Label: "item17" }, { Id: 18, Label: "item18" }, { Id: 19, Label: "item19" }, { Id: 20, Label: "item20" }];
    this.result = { Id: 1, Label: "item1", ChildList: ["item1- Child"] };
    this.serfSection = "testSerfSection";
    this.translatedTexts = { foundOf: "found of", total: "total", loadMoreResults: "load more results" };
    this.listData1 = this.resultList;
    this.list1SelectedItem = this.result;
    //this.location = {
    //  resultList: [{ Id: 1, Label: "item1" }, { Id: 2, Label: "item2" }, { Id: 3, Label: "item3" }, { Id: 4, Label: "item4" }, { Id: 5, Label: "item5" }, { Id: 6, Label: "item6" }, { Id: 7, Label: "item7" }, { Id: 8, Label: "item8" }, { Id: 9, Label: "item9" }, { Id: 10, Label: "item10" },
    //               { Id: 11, Label: "item11" }, { Id: 12, Label: "item12" }, { Id: 13, Label: "item13" }, { Id: 14, Label: "item14" }, { Id: 15, Label: "item15" }, { Id: 16, Label: "item16" }, { Id: 17, Label: "item17" }, { Id: 18, Label: "item18" }, { Id: 19, Label: "item19" }, { Id: 20, Label: "item20" }],
    //  TotalRecords: 4,
    //  ResultChunkAttributes: { Index: 0, RecordCount: 20, TotalRecords: 3035 },
    //  LoadMore: true

    //}
    this.busy = true;
    this.getData().then((result) => {
      this.location = result;
      this.busy = false;
    });

    this.optionList = [
      { text: "Assigned", value: "false", defaultSelected: true },
      { text: "Pending Assignment", value: "true", defaultSelected: false }
    ];
    this.selectedOption = { value: "false" };
  }

  getData() {
     this.promise = new Promise(
       (resolve, reject) => {
         let location = {
           resultList: [{ Id: 1, Label: "item1" }, { Id: 2, Label: "item2" }, { Id: 3, Label: "item3" }, { Id: 4, Label: "item4" }, { Id: 5, Label: "item5" }, { Id: 6, Label: "item6" }, { Id: 7, Label: "item7" }, { Id: 8, Label: "item8" }, { Id: 9, Label: "item9" }, { Id: 10, Label: "item10" }],
           TotalRecords: 4,
           ResultChunkAttributes: { Index: 0, RecordCount: 20, TotalRecords: 3035 },
           LoadMore: true

         }
         setTimeout(() => { resolve(location) }, 1000);
      }
    );
     return this.promise;
  }
  getListData(search: string) {
    this.busy = true;
    this.getData().then((result) => {
      this.location.resultList = this.location.resultList.concat(result.resultList);
      this.busy = false;
    });
  }

  setSrefState(item: any) {
    this.listSearch.section = "main";
    this.listSearch.params = `{ "internalBusinessId": ${item.Id} }`
  }

  getMoreListData() {

    console.log("scrolled");
  }

  onSrefStateChanage(id: number) {
    this.resultDetail.srefState ="main.view";
  }

  relatedLocationGroupCollapse() {

  }
}

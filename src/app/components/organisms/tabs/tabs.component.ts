import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabItemComponent } from '../../molecules/tab-item/tab-item.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @ContentChildren(TabItemComponent) tabItems!: QueryList<TabItemComponent>;

  tabs!: TabItemComponent[];

  ngAfterContentInit() {
    this.tabs = this.tabItems.toArray();
    this.selectTab(this.tabs[0]); // 預設選擇第一個 tab
  }

  selectTab(tab: TabItemComponent) {
    this.tabs.forEach(t => t.active = false); // 重置所有 tab 的 active 狀態
    tab.active = true; // 設置選中的 tab 的 active 狀態
  }
}

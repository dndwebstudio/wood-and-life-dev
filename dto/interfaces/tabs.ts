export interface ITab {
    name: string;
    icon: string;
    component: Component; 
  }
  
  export interface ICommunicationTabsExpanded {
    currentTab: Component; 
    tabs: ITab[];
  }
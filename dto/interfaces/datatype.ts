import { ICommunicationTabsExpanded } from "./tabs";


interface IData {
    lead?: string;
    title?: string;
    btnName: string;
    policyLink: string;
    textarea?: {
      placeholder: string;
      name: string;
    } | null;
  }

export interface IModuleSimpleFormProps {
    data: IData;
    tabs: ICommunicationTabsExpanded
  }





  
export interface ICategoryItem {
    name: string;
    desc: string;
    image: string;
    cost: number;
    checked: boolean;
    locked?: boolean;
    additionalInfo?: boolean;
    size?: number;
    short_name?: string;
    sizes?: {
      width: number;
      length: number;
    };
  }
  
  export interface IGroup {
    name: string;
    columns: number;
    view?: string;
    short_name?: string;
    size?: number | string;
    imageSize?: string;
    categories: {
      name: string;
      type: string;
      list: ICategoryItem[];
    }[];
  }
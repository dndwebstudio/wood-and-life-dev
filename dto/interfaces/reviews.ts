interface Photo {
    img: string;
  }
  
  interface Author {
    name: string;
    location: string;
    avatar: string;
  }
  
 export interface Review {
    id: number;
    photos: Photo[];
    text: string;
    author: Author;
    videoLink: string;
  }
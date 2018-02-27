export class Book {
  id: number;
  comments: string;
  date: number;
  title: string;
  words:
  {
    id: number;
    date: number,
    translation: string,
    word: string,
    isMarked: boolean
  }[];
}

interface ReviewerObject {
  img?: string;
  name: string;
  id: string;
}

export interface TableDatum {
  head: string[];
  body: (number | string | ReviewerObject)[][];
}

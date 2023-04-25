export interface Ref {
  engine: string;
  href: string;
}

export interface Sense {
  sense: string;
  examples: string[];
}

export interface WordInfo {
  word: string;
  pos: string;
  audio: string;
  phon: string;
  senses: Sense[];
  ref: Ref[];
}

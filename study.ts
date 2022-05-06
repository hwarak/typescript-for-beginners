type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  del(term: string) {
    if (this.words[term] === undefined) {
      console.log("Does not exist");
    } else {
      delete this.words[term];
    }
  }

  update(word: Word) {
    if (this.words[word.term] === undefined) {
      console.log("Does not exist");
    } else {
      this.words[word.term] = word.def;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");

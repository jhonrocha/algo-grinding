const mType = {
  IMAGE: 0,
  AUDIO: 1,
};

export class List {
  constructor(node = null) {
    this.head = node;
    this.last = node;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  addNode(node = null) {
    if (!node) return this;
    if (this.last) this.last.next = node;
    else this.head = node;
    this.last = node;
  }
}

export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Media {
  constructor({ filename, type, startTime = null, duration = null }) {
    this.filename = filename;
    this.type = type;
    this.startTime = startTime;
    this.duration = duration;
  }
}

export class Track {
  constructor(type) {
    this.type = type;
    this.track = new List();
  }
  print() {
    console.log("Printing Track");
    this.track.print();
  }
  addMedia(media) {
    if (media.type !== this.type) console.log("Different types");
    else {
      let node = this.track.head;
      if (!node) {
        this.track.addNode(new Node(media));
      } else if (media.startTime < node.data.startTime) {
        this.track.head = new Node(media, node);
      } else {
        let timer = 0;
        let search = true;
        while (search && node.next) {
          timer += node.data.duration;
          if (timer >= media.startTime) {
            search = false;
          } else node = node.next;
        }
        node.next = new Node(media, node.next);
      }
    }
    return this;
  }
}

export class AudioTrack extends Track {
  constructor() {
    super(mType.AUDIO);
  }
}

export class ImageTrack extends Track {
  constructor() {
    super(mType.IMAGE);
  }
}

export class Video extends Media {
  constructor({ filename, duration, startTime }) {
    super({ type: mType.IMAGE, filename, duration, startTime });
  }
}

export class Audio extends Media {
  constructor({ filename, duration, startTime }) {
    super({ type: mType.AUDIO, filename, duration, startTime });
  }
}

export class Picture extends Media {
  constructor({ filename, duration, startTime }) {
    super({ type: mType.IMAGE, filename, duration, startTime });
  }
}

// function main () {
//   const audio = new List();
//   const image = new Track();
// }

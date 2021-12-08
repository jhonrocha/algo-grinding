import {
  List,
  Node,
  Audio,
  Picture,
  Video,
  AudioTrack,
  ImageTrack,
} from "../list.js";
import test from "ava";

test("Validations", (t) => {
  const l = new List();
  l.print();
  const node1 = new Node(2);
  l.addNode(node1);
  l.print();
  l.addNode(new Node(5));
  l.print();
  t.pass();
});

test("Validate Audio", (t) => {
  const trackAudio = new AudioTrack();
  trackAudio
    .addMedia(
      new Audio({
        filename: "bohemian.mp3",
        startTime: 10,
        duration: 100,
      })
    )
    .addMedia(
      new Audio({
        filename: "audio2.mp3",
        startTime: 5,
        duration: 100,
      })
    )
    .addMedia(
      new Audio({
        filename: "audio3.mp3",
        startTime: 300,
        duration: 100,
      })
    )
    .addMedia(
      new Audio({
        filename: "audio2.mp3",
        startTime: 5000,
        duration: 100,
      })
    )
    .addMedia(
      new Audio({
        filename: "audio4.mp3",
        startTime: 120,
        duration: 100,
      })
    );
  trackAudio.addMedia(new Video({ filename: "video1.mp4" }));
  trackAudio.print();
  t.pass();
});

// Interview from YouTube:
// https://www.youtube.com/watch?v=rw4s4M3hFfs


const main = (blocks: Array<any>, reqs: Array<string>) => {
  const len = blocks.length;
  let min = len;
  let resp = -1;
  for (let i = 0; i < len; i++) {
    const block = blocks[i];
    let missing = missing_reqs(block, reqs);
    if (missing.length === 0) return i;
    for (let j = 1; j<min; j++) {
      // console.log(i, j, min, missing);
      if (i-j >= 0) missing = missing_reqs(blocks[i-j], missing);
      if (i+j < len) missing = missing_reqs(blocks[i+j], missing);
      if (missing.length === 0) {
        // console.log('Missing ', i, j, min);
        if (j < min) {
          min = j;
          resp = i;
        }
        break;
      }
    }
  }
  return resp;
}
export interface IHash {
    [key: string] : string;
} 

const missing_reqs = (node: IHash, reqs: Array<string>) => {
  return reqs.filter(k => !node[k]);
}

test("Check examples", () => {
  const blocks = [
    { gym: false, school: true, store: false},
    { gym: true, school: false, store: false},
    { gym: false, school: true, store: false},
    { gym: false, school: true, store: false},
    { gym: false, school: true, store: true}
  ];
  const reqs = ["gym", "school", "store"];
  expect(main(blocks,reqs)).toBe(3);
});

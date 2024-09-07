const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const int8View = new Int8Array(buf, 0, length);
  int8View.set([value], position)
  return new DataView(buf);
};

export default createInt8TypedArray;

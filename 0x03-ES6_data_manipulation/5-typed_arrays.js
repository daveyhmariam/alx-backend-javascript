const createInt8TypedArray = (length, position, value) => {
  const buf = new ArrayBuffer(length);
  const int8View = new Int8Array(buf);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  return buf;
};

export default createInt8TypedArray;

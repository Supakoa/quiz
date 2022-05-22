const checkDuplicateStr = require("./index");

test(" checkDuplicateStr Exmaple 1 value = qeasssssssssss", () => {
  const str = "qeasssssssssss";
  const rs = checkDuplicateStr(str);
  console.debug("result: ", rs);
  expect(rs).toBe("qeas11");
});

test(" checkDuplicateStr Exmaple 2 value = supakit.kit", () => {
  const str = "supakit.kit";
  const rs = checkDuplicateStr(str);
  console.debug("result: ", rs);
  expect(rs).toBe("supakit.kit");
});

test(" checkDuplicateStr Exmaple 3 value isEmpty", () => {
  const str = "";
  const rs = checkDuplicateStr(str);
  expect(rs).toBe("");
});

test(" checkDuplicateStr Exmaple 4 value = axxccddfflliieeerrrjjjw", () => {
  const str = "axxccddfflliieeerrrjjjw";
  const rs = checkDuplicateStr(str);
  console.debug("result: ", rs);
  expect(rs).toBe("ax2c2d2f2l2i2e3r3j3w");
});

test(" checkDuplicateStr Exmaple 5 value = 11222333344444555555", () => {
  const str = "11222333344444555555";
  const rs = checkDuplicateStr(str);
  console.debug("result: ", rs);
  expect(rs).toBe("1223344556");
});

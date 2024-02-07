function AnaToVori(Ana) {
  if (typeof Ana !== "number" || Ana < 0) {
    return "Please return a valid number";
  }
  const vori = Ana * 0.0625;
  return vori;
}

console.log(AnaToVori(22));

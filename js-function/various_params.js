/**
 * for a given string tell me whether it has even number of character or not
 *
 *
 *
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 == 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return true;
  }
}

// evenSizedString("Dhaka");
// evenSizedString("Faka");

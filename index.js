const takeANumber = (arr, name) => {
  arr.push(name)
  let pos = arr.length;
  return `Welcome, ${name}. You are number ${pos} in line.`
}


export const bankDist = {
  "BOC": "中国银行",
  "ABC": "农业银行",
  "CCB": "建设银行",
  "ICBC": "工商银行"
}

export const getBankFullName = (name) => {
  return bankDist[name] || "Unknown Bank";
}
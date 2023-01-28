import shortid from "shortid";

function shortId() {
  shortid.characters(
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
  );
  return shortid.generate();
}

export default shortId;

import { get_encoding } from "tiktoken";

const encoding = get_encoding('cl100k_base');
const tokens = encoding.encode("Add your text");

console.log(tokens)
import stag from "./stag.json";
import prod from "./prod.json";

export default process.env.NODE_ENV == "production" ? prod : stag;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_router_1 = __importDefault(require("./src/router/product.router"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './src/views');
const DB_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}\`?retryWrites=true&w=majority`;
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(body_parser_1.default.json());
app.use('/product', product_router_1.default);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map
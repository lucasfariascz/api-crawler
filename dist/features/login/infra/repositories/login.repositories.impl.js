"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRepositoriesImpl = void 0;
const inversify_1 = require("inversify");
const puppeteer_1 = __importDefault(require("puppeteer"));
let LoginRepositoriesImpl = class LoginRepositoriesImpl {
    async login(request) {
        const browser = await puppeteer_1.default.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: '/usr/bin/google-chrome',
            headless: false,
        });
        const page = await browser.newPage();
        await page.goto('http://extratoclube.com.br/');
        const frames = page.frames();
        const frameHandle = frames[0];
        const elementoNoFrame = await frameHandle.$('[name="usuario"]');
        await elementoNoFrame.type(request.name);
        return;
    }
};
LoginRepositoriesImpl = __decorate([
    (0, inversify_1.injectable)()
], LoginRepositoriesImpl);
exports.LoginRepositoriesImpl = LoginRepositoriesImpl;
//# sourceMappingURL=login.repositories.impl.js.map
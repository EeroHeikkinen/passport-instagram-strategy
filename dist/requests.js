"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.getLongLivedAccessToken = exports.getShortLivedAccessToken = void 0;
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var links_1 = require("./links");
exports.getShortLivedAccessToken = function (_a) {
    var code = _a.code, clientId = _a.clientId, clientSecret = _a.clientSecret, callbackUrl = _a.callbackUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        var form, headers, jsonRes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    form = {
                        code: code,
                        app_id: clientId,
                        app_secret: clientSecret,
                        redirect_uri: callbackUrl,
                        grant_type: "authorization_code"
                    };
                    headers = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                    return [4, request_promise_native_1.default.post({
                            url: links_1.SHORT_ACCESS_TOKEN_URL,
                            form: form,
                            headers: headers
                        })];
                case 1:
                    jsonRes = _b.sent();
                    return [2, JSON.parse(jsonRes)];
            }
        });
    });
};
exports.getLongLivedAccessToken = function (_a) {
    var accessToken = _a.accessToken, clientSecret = _a.clientSecret;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, jsonRes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = links_1.LONG_ACCESS_TOKEN_URL + "?grant_type=ig_exchange_token&client_secret=" + clientSecret + "&access_token=" + accessToken;
                    return [4, request_promise_native_1.default.get(url)];
                case 1:
                    jsonRes = _b.sent();
                    return [2, JSON.parse(jsonRes)];
            }
        });
    });
};
exports.getUserProfile = function (accessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var url, jsonRes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = links_1.GET_USER_URL + "?fields=id,username&access_token=" + accessToken;
                return [4, request_promise_native_1.default.get(url)];
            case 1:
                jsonRes = _a.sent();
                return [2, JSON.parse(jsonRes)];
        }
    });
}); };
//# sourceMappingURL=requests.js.map
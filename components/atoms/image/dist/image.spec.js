"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var chai_1 = require("chai");
var image_1 = require("./image");
it('should render', function () {
    var getByTestId = react_2.render(react_1.default.createElement(image_1.BaseImage, { "data-testid": "test-img", alt: "alt world", src: "https://bit.dev" })).getByTestId;
    var rendered = getByTestId('test-img');
    chai_1.expect(rendered.tagName).to.equal('IMG');
    chai_1.expect(rendered.getAttribute('alt')).to.equal('alt world');
    chai_1.expect(rendered.getAttribute('src')).to.equal('https://bit.dev');
});
it('should pass classname', function () {
    var getByTestId = react_2.render(react_1.default.createElement(image_1.BaseImage, { "data-testid": "test-img", className: "testclass", alt: "alt", src: "https://" })).getByTestId;
    var rendered = getByTestId('test-img');
    chai_1.expect(rendered.className).to.include('testclass');
});

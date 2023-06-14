"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const colors_1 = require("../helpers/colors");
const z_index_1 = require("../state/z-index");
const backgroundOverlay = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: `blur(1px)`,
    position: 'fixed',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const panel = {
    backgroundColor: colors_1.BACKGROUND,
    boxShadow: '0 0 4px black',
    color: 'white',
};
const ModalContainer = ({ children, onEscape, onOutsideClick }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "css-reset", style: backgroundOverlay, role: "dialog", "aria-modal": "true", children: (0, jsx_runtime_1.jsx)(z_index_1.HigherZIndex, { onOutsideClick: onOutsideClick, onEscape: onEscape, children: (0, jsx_runtime_1.jsx)("div", { style: panel, children: children }) }) }));
};
exports.ModalContainer = ModalContainer;

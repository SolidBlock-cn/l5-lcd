"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBuildIndicator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const cwd = {
    fontSize: 13,
    opacity: 0.8,
};
const MenuBuildIndicator = () => {
    const [isBuilding, setIsBuilding] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        window.remotion_isBuilding = () => {
            setIsBuilding(true);
        };
        window.remotion_finishedBuilding = () => {
            setIsBuilding(false);
        };
        return () => {
            window.remotion_isBuilding = undefined;
            window.remotion_finishedBuilding = undefined;
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { style: cwd, title: window.remotion_cwd, children: isBuilding ? 'Building...' : window.remotion_projectName }));
};
exports.MenuBuildIndicator = MenuBuildIndicator;

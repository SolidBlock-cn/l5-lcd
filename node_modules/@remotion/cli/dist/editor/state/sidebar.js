"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarContextProvider = exports.SidebarContext = exports.getSavedCollapsedState = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const storageKey = 'remotion.sidebarCollapsing';
const getSavedCollapsedState = () => {
    const state = window.localStorage.getItem(storageKey);
    if (state === 'collapsed') {
        return 'collapsed';
    }
    if (state === 'expanded') {
        return 'expanded';
    }
    return 'responsive';
};
exports.getSavedCollapsedState = getSavedCollapsedState;
const setSavedCollapsedState = (type) => {
    window.localStorage.setItem(storageKey, type);
};
exports.SidebarContext = (0, react_1.createContext)({
    sidebarCollapsedState: 'collapsed',
    setSidebarCollapsedState: () => {
        throw new Error('sidebar collapsed state');
    },
});
const SidebarContextProvider = ({ children }) => {
    const [sidebarCollapsedState, setSidebarCollapsedState] = (0, react_1.useState)(() => (0, exports.getSavedCollapsedState)());
    const value = (0, react_1.useMemo)(() => {
        return {
            setSidebarCollapsedState: (state) => {
                setSidebarCollapsedState(state);
                setSavedCollapsedState(state);
            },
            sidebarCollapsedState,
        };
    }, [sidebarCollapsedState]);
    return ((0, jsx_runtime_1.jsx)(exports.SidebarContext.Provider, { value: value, children: children }));
};
exports.SidebarContextProvider = SidebarContextProvider;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCompactUI = void 0;
const react_1 = require("react");
const breakpoint = 1200;
function useCompactUI() {
    const [compactUI, setCompactUI] = (0, react_1.useState)(window.innerWidth < breakpoint);
    (0, react_1.useEffect)(() => {
        function handleResize() {
            setCompactUI(window.innerWidth < breakpoint);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return compactUI;
}
exports.useCompactUI = useCompactUI;

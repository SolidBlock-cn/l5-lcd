"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTrackHidden = exports.isTrackCollapsed = void 0;
const isTrackCollapsed = (hash, viewState) => {
    return viewState.collapsed[hash] !== false;
};
exports.isTrackCollapsed = isTrackCollapsed;
const isTrackHidden = (track, allTracks, viewState) => {
    if (!track.sequence.parent) {
        return false;
    }
    const parent = allTracks.find((t) => t.sequence.id === track.sequence.parent);
    if (!parent) {
        // TODO: Tighten up, when toggling rich timeline this case can happen right now
        return false;
    }
    if ((0, exports.isTrackCollapsed)(parent.hash, viewState)) {
        return true;
    }
    return (0, exports.isTrackHidden)(parent, allTracks, viewState);
};
exports.isTrackHidden = isTrackHidden;

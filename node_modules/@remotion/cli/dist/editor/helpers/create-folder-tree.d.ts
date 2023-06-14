import type { TComposition, TFolder } from 'remotion';
import type { CompositionSelectorItemType } from '../components/CompositionSelectorItem';
export declare const splitParentIntoNameAndParent: (name: string | null) => {
    name: string | null;
    parent: string | null;
};
export declare const findItemListToPush: (items: CompositionSelectorItemType[], folderName: string | null, parentName: string | null) => CompositionSelectorItemType[];
export declare const createFolderTree: (comps: TComposition<unknown>[], folders: TFolder[], foldersExpanded: Record<string, boolean>) => CompositionSelectorItemType[];

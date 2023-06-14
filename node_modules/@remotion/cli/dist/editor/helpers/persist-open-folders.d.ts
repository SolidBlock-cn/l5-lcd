export declare const openFolderKey: (folderName: string, parentName: string | null) => string;
export declare type ExpandedFoldersState = Record<string, boolean>;
export declare const persistExpandedFolders: (state: ExpandedFoldersState) => void;
export declare const loadExpandedFolders: () => ExpandedFoldersState;

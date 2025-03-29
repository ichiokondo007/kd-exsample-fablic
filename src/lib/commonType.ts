
export const loginsessionName: string = "kdlogininfo";
export interface LoginInfo {
    username: string;
    backgroundColor: string;
}

export const TOP: string = "TOP";
export const CanvasList: string = "CanvasList";
export const InputFormTest: string = "InputFormTest";
export const OTHERS: string = "OTHERS";
export type MenuKey = typeof TOP | typeof CanvasList | typeof InputFormTest | typeof OTHERS;

export const TOPPATH: string = "/top";
export const CanvasListPath: string = "/canvaslistpage";
export const InputFormTestPath: string = "/canvasapppage";
export const OTHERSPath: string = "/others";
export type Menupath = typeof TOPPATH | typeof CanvasListPath | typeof InputFormTestPath | typeof OTHERSPath;

export interface TitleObject {
    titlename: MenuKey;
    path: Menupath;
    iconUrl: String;
}

export const titles: { key: MenuKey, titleObject: TitleObject }[] = [
    {
        key: TOP,
        titleObject: {
            titlename: TOP,
            path: TOPPATH,
            iconUrl: ""
        }
    },
    {

        key: CanvasList,
        titleObject: {
            titlename: CanvasList,
            path: CanvasListPath,
            iconUrl: ""
        }
    },
    {

        key: InputFormTest,
        titleObject: {
            titlename: InputFormTest,
            path: InputFormTestPath,
            iconUrl: ""
        }
    },
    {
        key: OTHERS,
        titleObject: {
            titlename: OTHERS,
            path: OTHERSPath,
            iconUrl: ""
        }
    },
];

export function getTitleObjectByKey(key: MenuKey): TitleObject | undefined {
    const foundItem = titles.find(item => item.key === key);
    return foundItem?.titleObject;
}

export const breadcrumb: { titlename: MenuKey, titlnames: string[] }[] = [
    { titlename: TOP, titlnames: [TOP] },
    { titlename: CanvasList, titlnames: [TOP, CanvasList] },
    { titlename: InputFormTest, titlnames: [TOP, InputFormTest] },
    { titlename: OTHERS, titlnames: [TOP, OTHERS] }
]

export function getBreadcrumbByTitlename(titlename: MenuKey): TitleObject[] | undefined {
    const foundItem = breadcrumb.find(item => item.titlename === titlename);
    if (foundItem) {
        return foundItem.titlnames.map(titlename => {
            const titleObject = getTitleObjectByKey(titlename);
            return titleObject;
        }).filter((item): item is TitleObject => item !== undefined);
    }
    return [{
        titlename: TOP,
        path: TOPPATH,
        iconUrl: ""
    }]
}



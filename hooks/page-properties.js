import create from "zustand";

export const usePageProperties = create(set => ({
    pageTitle: 'Startseite',
    setPageTitle: (title) => set({pageTitle: title})
}));
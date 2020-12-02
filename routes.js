export const publicRoutes = [
    {title: 'Startseite', path: '/', hideTitle: true},
    {title: 'Waldgeburtstage', path: '/angebote/geburtstag'},
    {title: 'Schule', path: '/angebote/schule'},
    {title: 'Waldbaden', path: '/angebote/waldbaden'},
    {title: 'Kontakt', path: '/kontakt'}
]

export const privateRoutes = [
    {title: 'Waldbaden', path: '/angebote/waldbaden'}
]

export const allRoutes = [...publicRoutes, ...privateRoutes];

import i18next from 'i18next'

i18next
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'de',
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to this site"
                }
            },
            de: {
                translation: {
                    welcome: "Willkommen auf dieser Seite"
                }
            }
        }
    });

export {i18next}

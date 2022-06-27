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
                    welcome: "Welcome to this site",
                    "login": "Login with your credentials",
                    "sign-in": "Sign in",
                    username: "Username",
                    password: "Password"
                }
            },
            de: {
                translation: {
                    welcome: "Willkommen auf dieser Seite",
                    "login": "Melden sie sich an",
                    "sign-in": "Anmelden",
                    username: "Benutzername",
                    password: "Passwort"
                }
            }
        }
    });

export {i18next}

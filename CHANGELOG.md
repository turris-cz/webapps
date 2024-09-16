# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [6.0.1] - 2024-09-16

### Changed

-   Fixed position of tooltips in styles.css

## [6.0.0] - 2024-09-13

### Added

-   Added & updated Weblate translations
-   Added Bootswatch v5.3.3
-   Added window.matchMedia mocking to setupTests.js
-   Added Access-Control-Allow-Origin header globally
-   Redirect to HTTPS if available

### Changed

-   Refactored Dark Mode
-   Refactored index.scss & styles to match common Turris Bootstrap theme
-   Refactored ThemeContext to improve theme handling and favicon change
-   Refactored Header items to use icons with tooltips
-   Refactored ErrorBoundary component for improved error handling and UI
    display
-   Set document language based on selected locale
-   Other improvements in styles and code
-   NPM audit fix

## [5.0.1] - 2024-06-15

### Changed

-   Changed the naming of artifacts in GitLab CI/CD
-   NPM audit fix

## [5.0.0] - 2024-05-30

### Added

-   Added & update Weblate translations

### Changed

-   Migrated from react-scripts to Vite
-   Migrated mocked API calls to MSW
-   Migrated from Jest to Vitest
-   Migrated to Bootstrap 5
-   Updated React to 18
-   Updated packages to latest versions
-   Updated Node.js to 20 in CI/CD
-   Updated README.md
-   Other improvements in styles and code

### Removed

-   Removed GitLab CI/CD unit test for coverage

## [4.1.0] - 2023-02-22

### Added

-   Added `.pre` stage to GitLab CI
-   Added GitLab CI/CD unit test for coverage
-   Added login and logout support for turris-auth

### Changed

-   Reworked app icons and tooltips
-   Dropped unreleased section in Changelog
-   Changed primary color to Turris specific
-   Removed obsolete styles

## [4.0.0] - 2022-12-31

-   Migrate to React.js
-   Add language switcher
-   Add GitLab CI
-   Other improvements

## [3.7] - 2021-09-27

-   Use color-scheme detection for theme
-   Sync translations with Turris OS
-   Improve cards transitions
-   Fix headline in README

## [3.6] - 2021-02-19

-   Add CSS loader
-   Add tabbing navigation
-   Refactor page loading stages
-   Handle special case with only one app

## [3.5] - 2021-01-26

-   Make sure default application is listed first

## [3.4] - 2020-12-11

-   Add light/dark favicon switch
-   Reduce app card's width size
-   Fix default's app focus outline unevenness
-   Fix "default" wording

## [3.3] - 2020-10-16

-   Fix odd icons padding
-   Fix cards transitions

## [3.2] - 2020-09-25

-   Fix shadows in Dark Mode
-   Reduce intro paddings
-   Style noscript warning
-   Fix dark-mode toggle on page load
-   Add dark-mode source js & update minified file

## [3.1] - 2020-09-22

-   Fix default translations
-   Remove obsolete icons
-   Add color icons
-   Update monochrome icons
-   Add two columns on medium screens

## [3.0] - 2020-09-17

-   Including redesign using bootstrap
-   Minor fixes on backend (introduced @HOST@ notation)
-   Some basic documentation

## [2.9] - 2020-09-11

-   Redesign WebApps (bootstrap style)
-   Add dark mode

## [2.0] - 2020-07-23

-   Release version 2.0 - first release of the new system rewritten from scratch

## [1.2] - 2020-06-25

-   Initial version

[unreleased]: https://gitlab.nic.cz/turris/webapps/-/compare/v6.0.1...master
[6.0.1]: https://gitlab.nic.cz/turris/webapps/-/compare/v6.0.0...v6.0.1
[6.0.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v5.0.1...v6.0.0
[5.0.1]: https://gitlab.nic.cz/turris/webapps/-/compare/v5.0.0...v5.0.1
[5.0.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v4.1.0...v5.0.0
[4.1.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v4.0.0...v4.1.0
[4.0.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.7...v4.0.0
[3.7]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.6...v3.7
[3.6]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.5..v3.6
[3.5]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.4...v3.5
[3.4]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.3...v3.4
[3.3]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.2...v3.3
[3.2]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.1...v3.2
[3.1]: https://gitlab.nic.cz/turris/webapps/-/compare/v3.0...v3.1
[3.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v2.9...v3.0
[2.9]: https://gitlab.nic.cz/turris/webapps/-/compare/v2.0...v2.9
[2.0]: https://gitlab.nic.cz/turris/webapps/-/compare/v1.2...v2.0
[1.2]: https://gitlab.nic.cz/turris/webapps/-/tags/v1.2

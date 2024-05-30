# Turris WebApps

Simple landing page allowing users to choose which we application they want to
continue to. List of available applications is read from directories
`/usr/share/turris-webapps/` and `/etc/turris-webapps/`. Those can contain json
files with definitions of the service. Files has to begin with number (to allow
sorting them easily) and have `.json` extension.

## Web apps definition files

Json files with web app definitions look like this:

```json
{
    "id": "coolapp",
    "title": "Cool App",
    "url": "/coolapp",
    "icon": "/icons/coolapp.svg",
    "description": {
        "en": "This is the coolest app ever",
        "cz": "Úplně boží aplikace"
    }
}
```

Regarding the records in the json, `id` is unique identifier, `title` should be
name of the application - thus does not depend on any particular language. To
specify where to redirect, use `url` entry. Preferred way is to specify
different path on the same server/port and proxy the service if it runs on
different port. Reason behind that is to make https available and to make sure
everything works even if only one port is available. In worst case, you can use
as part of `url` special string `@HOST` which will be replaced by the host name
or IP of the current server, so you could something like
`"url": "http://@HOST@:8080",`. To have a nice icon, you need to specify path to
your icon by filling in the `icon` entry. Your icon should be stored on router
in `/www/webapps-icons/` directory and would be accessible in webapps via
`/icons`. Last but not least, `description` can be a short text to explain what
the application does and it can be translated into various languages.

## Lighttpd configuration

To create a reverse proxy in lighttpd to support web application running on
different port (optionally with password protected access), you need to create
and deploy configuration file into `/etc/lighttpd/conf.d/`. Name it
_your_app_name.conf_. As a content you use the following snippet:

```plain
server.modules += ( "mod_proxy" )

$HTTP["url"] =~ "^/coolapp" {
  proxy.header = (
    "map-host-request" => ( "-" => "127.0.0.1" ),
    "map-urlpath" => ( "/coolapp" => "", "/coolapp/" => "/" ),
    "https-remap" => "enable"
  )
  proxy.server = ( "" => ( ( "host" => "127.0.0.1", "port" => "1234") ) )
}
```

If you want to protect the patch by password, you can expand it this way:

```plain
server.modules += ( "mod_proxy" )
server.modules += ( "mod_authn_pam", "mod_auth" )

$HTTP["url"] =~ "^/coolapp" {
  auth.backend = "pam"
  auth.require = ( "" =>
                   (
                     "method"    => "basic",
                     "realm"     => "Cool App login",
                     "require"   => "valid-user"
                   )
                 )
  proxy.header = (
    "map-host-request" => ( "-" => "127.0.0.1" ),
    "map-urlpath" => ( "/coolapp" => "", "/coolapp/" => "/" ),
    "https-remap" => "enable"
  )
  proxy.server = ( "" => ( ( "host" => "127.0.0.1", "port" => "1234") ) )
}
```

### Dependencies

Obviously configuration above depends on `lighttpd` and various modules. For
simple proxy without authentication you are fine with just `lighttpd-mod-proxy`.
If you need authentication, you have to add to your dependencies
`lighttpd-mod-auth`, `lighttpd-mod-authn_pam` and `lighttpd-mod-authn_file` as
well.

## Development

This project is written in React.js and uses
[React Bootstrap](https://react-bootstrap.netlify.app/) for styling. It is built
using [Vite](https://vitejs.dev/). The project also contains a simple mock
server based on [MSW](https://mswjs.io/) to simulate the API in development
mode.

Install all the required packages/dependencies using `npm install`.

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run preview`

Runs the app in the production mode locally.

#### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run lint`

Runs ESLint to check the code for errors.

## Localization

The project uses [ttag](https://ttag.js.org/) for translations and
[Weblate](https://weblate.org/) for managing translations.

To extract strings for translation, run `make extract-translations`. This will
generate a `translations.pot` file from the source code.

Then you should update the translations for each language by running
`make update-translations`. This will update the `.po` files.

And finally, to compile the translations run `make compile-translations`. This
will generate the `.json` files with translations.

Or you can run all the steps at once by running `make translations`.

### Weblate

The project is set up to use Weblate for managing translations. The Weblate
project is located at
[https://hosted.weblate.org/projects/turris/webapps/](https://hosted.weblate.org/projects/turris/webapps/).

New languages are added automatically on Weblate platform.

Updating translations in the project is done by creating a branch with the
translations and opening a pull request. The translations will be merged into
the `main` branch after the review. The process is as follows:

```bash
# 1) Lock translations on Weblate

# 2) Add a Weblate remote
git remote add weblate https://hosted.weblate.org/projects/turris/webapps/
git fetch weblate

# 3) Checkout the weblate master branch
git checkout weblate/master

# 4) Create a new branch for translations
git checkout -b update-translations

# 5) Push the branch to the project
# 6) Review the changes and open a pull request
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Contributing

Feel free to open issues and pull requests!

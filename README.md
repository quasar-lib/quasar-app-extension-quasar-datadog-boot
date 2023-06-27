Quasar App Extension quasar-datadog-boot
===

Quasar App Extension quasar-datadog-boot to inject Datadog Browser RUM

# Install
```bash
quasar ext add quasar-datadog-boot
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your Quasar project.


# Uninstall
```bash
quasar ext remove quasar-datadog-boot
```

# Usage
> After adding the extension there is one place to put required configuration in the file `quasar.config.js` in the section **"framework"**:
```javascript
      config: {
        DATADOG_APPLICATION_ID: process.env.DATADOG_APPLICATION_ID,
        DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN,
        DATADOG_SITE: process.env.DATADOG_SITE,
        DATADOG_SERVICE: process.env.DATADOG_SERVICE || undefined,
        DATADOG_ENV: process.env.DATADOG_ENV || ctx.prod ? 'production' : 'dev', //'production'
        DATADOG_VERSION: process.env.DATADOG_VERSION || version, //'1.0.0'
        DATADOG_SESSION_SAMPLE_RATE: process.env.DATADOG_SESSION_SAMPLE_RATE || 100,
        DATADOG_SESSION_REPLAY_SAMPLE_RATE: process.env.DATADOG_SESSION_REPLAY_SAMPLE_RATE || undefined, // if not included, the default is 100
      },
```
> Don't forget to import **version** string from `package.json` to use in configuration above:
```javascript
const {version} = require('./package.json');
```
Only SSR platform case can be considered for direct access to the `process` object.


## License

Source code is licensed under the [Apache Licence, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

Copyright (c) 2023 - now, Alex <alex@milyutin.work>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

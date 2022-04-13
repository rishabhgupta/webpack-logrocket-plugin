Moengage Integration package contains all third party libraries and sdk integrations. All [exports](/modules/_index_.html).
* [BEAMER](/modules/_beamer_beamer_.html)
* [GTM](/modules/_gtm_gtm_.html)
* [LOGROCKET](/modules/_logrocket_logrocket_.html)
* [RECEPTIVE](/modules/_receptive_receptive_.html)
* [SEGMENT](/modules/_segment_segment_.html) | [TRACKING](/modules/_segment_tracking_.html)
* [SENTRY](/modules/_sentry_sentry_.html)
* [STATUSPAGE](/modules/_statuspage_statuspage_.html)

## Usage

```
import { Logrocket, Sentry } from '@moengage/integrations';
import { tracking } from '@moengage/integrations';
```

### Configuration
In the root component import [Integrations](/modules/_integrations_.html) and set configuration [options](modules/_integrations_.html#integrationoptions). This is optional.

```
import { Integrations } from '@moengage/integrations';

Integrations.options = {
    forceAll: false,
    force: [],
    env: Constants.ENVIRONMENTS.DEVELOPMENT
}
```

### Initializations

```
import { initializeLogrocket, initializeBeamer } from '@moengage/integrations;
```

## Documentation

```
http://moengage-core.moeinternal.com/v[VERSION]/index.html
```
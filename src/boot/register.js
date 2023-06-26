/**
 * Copyright 2023 Alex <alex@milyutin.work>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {boot} from 'quasar/wrappers';
import {datadogRum} from '@datadog/browser-rum';

export default boot(({app}) => {
    const config = {
        applicationId: app.config.DATADOG_APPLICATION_ID,
        clientToken: app.config.DATADOG_CLIENT_TOKEN,
        site: app.config.DATADOG_SITE,
         service: app.config.DATADOG_SERVICE || undefined,
         env: app.config.DATADOG_ENV || undefined, //'production'
         version: app.config.DATADOG_VERSION || '1.0.0', //'1.0.0'
        sessionSampleRate: app.config.DATADOG_SESSION_SAMPLE_RATE || 100,
        sessionReplaySampleRate: app.config.DATADOG_SESSION_REPLAY_SAMPLE_RATE || undefined, // if not included, the default is 100
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
    }
    datadogRum.init(config);
    datadogRum.startSessionReplayRecording();

    app.$dd = datadogRum;
});

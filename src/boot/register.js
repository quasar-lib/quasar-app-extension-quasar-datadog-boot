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
        applicationId: process.env.DATADOG_APPLICATION_ID,
        clientToken: process.env.DATADOG_CLIENT_TOKEN,
        site: process.env.DATADOG_SITE,
        service: process.env.DATADOG_SERVICE || undefined,
        env: process.env.DATADOG_ENV || undefined, //'production'
        version: process.env.DATADOG_VERSION || '1.0.0', //'1.0.0'
        sessionSampleRate: process.env.DATADOG_SESSION_SAMPLE_RATE || 100,
        sessionReplaySampleRate: process.env.DATADOG_SESSION_REPLAY_SAMPLE_RATE || undefined, // if not included, the default is 100
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
    }
    datadogRum.init(config);
    datadogRum.startSessionReplayRecording();

    app.$dd = datadogRum;
});

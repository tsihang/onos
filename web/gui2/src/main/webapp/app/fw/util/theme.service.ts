/*
 * Copyright 2014-present Open Networking Foundation
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
import { Injectable } from '@angular/core';
import { LogService } from '../../log.service';


/**
 * ONOS GUI -- Util -- Theme Service
 */
@Injectable()
export class ThemeService {
    themes: string[] = ['light', 'dark'];
    thidx: number = 0;

    constructor(
        private log: LogService
    ) {
        this.log.debug('ThemeService constructed');
    }

    getTheme(): string {
        return this.themes[this.thidx];
    }

    themeStr(): string {
        return this.themes.join(' ');
    }

}

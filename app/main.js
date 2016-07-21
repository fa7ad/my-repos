import * as React from 'react';
import {render} from 'react-dom';
import tapPlugin from 'react-tap-event-plugin';
import 'fetch';

import Routes from './Router';

tapPlugin();
render(Routes, document.getElementById('root'));

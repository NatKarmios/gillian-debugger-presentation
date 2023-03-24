import React from 'react';

import Deck from './components/revealComponents/deck';
import Slides from './slides';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Deck>
        <Slides />
      </Deck>
    </div>
  );
}

export default App;

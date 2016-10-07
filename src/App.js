import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React/TinyMCE</h2>
        </div>
        <div className="App-container">
          <TinyMCE
            content="<p>This is the initial content of the editor</p>"
            config={{
              plugins: 'autolink link image lists print preview table',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | table'
            }}
            onChange={this.handleEditorChange}
          />
        </div>
      </div>
    );
  }
}

export default App;

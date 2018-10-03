import React, { Component } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/htmlmixed/htmlmixed';

class Editor extends Component {

    render() {
        return (
            <>
                <CodeMirror value='<h1>I ♥ react-codemirror2</h1>'
                    options={{
                        mode: 'htmlmixed',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }} />
            </>
        )
    }
}


export default Editor;
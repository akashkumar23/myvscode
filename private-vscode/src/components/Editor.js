import React , {useEffect} from 'react'
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'

const Editor = () => {

    useEffect(()=>{
        async function init() {
            Codemirror.fromTextArea(document.getElementById('realTimeEditor') , {
                mode: {name: 'javascript', json:true},
                theme:'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true
            });
        }
        init();
    }, []);

  return (
    <textarea name="" id="realTimeEditor" cols="50" rows="500"></textarea>
  )
}

export default Editor

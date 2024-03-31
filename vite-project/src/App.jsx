import React, { useRef, useEffect } from 'react';
import './App.css';
import TextArea from './Component/TextArea';
import Navbar from './Component/Navbar';
import Button from './Component/Button';
import Output from './Component/Output';
import Footer from './Component/Footer';

function App() {
  const htmlRef = useRef('');
  const cssRef = useRef('');
  const jsRef = useRef('');
  const [username, setUsername] = React.useState('');

  useEffect(() => {
    // Save code to local storage when component mounts
    const savedHtml = localStorage.getItem('htmlCode');
    const savedCss = localStorage.getItem('cssCode');
    const savedJs = localStorage.getItem('jsCode');
    const savedUsername = localStorage.getItem('username');

    if (savedHtml) {
      htmlRef.current.value = savedHtml;
    }
    if (savedCss) {
      cssRef.current.value = savedCss;
    }
    if (savedJs) {
      jsRef.current.value = savedJs;
    }
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      promptUsername();
    }

    // Save code to local storage whenever there is a change in input fields
    const handleKeyUp = () => {
      localStorage.setItem('htmlCode', htmlRef.current.value);
      localStorage.setItem('cssCode', cssRef.current.value);
      localStorage.setItem('jsCode', jsRef.current.value);
    };

    htmlRef.current.addEventListener('keyup', handleKeyUp);
    cssRef.current.addEventListener('keyup', handleKeyUp);
    jsRef.current.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove event listeners
    return () => {
      htmlRef.current.removeEventListener('keyup', handleKeyUp);
      cssRef.current.removeEventListener('keyup', handleKeyUp);
      jsRef.current.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  function promptUsername() {
    const name = prompt('Please enter your name:');
    if (name) {
      localStorage.setItem('username', name);
      setUsername(name);
    } else {
      promptUsername(); // Prompt again if no name entered
    }
  }

  function run(event) {
    event.preventDefault();
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML =
      htmlRef.current.value + '<style>' + cssRef.current.value + '</style>';
    output.contentWindow.eval(jsRef.current.value);
  }

  return (
    <section className="container">
      <Navbar h2text="Front-Script" username={username} />
      <Button name="Run Code" run={run} />

      {/* main page starts here */}
      <div className="editor">
        <div className="left">
          <TextArea
            autofocus
            label="HTML"
            iconSrc="bxl-html5"
            Ref={htmlRef}
            run={run}
          />
          <TextArea
            label="CSS"
            iconSrc="bxl-css3"
            Ref={cssRef}
            run={run}
          />
          <TextArea
            label="Javascript"
            iconSrc="bxl-javascript"
            Ref={jsRef}
            run={run}
          />
        </div>

        <div className="right">
          <Output name="Output" />
        </div>
      </div>

      <Footer/>
    </section>
  );
}

export default App;

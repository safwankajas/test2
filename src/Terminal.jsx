// terminal.css
import './terminal.css';

import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [currentDirectory, setCurrentDirectory] = useState('/');
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernamePrompt, setUsernamePrompt] = useState(true);
  const [passwordPrompt, setPasswordPrompt] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameSubmit = () => {
    // Assume 'demo' as a valid username for this example
    if (username === 'safwankajas') {
      setUsernamePrompt(false);
      setPasswordPrompt(true);
      setOutput('Enter your password:');
    } else {
      setOutput('Invalid username. Access denied.');
    }
  };

  const handlePasswordSubmit = () => {
    // Assume 'kajas' as a valid password for this example
    if (password === 'kajas') {
      setIsAuthenticated(true);
      setPasswordPrompt(false);
      setOutput('Authentication successful.\nYou are now logged in.');
    } else {
      setOutput('Invalid password. Access denied.');
    }
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      runCommand();
    }
  };

  const runCommand = () => {
    if (!isAuthenticated) {
      setOutput('Please enter both username and password first.');
      setCommand('');
      return;
    }

    const [cmd, ...args] = command.split(' ');

    switch (cmd) {
      case 'cd':
        setCurrentDirectory((prevDir) => {
          const targetDir = args[0] === '..' ? '..' : args[0];
          let newDir;
          if (targetDir === '..') {
            const parts = prevDir.split('/');
            parts.pop();
            newDir = parts.join('/') || '/';
          } else {
            newDir = prevDir.endsWith('/') ? `${prevDir}${targetDir}` : `${prevDir}/${targetDir}`;
          }
          return newDir.startsWith('/') ? newDir : `/${newDir}`;
        });
        setOutput('');
        break;

      case 'ls':
        setOutput(getDirectoryContents(currentDirectory));
        break;

      case 'cat':
        setOutput(args[0] ? `Contents of ${args[0]}` : 'Usage: cat <filename>');
        break;

      case 'exit':
        logout();
        break;

      default:
        setOutput(`Command not found: ${cmd}`);
        break;
    }

    setCommand('');
  };

  const getDirectoryContents = (directory) => {
    // Simulating directory contents for demonstration purposes
    const directoryContents = {
      '/': ['home', 'downloads'],
      '/home': ['documents', 'downloads'],
      '/home/documents': ['bike'],
      '/downloads': ['3files'],
    };

    const contents = directoryContents[directory];

    if (contents) {
      return contents.join('\n');
    } else {
      return 'Directory not found.';
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPasswordPrompt(true);
    setOutput('Logged out. Please enter the password to log in again.');
  };

  useEffect(() => {
    if (passwordPrompt) {
      setOutput('Please enter the password:');
    }
  }, [passwordPrompt]);

  return (
    
    <div className="command-box">
      <div className="output">
        <span className="prompt">safwankajas@site:</span>
        <span className="directory">{currentDirectory}</span>
        <br />
        {output && <pre>{output.length > 50 ? output.substring(0, 50) + '...' : output}</pre>}
      </div>
      {usernamePrompt && (
        <div>
          <input
            className="input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onKeyPress={(event) => event.key === 'Enter' && handleUsernameSubmit()}
            placeholder="Type your username here..."
          />
        </div>
      )}
      {passwordPrompt && (
        <div>
          <input
            className="input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={(event) => event.key === 'Enter' && handlePasswordSubmit()}
            placeholder="Type your password here..."
          />
        </div>
      )}
      {!usernamePrompt && !passwordPrompt && (
        <input
          className="input"
          type="text"
          value={command}
          onChange={handleCommandChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your command here..."
        />
      )}
    </div>
  );
};

export default Terminal;

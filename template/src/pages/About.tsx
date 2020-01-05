import React from 'react';

const About: React.FC = () => {
  return (
    <section>
      <h2>About</h2>
      <p>
        This is a template for{' '}
        <a
          className="App-link"
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </a>
        . You are ready to start with{' '}
        <a
          className="App-link"
          href="https://reacttraining.com/react-router/web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>{' '}
        animated by{' '}
        <a
          className="App-link"
          href="https://www.react-spring.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-spring
        </a>
      </p>
    </section>
  );
};

export default About;

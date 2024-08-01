// src/App.tsx
import React from "react";

const App: React.FC = () => {
  console.log("NODE_ENV:" + process.env.NODE_ENV);
  return (
    <div className="test text-3xl">
      Hello, React with TypeScript and Webpack!
    </div>
  );
};

export default App;

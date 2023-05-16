import React, { useState } from 'react';
import { Toolbar, Canvas, Sidebar } from './components';
import './App.css';
import { Box } from '@chakra-ui/react';

function App() {
  const [designElements, setDesignElements] = useState([]);

  const addDesignElement = (element) => {
    setDesignElements((prevElements) => [...prevElements, element]);
  };

  const updateDesignElement = (updatedElement) => {
    setDesignElements((prevElements) => {
      return prevElements.map((element) =>
        element.id === updatedElement.id ? updatedElement : element
      );
    });
  };

  return (
    <Box className="App">
      <Toolbar onAddElement={addDesignElement} />
      <Box className="design-area" bg="gray.50">
        <Canvas designElements={designElements} onUpdateDesignElement={updateDesignElement} />
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
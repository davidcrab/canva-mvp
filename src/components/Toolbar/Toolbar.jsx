import React from "react";
import { Box, ButtonGroup, IconButton, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Toolbar = ({ onAddElement }) => {
  const handleAddShape = () => {
    const newElement = {
      id: Date.now(),
      type: "shape",
      props: {
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        fill: "red",
      },
    };

    onAddElement(newElement);
  };

  const handleAddText = () => {
    const newElement = {
      id: Date.now(),
      type: "text",
      props: {
        x: 50,
        y: 50,
        text: "New Text",
        fontSize: 20,
        fill: "black",
      },
    };

    onAddElement(newElement);
  };

  const handleAddImage = () => {
    const newElement = {
      id: Date.now(),
      type: "image",
      props: {
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        src: "https://picsum.photos/200/300",
      },
    };

    onAddElement(newElement);
  };

  return (
    <Box>
      <ButtonGroup>
        <IconButton
          icon={<AddIcon />}
          onClick={() => {
            handleAddShape();
          }}
        >
          Add Shape
        </IconButton>
        {/* Add more toolbar options as needed */}
        <Button
          leftIcon={<AddIcon />}
          onClick={() => {
            handleAddText();
          }}
        >
          Add Text
        </Button>
        <Button 
          leftIcon={<AddIcon />}
          onClick={() => {
            handleAddImage();
          }}
        >
          Add Image
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Toolbar;

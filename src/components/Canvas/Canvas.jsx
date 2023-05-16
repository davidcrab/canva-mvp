import React, { useState, useEffect } from 'react';
import { Stage, Layer, Transformer } from 'react-konva';
import { Shape, Text, Image } from '../DesignElements';

const Canvas = ({ designElements, onUpdateDesignElement }) => {
  const [selectedElementId, setSelectedElementId] = useState(null);
  const transformerRef = React.useRef();

  const handleElementClick = (id) => {
    setSelectedElementId(id);
  
    if (transformerRef.current) {
      const selectedNode = transformerRef.current.getStage().findOne('#' + id);
      
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
      } else {
        transformerRef.current.nodes([]);
      }
      
      transformerRef.current.getLayer().batchDraw();
    }
  };
  

  // useEffect(() => {
  //   if (selectedElementId && transformerRef.current) {
  //     const selectedNode = transformerRef.current.getStage().findOne('#' + selectedElementId);
      
  //     // Check if selectedNode is defined
  //     if (selectedNode) {
  //       transformerRef.current.nodes([selectedNode]);
  //       transformerRef.current.getLayer().batchDraw();
  //     } else {
  //       transformerRef.current.nodes([]);
  //       transformerRef.current.getLayer().batchDraw();
  //     }
  //   }
  // }, [selectedElementId]);
  
  
  return (
    <Stage
      width={window.innerWidth * 0.8}
      height={window.innerHeight * 0.8}
      onClick={(e) => {
        if (e.target === e.target.getStage()) {
          setSelectedElementId(null);
        }
      }}
    >
      <Layer>
        {designElements.map((element) => {
          const isSelected = selectedElementId === element.id;
          const ElementComponent =
            {
              shape: Shape,
              text: Text,
              image: Image,
            }[element.type] || null;

          if (!ElementComponent) {
            return null;
          }

          return (
            <React.Fragment key={element.id}>
              <ElementComponent
                {...element.props}
                isSelected={isSelected}
                transformerRef={isSelected ? transformerRef : null}
                onClick={() => handleElementClick(element.id)}
                onUpdate={onUpdateDesignElement}
              />
              {isSelected && (
                <Transformer
                  ref={transformerRef}
                  rotateEnabled={true}
                  keepRatio={true}
                />
              )}
            </React.Fragment>
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;

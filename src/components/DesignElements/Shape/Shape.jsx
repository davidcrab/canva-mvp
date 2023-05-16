import React, { useRef } from 'react';
import { Rect } from 'react-konva';
import useTransformer from '../../../hooks/useTransformer';

const Shape = (props) => {
  const shapeRef = useRef();

  useTransformer(shapeRef, props.isSelected, props.transformerRef);

  return (
    <Rect
      ref={shapeRef}
      {...props}
      draggable
      onDragEnd={(e) => {
        props.onUpdate({ ...props, x: e.target.x(), y: e.target.y() });
      }}
    />
  );
};

export default Shape;

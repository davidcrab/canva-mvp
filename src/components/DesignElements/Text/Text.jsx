import React from 'react';
import { Text as KonvaText } from 'react-konva';
import { useRef } from 'react';
import useTransformer from '../../../hooks/useTransformer';

const Text = (props) => {
  const textRef = useRef();

  useTransformer(textRef, props.isSelected, props.transformerRef);

  return (
    <KonvaText
      ref={textRef}
      {...props}
      draggable
      onDragEnd={(e) => {
        props.onUpdate({ ...props, x: e.target.x(), y: e.target.y() });
      }}
    />
  );
};

export default Text;
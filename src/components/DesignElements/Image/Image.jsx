import { useEffect, useState, useRef } from 'react';
import { Image as KonvaImage } from 'react-konva';
import useTransformer from '../../../hooks/useTransformer';

const Image = (props) => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    const img = new window.Image();
    img.src = props.src;
    img.onload = () => setImage(img);
  }, [props.src]);

  useTransformer(imageRef, props.isSelected, props.transformerRef);

  return (
    <KonvaImage
      ref={imageRef}
      {...props}
      image={image}
      draggable
      onDragEnd={(e) => {
        props.onUpdate({ ...props, x: e.target.x(), y: e.target.y() });
      }}
    />
  );
};

export default Image;

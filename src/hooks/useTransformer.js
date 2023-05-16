import { useEffect } from 'react';

const useTransformer = (elementRef, isSelected, transformerRef) => {
  useEffect(() => {
    if (isSelected && transformerRef && transformerRef.current) {
      transformerRef.current.nodes([elementRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected, transformerRef, elementRef]);
};

export default useTransformer;

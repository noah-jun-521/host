import React, { useEffect, useRef } from 'react';
import { mount } from 'remote_vue3/App';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

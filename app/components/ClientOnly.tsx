'use client';

import React, { useEffect, useState } from 'react';

interface ClientOnlyProps {
   children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Render nothing until the component has mounted
  }

  return (
    <> 
      {children} {/* Corrected: Render the children passed to this component */}
    </>
  );
}

export default ClientOnly;

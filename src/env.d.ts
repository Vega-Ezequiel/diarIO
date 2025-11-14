/// <reference types="astro/client" />

import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicAttributes {
      'client:load'?: boolean;
      'client:idle'?: boolean;
      'client:visible'?: boolean;
      'client:only'?: string | boolean;
      'client:media'?: string;
    }
  }
}


import * as React from 'react';

import { PeelEffectViewProps } from './PeelEffect.types';

export default function PeelEffectView(props: PeelEffectViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

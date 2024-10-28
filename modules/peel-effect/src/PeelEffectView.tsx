import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { PeelEffectViewProps } from './PeelEffect.types';

const NativeView: React.ComponentType<PeelEffectViewProps> =
  requireNativeViewManager('PeelEffect');

export default function PeelEffectView(props: PeelEffectViewProps) {
  return <NativeView {...props} />;
}

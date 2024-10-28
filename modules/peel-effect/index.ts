import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to PeelEffect.web.ts
// and on native platforms to PeelEffect.ts
import PeelEffectModule from './src/PeelEffectModule';
import PeelEffectView from './src/PeelEffectView';
import { ChangeEventPayload, PeelEffectViewProps } from './src/PeelEffect.types';

// Get the native constant value.
export const PI = PeelEffectModule.PI;

export function hello(): string {
  return PeelEffectModule.hello();
}

export async function setValueAsync(value: string) {
  return await PeelEffectModule.setValueAsync(value);
}

const emitter = new EventEmitter(PeelEffectModule ?? NativeModulesProxy.PeelEffect);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { PeelEffectView, PeelEffectViewProps, ChangeEventPayload };

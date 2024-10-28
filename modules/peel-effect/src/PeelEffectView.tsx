import { requireNativeViewManager } from "expo-modules-core";

const NativePeelEffectView = requireNativeViewManager("PeelEffect");

export function PeelEffectView() {
  return <NativePeelEffectView />;
}

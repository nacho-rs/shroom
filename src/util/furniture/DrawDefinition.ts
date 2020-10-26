import { Asset } from "./parseAssets";
import { Layer } from "./visualization/parseLayers";

export type DrawPart = {
  z?: number;
  shadow: boolean;
  frameRepeat: number;
  asset: Asset;
  layer: Layer | undefined;
  tint?: string;
  assets?: Asset[];
};

export interface DrawDefinition {
  parts: DrawPart[];
  frameCount?: number;
}

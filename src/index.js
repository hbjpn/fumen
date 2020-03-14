import "@babel/polyfill";
export { Parser } from "./parser/parser";
//export * from './renderer/default_renderer';
export { MobileRenderer } from "./renderer/mobile_renderer";
export { SetupHiDPICanvas } from "./renderer/graphic";

// Debug
export { GetCharProfile } from "./renderer/graphic";
export { CanvasTextWithBox } from "./renderer/graphic";
export { CanvasText } from "./renderer/graphic";
export { getFontSizeFromHeight } from "./renderer/graphic";

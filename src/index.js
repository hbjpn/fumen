import "@babel/polyfill";
export { Parser } from "./parser/parser";
//export * from './renderer/default_renderer';
export { DefaultRenderer } from "./renderer/default_renderer";
export { SetupHiDPICanvas } from "./renderer/graphic";

// Debug
export { GetCharProfile } from "./renderer/graphic";
export { CanvasTextWithBox } from "./renderer/graphic";
export { CanvasText } from "./renderer/graphic";
export { getFontSizeFromHeight } from "./renderer/graphic";

// Export Component Classes
export { Chord, Rest, 
    MeasureBoundary, 
    MeasureBoundaryMark, LoopBeginMark, LoopEndMark, LoopBothMark, MeasureBoundaryFinMark, MeasureBoundaryDblSimile,
    Time, Coda, Segno, ToCoda, DalSegno, DaCapo, Simile, Variable, RawSpaces, TemplateString } from "./common/common";
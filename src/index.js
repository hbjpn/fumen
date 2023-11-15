import "@babel/polyfill";
export { Parser } from "./parser/parser";
//export * from './renderer/default_renderer';
export { DefaultRenderer } from "./renderer/default_renderer";
export { setupHiDPICanvas } from "./renderer/graphic";

// Debug
export { getCharProfile } from "./renderer/graphic";
export { canvasTextWithBox } from "./renderer/graphic";
export { canvasText } from "./renderer/graphic";
export { getFontSizeFromHeight } from "./renderer/graphic";

// Export Component Classes
export {
    RehearsalGroup, Block, Measure,
    Title, SubTitle, Artist,
    Chord, Rest, LongRest, Comment, Lyric, Space,
    MeasureBoundary, MeasureBoundaryMark, LoopBeginMark, LoopEndMark, LoopBothMark, MeasureBoundaryFinMark, MeasureBoundaryDblSimile,
    LoopIndicator,
    Time, Coda, Segno, ToCoda, DalSegno, DaCapo, Fine, Simile, Variable,
    GenericRow } from "./common/common";
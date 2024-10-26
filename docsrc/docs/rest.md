# Rests

Two types of rest symbols are supported. Normal rests and long rests.

**Normal rests** are rests of which duration is not more than one measure and is specified by small letter "r" followed by [duration indictor](duration-indicator.md).

**Long rests** are rests of which duration is multiple of one measure and is specified by number of measures to rest enclosed within hyphens.

You can also draw chord symbol above the rest symbol by putting chord symbol before the "r"(without any space) . Rendering is valid only when the 5 lines are shown. 

| Markdown | note |
| ------- | ---- |
| r:1 r:2 r:4 r:8 r:16 r:32 r:64 | Normal rests of whote rest, half rest, quarter rest, eighth rest, sixteenth rest thirty-second rest and six-forth rest.  Please see [duration indicator](duration-indicator.md) for the detail of duration indicator syntax. |
| Cr:4 | Chord symbol is drawn avobe the rests. Valid only when 5 lines are shown. |
| -2- | Long rests with duration of 2 measures. Arbitral integer can be specified within hyphens. |

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[Normal rests]
| C:4 D:4 r:4. E:8 Fr:4|

[Long rests]
| -2- |
<!-- fumen:end -->
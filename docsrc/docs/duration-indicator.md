# Duration Indicator

[Chord](chord.md) symbols can be specified with duration indicator and in that case rhythm slahses are drawn together with the staff. 

Normal [rest](rest.md) symbols shall be specified with duration indicators.

By combining the "<" symbol with a duration indicator, the following chord is syncopated by the specified time duration.

Duration indicator is colon ":" followed by numbers and optional periods indicating the duration of that chord or rest.

| Markdown | note |
| ------- | ---- |
| C:1 C:2 C:4 C:8 C16 C32 C:64 | Whote note, half note, quarter note, eighth note, sixteenth note thirty-second note and six-forth note.  |
| C:4. | Dotted quarter note.  Duration numbers of 1, 2, 8, 16, 32 or 64 can also be specified with dots. |
| C:4.. | Dobble dotted quarter note. Duration numbers of 1, 2, 8, 16, 32 or 64 can also be specified with double dots. 3 or more dots can be specified with the same manner. |
| C:4_3 :4_3 :4_3 | Quarter note triplets. Duration numbers of 1, 2, 8, 16, 32 or 64 can also be specified with tiplets mark. Not applicable for rests.|
| C:4_5 :4_5 :4_5 :4_5 :4_5 | Quarter note quintuplet. Duration numbers of 1, 2, 8, 16, 32 or 64 can also be specified with quintuplet mark. Suffix _6 and _7 can be specified with the same manner to indicate sextuplet and septuplet. Not applicable for rests.|
| :4 | This is the form of omitted chord name but specify only duration informatin. This is benefical for the case where the same chord is maintained for several rhthm slashes. Not applicable for rests.| 
| C:4~ :4 | The tilde (~) mark indicates the "tie" mark. Rhthm slashes are connected via tie symbol. Not applicable for rests. |
| <:16 C:4 | The C chord with a half-note duration syncopated by a 16th-note duration. |


<!-- fumen:start -->
%SHOW_FOOTER="NO"

[Chords]
| A:4 :4 B:8. C:16~ :4~ | :2 B:4.. C:16 | 
| C:4_3 :4_3 :4_3~ :4_5 :4_5 :4_5 :4_5 :4_5  |

[Rests]
|  A:4 r:8. r:16 r:4 | r:1 | r:2 r:2 |

[Syncopation]
| A:2 B:2  | <:16 C:2 D:2 | 

<!-- fumen:end -->
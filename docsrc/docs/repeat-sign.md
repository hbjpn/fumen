# Repeat sign

In additionion to the measure boundary mark with repeat sign, following repeat signs can be specified within a measure.

| Markdown         | Description  |
| ------------- | -----|
| <Coda\>      | Coda sign. Integer number can be specified after Coda. |
| <to Coda\>   | "To Coda" sign.  Integer number can be specified after Coda. |
| <S\>         | Segno sign. Integer number can be specified after S. |
| <D.S.\>      | Dal segno. Integer number can be specified after D.S. |
| <D.S. al Coda\>      | Dal segno al Coda. al Fine can be also specified. |
| <D.C.\>      | Da Capo. |
| <D.S. al Coda\>      | Da Capo al Coda. al Fine can be also specified. |
| <Fine\>      | Fine. |
| [1.]          | Indicates the measures valid for paticular repeat. Any text can be specified. Normally, used with measure boundary with repeat sign and specifying the repat numbers to apply e.g. "1.", "2-3."  |
| ./.           | Simile mark(single) |
| .//.          | Simile mark(double) |

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| A | B | <S> C | D <to Coda> |
| E <D.S.> | F <D.C.> | <Coda> G | A |

[B]
| A | B | <S2> C | D <to Coda2> |
| E <D.S.2> | F | <Coda2> G | A |

[C]
||: A | B |[1.] C | [2-3.] D :||x3
| ./. | .//. | E <Fine> ||.
<!-- fumen:end -->



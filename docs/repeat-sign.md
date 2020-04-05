# Repeat sign

In additionion to the measure boundary mark with repeat sign, following repeat signs can be specified within a measure.

| Markdown         | Description  |
| ------------- | -----|
| \<Coda\>      | Coda sign.  |
| \<to Coda\>   | "To Coda" sign.  |
| \<S\>         | Segno sign. |
| \<D.S.\>      | Dal segno. |
| \<D.C.\>      | Da Capo. |
| \<Fine\>      | Fine. |
| [1.]          | Indicates the measures valid for paticular repeat. Any text can be specified. Normally, used with measure boundary with repeat sign and specifying the repat numbers to apply e.g. "1.", "2-3."  |

<!-- fumen:start -->
%SHOW_HEADER="NO"
%SHOW_FOOTER="NO"

[A]
| A | B | <S> C | D <to Coda> |
| E <D.S.> | F <D.C.> | <Coda> G | A |

[B]
| A | B | <S2> C | D <to Coda2> |
| E <D.S.2> | F | <Coda2> G | A |

[C]
||: A | B |[1.] C | [2-3.] D :||x3
<| E <Fine> ||.
<!-- fumen:end -->



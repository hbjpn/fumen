# Transpose

Transpose is done by either of following ways :

- Specify base key by "%KEY" variable and transposed key by "%TRANSPOSE" variable.
- Specify base key by "%KEY" variable and transpose interval (integer) by "%TRANSPOSE" varitable and prefered key type(flat or sharp) by "%KEY_TYPE" variable.

<!-- fumen:start -->
%SHOW_FOOTER="NO"
%KEY="C"
%TRANSPOSE="Db"

[A]
| C | Dm G7 | C |
<!-- fumen:end -->

<!-- fumen:start -->
%SHOW_FOOTER="NO"
%KEY="C"
%TRANSPOSE=1
%KEY_TYPE="#"

[A]
| C | Dm G7 | C |
<!-- fumen:end -->
# Variable

Variables are specified by the form of "%VariableName=Value".

| Variable Name        | Value Type          | Description  |
| ------------- |:-------------:| -----|
| TITLE     | String      | Title of the song. | 
| SUB_TITLE     | String      | Sub title of the song. | 
| ARTIST     | String      | Artist name. | 
| KEY        | String      | Key of the song. e.g. C, Gm |
| TRANSPOSE | String\|Integer | Transposed key (String) or transpose interval by integer in semitone unit. See [Transose](transpose.md) for details. |
| KEY_TYPE  | String | Preffered key type(flat/b or sharp/#) for transposing. See [Transpose](transpose.md) for details. |
| SHOW_STAFF | String | "YES" : Force showing staffs. "NO" : Force not showing staffs. Nothing specified(default) means fumen automatically add staff if needed |
| SHOW_FOOTER | String | "YES" : Show footer(default), "NO": Not to show footer.
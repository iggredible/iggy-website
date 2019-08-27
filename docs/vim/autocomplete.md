# Autocomplete

With `<C-p> <C-n>`
`set ignorecase` makes autocomplete to ignore case

List of completions
```
<C-x>...

<C-n> //current buffer keywords
<C-i> //included file keywords 
<C-]> // tags file keywords keywords
<C-k> // dictionary
<C-l> // whole line
<C-f> // filename
<C-o> // omnicomplete
```
Omnicompletion handles all
- it is like intellisense, a la vim
- needs 
```
set nocompatible 
filetype plugin on
```
- also need to install omni-completion plugin

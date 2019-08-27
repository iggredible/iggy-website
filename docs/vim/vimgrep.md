# Vimgrep

## Using Grep
Need to find matches across entire project
- scan many files
`:h grep`
- call external program without leaving editor
- can be customized 
  - ex: use `ack` instead

```
$ grep -n Waldo *
❮ department-store.txt:1:Waldo is beside the boot counter.
   goldrush.txt:6:Waldo is studying his clipboard.
   goldrush.txt:9:The penny farthing is 10 paces ahead of Waldo.
 ```
 - `-n` to show line number
- `grep` is built-in Unix command
- Vim's `:grep` is a wrapper to such command

`:grep Waldo *` in Vim is the same as running `grep -n Waldo *` on command line

## Customizing grep
`:h grepprg`

Using `ack` instead of grep
Ack:
https://beyondgrep.com/

install ack
then we can do `ack Waldo *`

ack uses Perl regex
grep uses POSIX regex

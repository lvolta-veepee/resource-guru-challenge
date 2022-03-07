# Resource Guru engineering code challenge

Thank you for your interest in joining Resource Guru's engineering team. The next step in the process is for you
to complete the code challenge described below.

Take as much or as little time as you need. We understand you may have other commitments and time constraints as 
well. Please let us know roughly when we should expect your answers (e.g. "next Monday") and let us know if you 
need more time.

### What we're looking for

The details matter. Tests are expected, as is well written, simple idiomatic code. A good submission will be
self explanatory, the tests will be good documentation for the code and it will gracefully handle strange or
invalid inputs. Functions will have clearly defined responsibilities. Test cases cover likely problems with 
input data.

We suggest you work in a separate Git repository per exercise, and commit after each step so that we can follow
your thinking more clearly. We prefer that you submit your solution using Github or Bitbucket. 

# Part 1 – Flattening an array

⏱ We estimate that this should take approximately 30 minutes, but please take as much or as little time as you need.

Write an algorithm to flatten an arbitrarily nested array of values. 

```
[ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
```

If your language of choice includes a flattening function, please implement your own.

# Part 2 – Refactoring an expression tree

⏱ We estimate that this should take 30 to 60 minutes, but please take as much or as little time as you need.

We have provided a fairly naive implementation of an expression tree for basic arithmetic in [JavaScript](#file-tree-js) and [Ruby](#file-tree-rb). Pick whichever language you feel more comfortable working in for this section.

Apply your knowledge of good software design principles to refactor and improve the design of this code.
Feel free to change anything in the file as part of your refactoring, apart from the final assertions 
that consume the tree.
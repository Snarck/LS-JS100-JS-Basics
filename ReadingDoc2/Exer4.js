/*
Find the MDN documentation on operator precedence, and use it to find out which result the expression
 4 * 5 + 3 ** 2 / 10 
 = 20.9
Because 3 ** 2 is part of the division problem it looks like this, doing parenthesis first:
4 * 5 + ((3 ** 2) / 10)
We resolve 3 ** 2 to 9
and then we divide it by 10
(0.9)
That leaves us with 
(4 * 5) + 0.9
(redundant parenthesis, to explain)
We do the * first, leading us 20.
Finally, we have:
20 * 0.9


4 * 5 + 9 / 10 = 9
0.9
4 * 5 = 20
20 + 0.9
= 20.9



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
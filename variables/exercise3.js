it throws an error because foo was declared within block scope, so only exists within the block. 
when called upon later, it throws an error because foo does not exist outside of said block.
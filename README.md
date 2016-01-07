# jquery-delayed-function

Amazing plugin made exclusively for Guys from flow2code.com

## Usage
```
  $('#ul2').delayedFunc({
    delay: 100, 
    selector: '.show_me',
    func: 'fadeIn',
    settings: {
      duration: 10
    }
  });
```

Leaving selector option empty, selects parent children with $.children() func;
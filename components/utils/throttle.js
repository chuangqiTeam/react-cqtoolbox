export default function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  let last,
      deferTimer;
  return function () {
    const context = scope || this;

    let now = Date.now(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

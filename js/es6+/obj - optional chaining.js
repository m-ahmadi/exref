obj?.prop
obj?.[expr]
func?.(args)

const city = p.details?.address?.city;
const age = p.details?.age;

obj.method?.()

function doSomething(onContent, onError) {
  if (onError) onError(err.message); // same as:
	onError?.(err.message);
}
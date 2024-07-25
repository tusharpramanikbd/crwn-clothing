// Function type overloading

type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

type Action<T> = {
  type: T;
};

export function myFunc<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function myFunc<T extends string>(type: T, payload: void): Action<T>;

export function myFunc<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}

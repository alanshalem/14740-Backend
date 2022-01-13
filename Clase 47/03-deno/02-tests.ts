import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test(
  "example",
  (): void => {
    assertEquals(1, 1);
    assertEquals({ hello: "world" }, { hello: "world" });
  },
);

Deno.test(
  "isStrictlyEquals",
  (): void => {
    const a = {};
    const b = a;
    assertStrictEquals(a, b);
  },
);

Deno.test(
  "isNoStrictlyEquals",
  (): void => {
    const a = {};
    const b = {};
    assertStrictEquals(a, b);
  },
);

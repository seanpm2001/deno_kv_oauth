// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { signOut } from "./sign_out.ts";
import { SITE_COOKIE_NAME } from "./_http.ts";
import { assertRedirect } from "./_test_utils.ts";

Deno.test("signOut() returns a redirect response if the user is not signed-in", async () => {
  const request = new Request("http://example.com/signout");
  const response = await signOut(request);

  assertRedirect(response, "/");
});

Deno.test("signOut() returns a response that signs out the signed-in user", async () => {
  const request = new Request("http://example.com/signout");
  const response = await signOut(request);

  assertRedirect(response, "/");
  assertEquals(
    response.headers.get("set-cookie"),
    `${SITE_COOKIE_NAME}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
  );
});

Deno.test("signOut() returns a response that signs out the signed-in user with cookie options", async () => {
  const request = new Request("http://example.com/signout");
  const cookieOptions = {
    name: "triple-choc",
    domain: "example.com",
    path: "/path",
  };
  const response = await signOut(request, { cookieOptions });

  assertRedirect(response, "/");
  assertEquals(
    response.headers.get("set-cookie"),
    `${cookieOptions.name}=; Domain=${cookieOptions.domain}; Path=${cookieOptions.path}; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
  );
});

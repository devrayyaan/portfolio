"use server";

import { cookies } from "next/headers";

export async function setThemeCookie(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme);
}

export async function getThemeCookie() {
  const cookieStore = await cookies();
  return cookieStore.get("theme")?.value;
}

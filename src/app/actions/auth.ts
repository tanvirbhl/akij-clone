"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password");
  
  // Read the password from the .env.local file
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD is not set in environment variables.");
    return { error: "Server configuration error." };
  }

  if (password === adminPassword) {
    const cookieStore = await cookies();
    
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day expiration
      path: "/",
    });
    
    redirect("/admin");
  }
  
  return { error: "Invalid password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/login");
}
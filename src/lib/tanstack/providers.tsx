"use client";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function TanstackProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

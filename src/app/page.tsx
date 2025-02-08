"use client";
import { HomeContainer } from "@/container";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContainer />
      </Suspense>
    </div>
  );
}

import React from "react";
import { DropdownMenu } from "../components/dropdown";

export default function Home() {
    return (
        <div className="min-h-screen grid grid-flow-col bg-gradient-to-r from-pink-300 to-blue-200 justify-center items-center">
            <DropdownMenu />
        </div>
    );
}
import React from "react";
import { Dropdown } from "../components/dropdown";

export default function Home() {
    return (
        <div className="min-h-screen grid grid-flow-col bg-gradient-to-r from-pink-500 to-cyan-500 justify-center items-center">
            <Dropdown />
        </div>
    );
}
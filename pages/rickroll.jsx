import React from "react";
import Navbar from "../components/Navbar/navbar";

export default function RickRollPage() {
    return (
        <div>
            <head>
                <title>History of Rick Roll</title>
            </head>
            <Navbar />
            <main className="bg-backgroundColor text-center">
                <h1 className="text-primaryColor font-semibold text-6xl py-12">What is RickRoll?</h1>
                <div className="px-40 pb-64 p-10 py-10">
                    It is a prank and internet meme involving an unexpected appearance of a music video 
                    "Never Gonna Give You Up" by Rick Astley which hit number 1 in top 100 in March of 1988. 
                    It also has a long journey on how it became a meme, it started when it gained popularity on the internet
                    after it's appearance in "It's always sunny in philadelphia" 
                    Then the creator of 4chan created a word filter which changed the word from egg - duck
                    which started a new meme when it changed the word eggroll to duckroll and this img popped up
                    people started generating links which would misdirect the people to this image and when GTA 4 
                    came out and people started linking to it's trailer but it took them to this video and thus Rickrolling was
                    born.
                </div>

            </main>
        </div>
    )
}
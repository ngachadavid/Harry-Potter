import React from "react";
import { useRouter } from "next/router";

const CharacterDetailsPage: React.FC = () => {
    const router = useRouter();
    const { characterId } = router.query;

    return (
        <div>
            <h1>Character Details Page</h1>
            <p>Character ID: {characterId}</p>
        </div>
    );
};

export default CharacterDetailsPage;
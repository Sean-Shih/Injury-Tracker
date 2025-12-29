import { Player } from "../types/Player.ts"

export async function fetchPlayers(): Promise<Player[]> {
    const res = await fetch("http://localhost:5173/api/players")
    if (!res.ok) throw new Error("Failed to fetch players")
    return res.json()
}
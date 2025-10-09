const artists: string[] = ['Taylor Swift', 'Ed Sheeran', 'Adele', 
     'Drake', 'Billie Eilish', 'The Weeknd'];

export function printArtists(): void {
	for (const a of artists) {
		console.log(a);
	}
}


printArtists();

export default artists;

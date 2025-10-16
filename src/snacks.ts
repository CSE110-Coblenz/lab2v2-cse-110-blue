const snacks: string[] = ['chips', 'pringles','pretzels'];

export function printSnacks(): void {
	for (const s of snacks) {
		console.log(s);
	}
}

// call the function to print the snacks
printSnacks();

export default snacks;

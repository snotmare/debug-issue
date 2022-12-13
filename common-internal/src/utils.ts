export class Utils {
	static isEmpty(object: unknown): boolean {
		return object === undefined
			|| object === null;
	}
}
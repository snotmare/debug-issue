export class ExternalUtils {
	static isEmptyExternal(object: unknown): boolean {
		return object === undefined
			|| object === null;
	}
}
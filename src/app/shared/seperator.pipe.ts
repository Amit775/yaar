import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'seperator', standalone: true })
export class SeperatorPipe<T, S> implements PipeTransform {
	transform(array: T[], seperator: S): (T | S)[] {
		if (!array || array.length === 0) return [];
		const withSeperators = array.reduce((result: (T | S)[], item: T) => {
			result.push(seperator, item);
			return result
		}, []);
		withSeperators.push(seperator);

		return withSeperators;
	}
}
import { OfferGeneratorInterface } from "./offer-generator.interface.js";
import { MockDataType } from "./mock-data.type.js";
export default class OfferGenerator implements OfferGeneratorInterface {
    private readonly mockData;
    constructor(mockData: MockDataType);
    generate(): string;
}

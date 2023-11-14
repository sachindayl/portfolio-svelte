import type { PackagePricingI } from "./PackagePricingI";

export interface PackageI {
	name: string;
	isPopular: boolean;
	pricing: PackagePricingI;
	coverage: string[];
	description: string;
}

import type { PackageProperties } from "@/interfaces/interface/packages";

export interface InitialState {
  packages: PackageProperties[];
  modalPackage: undefined | PackageProperties;
  isLoadPackages: boolean;
}

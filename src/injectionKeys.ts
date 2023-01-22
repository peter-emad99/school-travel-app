import type { InjectionKey } from "vue";
import type { TDestination } from "./components/DestinationItem.vue";

export const TravelData = Symbol() as InjectionKey<TDestination[]>;

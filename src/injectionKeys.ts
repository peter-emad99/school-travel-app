import type { InjectionKey } from "vue";
import type { Destination } from "./components/DestinationItem.vue";

export const TravelData = Symbol() as InjectionKey<Destination[]>;
